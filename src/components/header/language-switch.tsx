import Link from 'next/link';
import { Button } from '../button';
import { useLocale } from 'next-intl';

export function LanguageSwitch() {
  const locale = useLocale();

  return (
    <div className="flex items-center">
      <Link href="/en">
        <Button type="button" active={locale === 'en'} className="rounded-l rounded-r-none">
          English
        </Button>
      </Link>
      <Link href="/tr">
        <Button type="button" active={locale === 'tr'} className="rounded-r rounded-l-none">
          Türkçe
        </Button>
      </Link>
    </div>
  );
}
