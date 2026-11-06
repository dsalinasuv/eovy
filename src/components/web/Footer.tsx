import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin } from 'lucide-react';
import type { Dict } from '@/i18n/dictionaries';
import { Wordmark } from './Wordmark';

const linkClass = 'text-white/80 transition-colors hover:text-white';

export function Footer({ t }: { t: Dict }) {
  const f = t.footer;
  return (
    <footer className="bg-eo-forest px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-b border-white/15 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Wordmark tone="light" size="lg" />
            <p className="mt-4 max-w-sm text-white/80">{f.tagline}</p>
            <a href="https://ecoailab.es" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block">
              <Image
                src="/images/logo_ecoai.png"
                alt="EcoAI Lab"
                width={375}
                height={289}
                className="h-auto w-28 rounded-xl"
              />
            </a>
          </div>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-white/60">{f.projectTitle}</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#proyecto" className={linkClass}>
                  {t.nav.project}
                </a>
              </li>
              <li>
                <a href="#aplicacion" className={linkClass}>
                  {f.app}
                </a>
              </li>
              <li>
                <a href="#ciencia" className={linkClass}>
                  {t.nav.science}
                </a>
              </li>
              <li>
                <a href="#aplicaciones" className={linkClass}>
                  {t.nav.uses}
                </a>
              </li>
              <li>
                <a href="#ecoailab" className={linkClass}>
                  {f.labTitle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-white/60">{f.legalTitle}</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/privacy-policy" className={linkClass}>
                  {f.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className={linkClass}>
                  {f.terms}
                </Link>
              </li>
              <li>
                <Link href="/cookies" className={linkClass}>
                  {f.cookies}
                </Link>
              </li>
              <li>
                <Link href="/ai-act" className={linkClass}>
                  {f.aiAct}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1.5">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              CustomAI Solutions Lab S.L. · Santa Genoveva Torres 30, Valencia
            </span>
            <a href="mailto:hello@ecoailab.es" className="flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              hello@ecoailab.es
            </a>
          </div>
          <div className="md:text-right">
            <p>
              © {new Date().getFullYear()} Eovy · {f.rights}
            </p>
            <p className="mt-1 text-white/60">{f.court}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
