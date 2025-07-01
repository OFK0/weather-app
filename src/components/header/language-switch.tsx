'use client';

import { Button } from '../button';
import { useLocale } from 'next-intl';

export function LanguageSwitch() {
  const locale = useLocale();

  function handleLocaleChange(newLocale: string) {
    if (locale !== newLocale) {
      // Use the Next.js Link component to change the locale
      window.location.href = `/${newLocale}`;
    }
  }

  return (
    <div className="flex items-center">
      <Button
        type="button"
        active={locale === 'en'}
        className="rounded-l rounded-r-none"
        onClick={() => handleLocaleChange('en')}
      >
        English
      </Button>
      <Button
        type="button"
        active={locale === 'tr'}
        className="rounded-r rounded-l-none"
        onClick={() => handleLocaleChange('tr')}
      >
        Türkçe
      </Button>
    </div>
  );
}
