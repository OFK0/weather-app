import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import '../globals.css';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { WeatherStoreProvider } from '@/providers/weather-store-provider';
import { Toaster } from 'sonner';
import { Header } from '@/components/header';
import dayjs from '@/lib/dayjs';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'Weather App built with Next.js and WeatherAPI',
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  dayjs.locale(locale);

  return (
    <html lang={locale} className="h-full">
      <body className={`${geistSans.variable} antialiased h-full`}>
        <NextIntlClientProvider>
          <WeatherStoreProvider>
            <Header />
            <div className="h-[calc(100vh-70px)]">
              <div className="container mx-auto mt-4">{children}</div>
            </div>
            <Toaster />
          </WeatherStoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
