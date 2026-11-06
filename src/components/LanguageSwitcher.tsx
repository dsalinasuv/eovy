'use client';

import React from 'react';

interface LanguageSwitcherProps {
  currentLang: 'es' | 'en';
  onSwitch: (lang: 'es' | 'en') => void;
  transparent?: boolean;
  idPrefix?: string;
}

export function LanguageSwitcher({
  currentLang,
  onSwitch,
  transparent = false,
  idPrefix = 'lang',
}: LanguageSwitcherProps) {
  const textColor = transparent ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-slate-900';
  const activeBg = transparent ? 'bg-white/20' : 'bg-slate-100';

  return (
    <div
      className={`flex items-center rounded-full border ${
        transparent ? 'border-white/20' : 'border-slate-200'
      } p-0.5 gap-0.5`}
      role="group"
      aria-label="Language switcher"
    >
      {(['es', 'en'] as const).map((lang) => (
        <button
          key={lang}
          id={`${idPrefix}-${lang}`}
          onClick={() => onSwitch(lang)}
          aria-pressed={currentLang === lang}
          className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all uppercase tracking-wide ${
            currentLang === lang
              ? `${activeBg} ${transparent ? 'text-white' : 'text-slate-900'}`
              : `${textColor} bg-transparent`
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
