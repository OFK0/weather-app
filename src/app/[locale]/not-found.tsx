import Link from 'next/link';
import { Button } from '@/components/button';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('not-found-page');

  return (
    <div className="flex items-center justify-center flex-col pt-24">
      <h1 className="text-3xl lg:text-5xl lg:mb-4 font-bold">404</h1>
      <p className="mb-4 lg:mb-8">{t('title')}</p>
      <Link href="/">
        <Button>{t('go-to-homepage')}</Button>
      </Link>
    </div>
  );
}
