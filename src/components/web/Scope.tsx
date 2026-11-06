import React from 'react';
import type { Dict } from '@/i18n/dictionaries';
import { Reveal } from './Reveal';
import { SectionPill } from './SectionPill';

export function Scope({ t }: { t: Dict }) {
  return (
    <section id="variables" className="scroll-mt-24 bg-eo-dawn px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionPill>{t.scope.pill}</SectionPill>
          <h2 className="mt-5 max-w-2xl text-4xl font-light tracking-tight sm:text-5xl">{t.scope.title}</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-eo-ink/80">{t.scope.text}</p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.scope.columns.map((col, i) => (
            <Reveal key={col.title} delay={i * 100} className="h-full">
              <div className="h-full rounded-[2rem] bg-white p-8">
                <h3 className="font-mono text-xs uppercase tracking-wider text-eo-leaf">{col.title}</h3>
                <ul className="mt-5 space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="text-xl font-light">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
