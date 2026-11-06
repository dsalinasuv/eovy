'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Dict } from '@/i18n/dictionaries';
import { Reveal } from './Reveal';
import { SectionPill } from './SectionPill';

const EMAIL = 'hello@ecoailab.es';

const fieldClass =
  'w-full rounded-xl border border-eo-ink/20 bg-white px-4 py-2.5 text-base text-eo-ink focus:border-eo-leaf focus:outline-none focus:ring-2 focus:ring-eo-leaf/30';
const labelClass = 'mb-1.5 block text-sm font-medium text-eo-ink';

export function Contact({ t }: { t: Dict }) {
  const f = t.contact.form;
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const field = (k: string) => String(data.get(k) ?? '');

    setStatus('sending');
    const privacyAccepted = data.get('privacy') === 'on';
    if (!privacyAccepted) {
      setStatus('error');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: field('name'),
          email: field('email'),
          company: field('company'),
          message: field('message'),
          website: field('website'),
          privacy: privacyAccepted,
        }),
      });
      if (!res.ok) throw new Error('request_failed');
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="relative scroll-mt-24 overflow-hidden px-6 py-24 text-white sm:py-32">
      <Image src="/images/solar_park.jpg" alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" />
      <div className="absolute inset-0 bg-eo-ink/65" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <SectionPill tone="light">{t.contact.pill}</SectionPill>
          <h2 className="mt-5 text-4xl font-light tracking-tight sm:text-6xl">{t.contact.title}</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/90">{t.contact.text}</p>
          <p className="mt-8 font-mono text-xs uppercase tracking-wider text-white/70">{t.contact.emailLabel}</p>
          <a href={`mailto:${EMAIL}`} className="mt-1 inline-block text-xl font-medium hover:underline">
            {EMAIL}
          </a>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={handleSubmit} className="space-y-4 rounded-[2rem] bg-white p-7 text-eo-ink sm:p-9">
            <div>
              <label htmlFor="contact-name" className={labelClass}>
                {f.name}
              </label>
              <input id="contact-name" name="name" type="text" required autoComplete="name" className={fieldClass} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-email" className={labelClass}>
                  {f.email}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="contact-company" className={labelClass}>
                  {f.company}
                </label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  required
                  autoComplete="organization"
                  className={fieldClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className={labelClass}>
                {f.message}
              </label>
              <textarea id="contact-message" name="message" rows={3} className={`${fieldClass} resize-none`} />
            </div>
            <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
              <label htmlFor="contact-website">Website</label>
              <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            {/* Consentimiento explícito RGPD */}
            <div className="flex items-start gap-3 pt-1">
              <input
                id="contact-privacy"
                name="privacy"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-eo-ink/30 text-eo-leaf focus:ring-eo-leaf"
              />
              <label htmlFor="contact-privacy" className="text-xs text-eo-ink/80 leading-relaxed">
                {f.privacyConsent}{' '}
                <Link href="/privacy-policy" className="font-semibold text-eo-leaf underline" target="_blank">
                  {f.privacyLink}
                </Link>{' '}
                {f.privacyConsentLegal}.
              </label>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full rounded-full bg-eo-leaf px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-eo-leafDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eo-leaf focus-visible:ring-offset-2 disabled:opacity-60"
            >
              {status === 'sending' ? f.sending : f.submit}
            </button>
            {status === 'sent' && (
              <p role="status" className="rounded-xl bg-eo-mint px-4 py-3 text-sm text-eo-ink">
                <strong className="font-semibold">{f.successTitle}</strong> {f.successText}
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">
                {f.error} <a href={`mailto:${EMAIL}`} className="font-medium underline">{EMAIL}</a>
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
