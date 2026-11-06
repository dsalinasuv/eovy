import React from 'react';
import { Plus } from 'lucide-react';
import type { Dict } from '@/i18n/dictionaries';
import { Reveal } from './Reveal';
import { SectionPill } from './SectionPill';

export function Faq({ t }: { t: Dict }) {
  return (
    <section id="faq" className="scroll-mt-24 bg-eo-mint/40 px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <SectionPill>{t.faq.pill}</SectionPill>
          <h2 className="mt-5 text-4xl font-light tracking-tight sm:text-5xl">{t.faq.title}</h2>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-8">
          <div className="divide-y divide-eo-ink/15 border-y border-eo-ink/15">
            {t.faq.items.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eo-leaf">
                  {item.q}
                  <Plus
                    className="h-5 w-5 flex-shrink-0 text-eo-leaf transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 max-w-2xl text-eo-ink/80">{item.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
