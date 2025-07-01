import { getLocale } from 'next-intl/server';
import DetailTemplate from '@/components/detail-template';

export default async function Home() {
  const locale = await getLocale();

  async function fetchDefaultLocation() {
    const res = await fetch(
      `${process.env.WEATHERAPI_BASEURL}/forecast.json?key=${process.env.WEATHERAPI_APIKEY}&lang=${locale}&days=7&aqi=no&alerts=no&q=${process.env?.WEATHERAPI_DEFAULT_LOCATION || 'London'}`,
      {
        next: { revalidate: 60 },
        cache: 'force-cache',
      }
    );
    const data = await res.json();
    return data;
  }

  const defaultData = await fetchDefaultLocation();

  return <DetailTemplate data={defaultData} />;
}
