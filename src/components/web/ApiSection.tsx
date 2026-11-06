import React from 'react';
import { Check } from 'lucide-react';
import type { Dict } from '@/i18n/dictionaries';
import { Reveal } from './Reveal';
import { SectionPill } from './SectionPill';

// Forma de la petición: la API está en desarrollo, no se muestran valores de respuesta.
const REQUEST = `curl "$EOVY_API_URL/v1/parks/{park_id}/forecast?variable=wind_speed_100m" \\
  -H "Authorization: Bearer $EOVY_API_KEY"`;

export function ApiSection({ t }: { t: Dict }) {
  return (
    <section id="api" className="scroll-mt-24 bg-eo-dawn px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal className="min-w-0">
          <div className="flex items-center gap-3">
            <SectionPill>{t.api.pill}</SectionPill>
            <span className="rounded-full bg-eo-sun/40 px-3 py-1 font-mono text-xs uppercase tracking-wider text-eo-ink">
              {t.api.status}
            </span>
          </div>
          <h2 className="mt-5 text-4xl font-light tracking-tight sm:text-5xl">{t.api.title}</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-eo-ink/80">{t.api.text}</p>
          <ul className="mt-6 space-y-2">
            {t.api.points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-eo-ink">
                <Check className="h-4 w-4 flex-shrink-0 text-eo-leaf" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120} className="min-w-0">
          <figure aria-label={t.api.codeLabel} className="rounded-[2rem] bg-eo-ink p-6 sm:p-8">
            <figcaption className="font-mono text-xs uppercase tracking-wider text-white/60">{t.api.codeLabel}</figcaption>
            <pre className="mt-4 overflow-x-auto font-mono text-sm leading-relaxed text-white">
              <code>{REQUEST}</code>
            </pre>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
