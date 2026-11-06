import React from 'react';
import type { Dict } from '@/i18n/dictionaries';
import { Reveal } from './Reveal';
import { SectionPill } from './SectionPill';

export function HowItWorks({ t }: { t: Dict }) {
  return (
    <section id="como-funciona" className="scroll-mt-24 bg-white px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionPill>{t.how.pill}</SectionPill>
          <h2 className="mt-5 max-w-2xl text-4xl font-light tracking-tight sm:text-5xl">{t.how.title}</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-eo-ink/80">{t.how.text}</p>
        </Reveal>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {t.how.steps.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 100} className="h-full">
                <div className="h-full rounded-[2rem] bg-eo-dawn p-8">
                  <span className="font-mono text-sm text-eo-leaf">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-4 text-2xl font-medium">{step.title}</h3>
                  <p className="mt-2 text-eo-ink/80">{step.desc}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
