import React from 'react';
import type { Dict } from '@/i18n/dictionaries';
import { Reveal } from './Reveal';
import { RichText } from './RichText';

export function Statement({ t }: { t: Dict }) {
  return (
    <section id="proyecto" className="eo-gradient scroll-mt-24 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-[clamp(1.6rem,3.4vw,2.9rem)] font-light leading-snug text-eo-ink">
            <RichText text={t.statement.text} />
          </p>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-8 font-mono text-xs uppercase tracking-wider text-eo-ink/70">{t.statement.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
