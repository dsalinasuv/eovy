import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Outfit, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { SITE_URL } from '@/lib/site';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Eovy', template: '%s | Eovy' },
  authors: [{ name: 'CustomAI Solutions Lab S.L.', url: 'https://ecoailab.es' }],
  creator: 'CustomAI Solutions Lab S.L.',
  publisher: 'CustomAI Solutions Lab S.L.',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = headers().get('x-lang') === 'en' ? 'en' : 'es';
  return (
    <html lang={lang} className={`scroll-smooth ${outfit.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* GA4 Consent Mode v2: denegado por defecto (RGPD) */}
        <Script id="ga4-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied'
            });
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
