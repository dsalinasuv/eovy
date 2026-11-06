import React from 'react';
import type { Dict } from '@/i18n/dictionaries';
import { ArrowList } from './ArrowList';
import { Reveal } from './Reveal';
import { RichText } from './RichText';
import { SectionPill } from './SectionPill';

export function Science({ t }: { t: Dict }) {
  return (
    <section id="ciencia" className="scroll-mt-24 bg-eo-sky px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionPill>{t.science.pill}</SectionPill>
          <h2 className="mt-5 text-4xl font-light tracking-tight sm:text-5xl">{t.science.title}</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-eo-ink/80">
            <RichText text={t.science.text} />
          </p>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-7">
          <ArrowList items={t.science.items} />
        </Reveal>
      </div>
    </section>
  );
}
