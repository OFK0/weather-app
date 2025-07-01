import { getLocale } from 'next-intl/server';
import DetailTemplate from '@/components/detail-template';

export default async function WeatherByIdPage({
  params,
}: Readonly<{
  params: Promise<{ id: string }>;
}>) {
  const locale = await getLocale();
  const { id } = await params;

  async function fetchWeatherById(id: string) {
    const res = await fetch(
      `${process.env.WEATHERAPI_BASEURL}/forecast.json?key=${process.env.WEATHERAPI_APIKEY}&lang=${locale}&days=7&aqi=no&alerts=no&q=id:${id}`,
      {
        next: { revalidate: 60 },
        cache: 'force-cache',
      }
    );
    const data = await res.json();
    return data;
  }

  const weatherData = await fetchWeatherById(id);

  return <DetailTemplate data={weatherData} />;
}
