'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { Dict } from '@/i18n/dictionaries';
import { RichText } from './RichText';

const SLIDES = ['/images/hero_wind_golden.jpg', '/images/wind_farm_hero.jpg'];
const INTERVAL_MS = 6000;

export function Hero({ t }: { t: Dict }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, window.innerHeight);
        sectionRef.current?.style.setProperty('--py', `${y * 0.15}px`);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] overflow-hidden bg-eo-forest text-white">
      <div className="eo-parallax absolute inset-0">
        {SLIDES.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={t.hero.slideAlts[i]}
            aria-hidden={i !== index}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-eo-ink/45 via-eo-ink/30 to-eo-ink/55" aria-hidden="true" />

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 pb-28 pt-32 text-center">
        <h1 className="max-w-5xl text-[clamp(2.4rem,6vw,5.5rem)] font-light leading-[1.05] tracking-tight [text-shadow:0_1px_24px_rgba(6,24,25,0.35)]">
          <RichText text={t.hero.title} />
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/95 sm:text-xl">{t.hero.subtitle}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contacto"
            className="rounded-full bg-eo-leaf px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-eo-leafDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-eo-ink"
          >
            {t.hero.cta}
          </a>
          <a
            href="#proyecto"
            className="rounded-full border border-white/70 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="absolute inset-x-6 bottom-6 z-10 flex items-end justify-between font-mono text-[11px] uppercase tracking-wider text-white/90">
        <span className="hidden w-1/3 sm:block">/ {t.hero.tagA} /</span>
        <div className="flex w-full flex-col items-center gap-3 sm:w-1/3">
          <div className="flex gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`${t.hero.goToSlide} ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}`}
              />
            ))}
          </div>
          <a href="#proyecto" className="hover:text-white">
            ↓ {t.hero.scroll} ↓
          </a>
        </div>
        <span className="hidden w-1/3 text-right sm:block">/ {t.hero.tagB} /</span>
      </div>
    </section>
  );
}
