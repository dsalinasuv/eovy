import React from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Dict } from '@/i18n/dictionaries';
import { Reveal } from './Reveal';
import { SectionPill } from './SectionPill';

const LAB_URL = 'https://ecoailab.es';
// URL pública de GreenGrow; vacía oculta el enlace.
const GREENGROW_URL = '' as string;

export function BeyondEnergy({ t }: { t: Dict }) {
  const b = t.beyond;
  return (
    <section id="ecoailab" className="scroll-mt-24 bg-white px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
          <Reveal>
            <a href={LAB_URL} target="_blank" rel="noopener noreferrer" aria-label="EcoAI Lab" className="inline-block">
              <Image
                src="/images/logo_ecoai.png"
                alt="EcoAI Lab"
                width={375}
                height={289}
                className="h-auto w-40 rounded-2xl"
              />
            </a>
            <div className="mt-8">
              <SectionPill>{b.pill}</SectionPill>
            </div>
            <h2 className="mt-5 text-4xl font-light tracking-tight sm:text-5xl">{b.title}</h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-eo-ink/80">{b.text}</p>
            <a
              href={LAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-eo-leaf hover:underline"
            >
              {b.labLink}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col justify-between rounded-[2rem] bg-eo-forest p-8 text-white sm:p-10">
              <div>
                <SectionPill tone="light">{b.featured.tag}</SectionPill>
              </div>
              <div className="mt-16">
                <h3 className="text-4xl font-light tracking-tight sm:text-5xl">{b.featured.title}</h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-white/85">{b.featured.text}</p>
                {GREENGROW_URL && (
                  <a
                    href={GREENGROW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-eo-sun hover:underline"
                  >
                    {b.featured.cta}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <ul className="grid gap-8 border-t border-eo-ink/15 pt-8 md:grid-cols-3">
            {b.items.map((item) => (
              <li key={item.title} className="flex gap-3">
                <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-eo-leaf" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="mt-1 text-eo-ink/80">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-10 font-mono text-xs uppercase tracking-wider text-eo-ink/70">{b.transfer}</p>
        </Reveal>
      </div>
    </section>
  );
}
