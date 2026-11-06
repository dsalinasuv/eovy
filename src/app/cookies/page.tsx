import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies | EcoAI Lab',
  description: 'Información sobre las cookies utilizadas en EcoAI Lab.',
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-slate-100 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-slate-900 text-sm flex items-center gap-2.5">
          <div className="relative h-7 w-9 rounded-md overflow-hidden bg-slate-950 border border-slate-700/60 shadow-xs flex items-center justify-center p-0.5">
            <Image
              src="/images/logo_ecoai.png"
              alt="EcoAI Lab"
              width={36}
              height={28}
              className="object-contain w-full h-full"
            />
          </div>
          EcoAI Lab
        </Link>
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">← Volver</Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-sky-600 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Legal</p>
        <h1 className="text-3xl font-black text-slate-900 mb-2">Política de Cookies</h1>
        <p className="text-slate-500 text-sm mb-10">Última actualización: octubre 2026</p>

        <div className="space-y-8 text-sm text-slate-600 leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario para recordar preferencias o recoger información de navegación.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-4">Cookies utilizadas en este sitio</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Nombre</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Proveedor</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Finalidad</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Duración</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 font-mono">ecoai_cookie_consent</td>
                    <td className="border border-slate-200 px-3 py-2">EcoAI Lab (CustomAI Solutions Lab S.L.)</td>
                    <td className="border border-slate-200 px-3 py-2">Almacena la preferencia de consentimiento de cookies</td>
                    <td className="border border-slate-200 px-3 py-2">12 meses</td>
                    <td className="border border-slate-200 px-3 py-2"><span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-700 rounded text-[10px] font-semibold">Necesaria</span></td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="border border-slate-200 px-3 py-2 font-mono">_ga, _ga_*</td>
                    <td className="border border-slate-200 px-3 py-2">Google Analytics 4</td>
                    <td className="border border-slate-200 px-3 py-2">Analítica de navegación y conversiones (solo con consentimiento)</td>
                    <td className="border border-slate-200 px-3 py-2">13 meses</td>
                    <td className="border border-slate-200 px-3 py-2"><span className="px-1.5 py-0.5 bg-sky-100 text-sky-700 rounded text-[10px] font-semibold">Analítica</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">Cómo gestionar las cookies</h2>
            <p className="mb-3">Puede aceptar o rechazar las cookies analíticas a través del banner de consentimiento que aparece al acceder al sitio. También puede eliminarlas desde la configuración de su navegador:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
              <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
              <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
              <li><strong>Edge:</strong> Configuración → Privacidad y servicios → Cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">Contacto</h2>
            <p>Para cualquier consulta sobre el uso de cookies: <a href="mailto:hello@ecoailab.es" className="text-sky-600 hover:underline font-mono">hello@ecoailab.es</a></p>
          </section>

        </div>
      </main>

      <footer className="border-t border-slate-100 py-8 px-6 text-center">
        <div className="flex items-center justify-center gap-6 text-xs text-slate-400">
          <Link href="/privacy-policy" className="hover:text-slate-700">Privacidad</Link>
          <Link href="/terms" className="hover:text-slate-700">Términos</Link>
          <Link href="/cookies" className="hover:text-slate-700">Cookies</Link>
        </div>
      </footer>
    </div>
  );
}
