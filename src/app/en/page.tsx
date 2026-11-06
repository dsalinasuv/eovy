import { Home } from '@/components/web/Home';
import { JsonLd } from '@/components/JsonLd';
import { seoMetadata } from '@/lib/seo';

export const metadata = seoMetadata('en');

export default function Page() {
  return (
    <>
      <JsonLd lang="en" />
      <Home lang="en" />
    </>
  );
}
