'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CookieBanner } from '@/components/CookieBanner';
import { dictionaries, type Lang } from '@/i18n/dictionaries';
import { ApiSection } from '@/components/web/ApiSection';
import { AppShowcase } from '@/components/web/AppShowcase';
import { BeyondEnergy } from '@/components/web/BeyondEnergy';
import { Contact } from '@/components/web/Contact';
import { Faq } from '@/components/web/Faq';
import { Footer } from '@/components/web/Footer';
import { Hero } from '@/components/web/Hero';
import { HowItWorks } from '@/components/web/HowItWorks';
import { Navbar } from '@/components/web/Navbar';
import { Science } from '@/components/web/Science';
import { Scope } from '@/components/web/Scope';
import { Statement } from '@/components/web/Statement';
import { UseCases } from '@/components/web/UseCases';

export function Home({ lang }: { lang: Lang }) {
  const router = useRouter();
  const t = dictionaries[lang];

  // El layout no se vuelve a renderizar al cambiar de idioma por navegación en cliente.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="font-display text-eo-ink antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
      >
        {t.nav.skip}
      </a>
      <Navbar t={t} lang={lang} onSwitchLang={(l) => router.push(l === 'en' ? '/en' : '/')} />
      <main id="main">
        <Hero t={t} />
        <Statement t={t} />
        <HowItWorks t={t} />
        <Scope t={t} />
        <AppShowcase t={t} />
        <ApiSection t={t} />
        <Science t={t} />
        <UseCases t={t} />
        <Faq t={t} />
        <BeyondEnergy t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <CookieBanner lang={lang} />
    </div>
  );
}
