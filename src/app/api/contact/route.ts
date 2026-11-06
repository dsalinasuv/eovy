import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Límite por IP en memoria con purga automática para evitar fugas de memoria.
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  // Purgar entradas expiradas si el mapa supera 200 IPs para evitar fugas de memoria
  if (hits.size > 200) {
    hits.forEach((times, k) => {
      const active = times.filter((t: number) => now - t < WINDOW_MS);
      if (active.length === 0) hits.delete(k);
      else hits.set(k, active);
    });
  }

  const recent = (hits.get(ip) ?? []).filter((t: number) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function fail(message: string, status: number) {
  return NextResponse.json({ success: false, message }, { status });
}

const noBreaks = (v: string) => v.replace(/[\r\n]+/g, ' ');
const str = (v: unknown, max: number) => (typeof v === 'string' ? noBreaks(v.trim()).slice(0, max) : '');

function mailer() {
  const host = process.env.SMTP_HOST?.trim();
  const from = (process.env.SMTP_FROM || process.env.SMTP_USER || '').trim();
  if (!host || !from) return null;

  const security = (process.env.SMTP_SECURITY ?? 'starttls').trim().toLowerCase();
  if (!['starttls', 'ssl', 'none'].includes(security)) return null;
  // Sin cifrado solo en desarrollo.
  if (security === 'none' && process.env.NODE_ENV === 'production') return null;

  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASSWORD;
  const transporter = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: security === 'ssl',
    requireTLS: security === 'starttls',
    ignoreTLS: security === 'none',
    auth: user && pass ? { user, pass } : undefined,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });
  return { transporter, from, to: process.env.CONTACT_TO?.trim() || from };
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return fail('Solicitud no válida.', 400);
  }

  // Campo trampa para bots: se responde con éxito sin enviar nada.
  if (str(body.website, 200)) return NextResponse.json({ success: true });

  const name = str(body.name, 120);
  const email = str(body.email, 254);
  const company = str(body.company, 120);
  const message = typeof body.message === 'string' ? body.message.trim().slice(0, 4000) : '';

  if (!name || !email || !company) return fail('Faltan campos obligatorios.', 400);
  if (!EMAIL_RE.test(email)) return fail('Revise los datos del formulario.', 400);
  if (body.privacy !== true) {
    return fail('Debe aceptar la política de privacidad para enviar el formulario.', 400);
  }

  const rawIp =
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-real-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  const ip = rawIp && rawIp.length <= 45 ? rawIp : 'unknown';
  if (rateLimited(ip)) return fail('Demasiadas solicitudes. Inténtelo más tarde.', 429);

  const smtp = mailer();
  if (!smtp) {
    console.error('contact: SMTP no configurado');
    return fail('Servicio no disponible.', 503);
  }

  try {
    await smtp.transporter.sendMail({
      from: smtp.from,
      to: smtp.to,
      replyTo: email,
      subject: `Contacto Eovy: ${company}`,
      text: [`Nombre: ${name}`, `Correo: ${email}`, `Organización: ${company}`, '', message].join('\n'),
    });
  } catch (error) {
    console.error('contact: fallo al enviar', (error as { code?: string }).code ?? 'unknown');
    return fail('No se pudo enviar la solicitud.', 502);
  }
  return NextResponse.json({ success: true });
}
