import { Home } from '@/components/web/Home';
import { JsonLd } from '@/components/JsonLd';
import { seoMetadata } from '@/lib/seo';

export const metadata = seoMetadata('es');

export default function Page() {
  return (
    <>
      <JsonLd lang="es" />
      <Home lang="es" />
    </>
  );
}
