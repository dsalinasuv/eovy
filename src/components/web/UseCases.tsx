import React from 'react';
import Image from 'next/image';
import type { Dict } from '@/i18n/dictionaries';
import { ArrowList } from './ArrowList';
import { Reveal } from './Reveal';
import { SectionPill } from './SectionPill';

export function UseCases({ t }: { t: Dict }) {
  return (
    <section id="aplicaciones" className="scroll-mt-24 bg-eo-dawn px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionPill>{t.uses.pill}</SectionPill>
          <h2 className="mt-5 text-4xl font-light tracking-tight sm:text-5xl">{t.uses.title}</h2>
          <p className="mb-8 mt-5 max-w-md text-lg leading-relaxed text-eo-ink/80">{t.uses.text}</p>
          <ArrowList items={t.uses.items} />
        </Reveal>
        <Reveal delay={120}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/solar_aerial.jpg"
              alt={t.uses.imageAlt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
