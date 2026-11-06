'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CONSENT_KEY = 'ecoai_cookie_consent';

interface ConsentData {
  accepted: boolean;
  timestamp: string;
}

export function CookieBanner({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (!stored) setVisible(true);
      else {
        const data: ConsentData = JSON.parse(stored);
        // Show again after 12 months
        const stored_date = new Date(data.timestamp);
        const months_diff =
          (Date.now() - stored_date.getTime()) / (1000 * 60 * 60 * 24 * 30);
        if (months_diff > 12) setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    const data: ConsentData = { accepted, timestamp: new Date().toISOString() };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(data));
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: accepted ? 'granted' : 'denied',
      });
    }
    setVisible(false);
  };

  if (!visible) return null;

  const t = {
    es: {
      message: 'Usamos cookies analíticas para mejorar la plataforma.',
      accept: 'Aceptar',
      reject: 'Rechazar',
      more: 'Política de cookies',
    },
    en: {
      message: 'We use analytics cookies to improve the platform.',
      accept: 'Accept',
      reject: 'Reject',
      more: 'Cookie policy',
    },
  }[lang];

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm z-[999] bg-white border border-slate-200 rounded-xl shadow-lg p-4 flex flex-col gap-3"
    >
      <p className="text-sm text-slate-700 leading-snug">
        {t.message}{' '}
        <Link
          href="/cookies"
          className="text-eo-leaf hover:underline font-medium"
        >
          {t.more}
        </Link>
        .
      </p>
      <div className="flex items-center gap-2">
        <button
          id="cookie-accept"
          onClick={() => handleConsent(true)}
          className="flex-1 py-2 px-4 bg-eo-ink hover:bg-eo-ink/85 text-white text-xs font-semibold rounded-lg transition-colors"
        >
          {t.accept}
        </button>
        <button
          id="cookie-reject"
          onClick={() => handleConsent(false)}
          className="flex-1 py-2 px-4 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-lg border border-slate-200 transition-colors"
        >
          {t.reject}
        </button>
      </div>
    </div>
  );
}
