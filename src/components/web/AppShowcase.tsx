import React from 'react';
import Image from 'next/image';
import type { Dict } from '@/i18n/dictionaries';
import { Reveal } from './Reveal';
import { RichText } from './RichText';
import { SectionPill } from './SectionPill';

// Ruta de la captura real de la app (p. ej. '/images/app-preview.png'). Vacía = marco con estado "Próximamente".
const APP_PREVIEW_SRC = '' as string;

function LaptopFrame({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <figure aria-label={label} className="mx-auto w-full max-w-xl">
      <div className="rounded-t-2xl bg-eo-ink p-2.5 sm:p-3">
        <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-eo-dawn">
          {APP_PREVIEW_SRC ? (
            <Image
              src={APP_PREVIEW_SRC}
              alt={label}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-top"
            />
          ) : (
            <div className="eo-grid absolute inset-0 flex items-center justify-center">
              <span className="rounded-full border border-eo-ink/30 bg-white/70 px-3 py-1 font-mono text-xs uppercase tracking-wider text-eo-ink/70">
                {placeholder}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="-mx-[4%] h-3 rounded-b-2xl bg-eo-ink/20" />
    </figure>
  );
}

export function AppShowcase({ t }: { t: Dict }) {
  return (
    <section id="aplicacion" className="scroll-mt-24 bg-white px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionPill>{t.app.pill}</SectionPill>
          <h2 className="mt-5 text-4xl font-light tracking-tight sm:text-5xl">{t.app.title}</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-eo-ink/80">
            <RichText text={t.app.text} />
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-[2rem] bg-eo-mint p-6 sm:p-10">
            <LaptopFrame label={t.app.frameLabel} placeholder={t.app.placeholder} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
