import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';
import dayjs from '@/lib/dayjs';

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  dayjs.locale(locale);

  return {
    locale,
    messages: (await import(`@/locales/${locale}.json`)).default,
  };
});
