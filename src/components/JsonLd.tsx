import { dictionaries, type Lang } from '@/i18n/dictionaries';
import { SITE_URL } from '@/lib/site';

const LAB_URL = 'https://ecoailab.es';

export function JsonLd({ lang }: { lang: Lang }) {
  const t = dictionaries[lang];
  const pageUrl = lang === 'es' ? `${SITE_URL}/` : `${SITE_URL}/en`;

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${LAB_URL}/#organization`,
        name: 'CustomAI Solutions Lab S.L.',
        alternateName: 'EcoAI Lab',
        url: LAB_URL,
        logo: `${SITE_URL}/images/logo_ecoai.png`,
        email: 'hello@ecoailab.es',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Calle Santa Genoveva Torres 30',
          addressLocality: 'Valencia',
          addressCountry: 'ES',
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${SITE_URL}/#software`,
        name: 'Eovy',
        url: pageUrl,
        inLanguage: lang,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: t.seo.description,
        publisher: { '@id': `${LAB_URL}/#organization` },
      },
      {
        '@type': 'FAQPage',
        inLanguage: lang,
        mainEntity: t.faq.items.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}
