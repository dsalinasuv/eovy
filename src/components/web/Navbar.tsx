'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import type { Dict, Lang } from '@/i18n/dictionaries';
import { Wordmark } from './Wordmark';

const APP_URL = (process.env.NEXT_PUBLIC_APP_URL ?? '').replace(/\/$/, '');

export function Navbar({
  t,
  lang,
  onSwitchLang,
}: {
  t: Dict;
  lang: Lang;
  onSwitchLang: (lang: Lang) => void;
}) {
  const [open, setOpen] = useState(false);

  const links = [
    { label: t.nav.project, href: '#proyecto' },
    { label: t.nav.how, href: '#como-funciona' },
    { label: t.nav.science, href: '#ciencia' },
    { label: t.nav.api, href: '#api' },
    { label: t.nav.uses, href: '#aplicaciones' },
    { label: t.nav.contact, href: '#contacto' },
  ];

  return (
    <header className="fixed inset-x-4 top-4 z-50">
      <div className="mx-auto max-w-6xl rounded-full border border-white/60 bg-white/85 px-5 py-2.5 shadow-sm backdrop-blur-md">
        <div className="flex items-center justify-between gap-4">
          <Wordmark />

          <nav aria-label={t.nav.mainNav} className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-eo-ink/80 transition-colors hover:text-eo-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eo-leaf"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher currentLang={lang} onSwitch={onSwitchLang} />
            <a
              href={`${APP_URL}/login`}
              className="text-sm font-medium text-eo-ink/80 transition-colors hover:text-eo-ink"
            >
              {t.nav.access}
            </a>
            <a
              href="#contacto"
              className="rounded-full bg-eo-leaf px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-eo-leafDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eo-leaf focus-visible:ring-offset-2"
            >
              {t.nav.cta}
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher currentLang={lang} onSwitch={onSwitchLang} idPrefix="lang-m" />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              className="rounded-full p-2 text-eo-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eo-leaf"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="mx-auto mt-2 max-w-6xl rounded-3xl border border-white/60 bg-white p-5 shadow-lg lg:hidden"
        >
          <nav aria-label={t.nav.mainNav} className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-base font-medium text-eo-ink hover:bg-eo-mint"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`${APP_URL}/login`}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2.5 text-base font-medium text-eo-ink hover:bg-eo-mint"
            >
              {t.nav.access}
            </a>
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-eo-leaf px-5 py-3 text-center text-base font-semibold text-white"
            >
              {t.nav.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
