import type { Metadata } from 'next';
import { dictionaries, type Lang } from '@/i18n/dictionaries';

export function seoMetadata(lang: Lang): Metadata {
  const s = dictionaries[lang].seo;
  const path = lang === 'es' ? '/' : '/en';
  return {
    title: { absolute: s.title },
    description: s.description,
    keywords: s.keywords,
    alternates: {
      canonical: path,
      languages: { es: '/', en: '/en', 'x-default': '/' },
    },
    openGraph: {
      title: s.ogTitle,
      description: s.ogDescription,
      url: path,
      siteName: 'Eovy',
      locale: lang === 'es' ? 'es_ES' : 'en_US',
      alternateLocale: lang === 'es' ? 'en_US' : 'es_ES',
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title: s.ogTitle, description: s.ogDescription },
    other: {
      'geo.region': 'ES-V',
      'geo.placename': 'Valencia, España',
      'geo.position': '39.4699;-0.3763',
      'ICBM': '39.4699, -0.3763',
      'distribution': 'Global',
      'rating': 'General',
    },
  };
}
