import {
  CircleGaugeIcon,
  DropletIcon,
  EyeIcon,
  SunriseIcon,
  SunsetIcon,
  ThermometerIcon,
  WindIcon,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useWeatherStore } from '@/providers/weather-store-provider';
import { StatCard } from '../stat-card';
import { WeatherCard } from '../weather-card';
import { WeatherResponse } from '@/types/weather';
import dayjs from '@/lib/dayjs';

export interface TodayOverviewProps {
  data: WeatherResponse;
}

export function TodayOverview({ data }: TodayOverviewProps) {
  const t = useTranslations('detail-template');
  const weatherStore = useWeatherStore((state) => state);

  function getCurrentDayForecast() {
    return data.forecast.forecastday.find((day) => day.date === dayjs(data.location.localtime).format('YYYY-MM-DD'));
  }

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">{t('detail-template.today-overview')}</h2>
      <div className="grid grid-cols-4 gap-4 items-stretch">
        <WeatherCard
          isDay={data.current.is_day as 0 | 1}
          conditionCode={data.current.condition.code}
          name={data.location.name}
          temp={weatherStore.selectedUnit === 'c' ? data.current.temp_c : data.current.temp_f}
          description={data.current.condition.text}
        />
        <StatCard
          icon={<ThermometerIcon size={48} />}
          value={`${weatherStore.selectedUnit === 'c' ? data.current.feelslike_c : data.current.feelslike_f}°${weatherStore.selectedUnit.toUpperCase()}`}
          name={t('detail-template.feels-like')}
        />
        <StatCard
          icon={<WindIcon size={48} />}
          value={t.rich('detail-template.formatted-wind-speed', {
            value: data.current.wind_kph,
          })}
          name={t('detail-template.wind-speed')}
        />
        <StatCard
          icon={<DropletIcon size={48} />}
          value={`${data.current.humidity}%`}
          name={t('detail-template.humidity')}
        />
        <StatCard
          icon={<EyeIcon size={48} />}
          value={`${data.current.vis_km}km`}
          name={t('detail-template.visibility')}
        />
        <StatCard
          icon={<CircleGaugeIcon size={48} />}
          value={`${data.current.pressure_mb} hPa`}
          name={t('detail-template.pressure')}
        />
        <StatCard
          icon={<SunriseIcon size={48} />}
          value={dayjs(`${dayjs().format(`DD/MM/YYYY`)} ${getCurrentDayForecast()?.astro.sunrise}`).format('HH:mm')}
          name={t('detail-template.sunrise')}
        />
        <StatCard
          icon={<SunsetIcon size={48} />}
          value={dayjs(`${dayjs().format(`DD/MM/YYYY`)} ${getCurrentDayForecast()?.astro.sunset}`).format('HH:mm')}
          name={t('detail-template.sunrise')}
        />
      </div>
    </>
  );
}
