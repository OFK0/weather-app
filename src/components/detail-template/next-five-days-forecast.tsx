import { Calendar1Icon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import dayjs from '@/lib/dayjs';
import { useWeatherStore } from '@/providers/weather-store-provider';
import { WeatherResponse } from '@/types/weather';
import { WeatherCard } from '../weather-card';

export interface Next5DaysForecastProps {
  data: WeatherResponse;
}

export function Next5DaysForecast({ data }: Next5DaysForecastProps) {
  const t = useTranslations('detail-template');
  const weatherStore = useWeatherStore((state) => state);

  return (
    <>
      <h2 className="text-2xl font-semibold mt-8 mb-4">{t('detail-template.next-five-days')}</h2>
      <div className="grid grid-cols-4 gap-4 items-stretch">
        {data.forecast.forecastday.map((day) => (
          <WeatherCard
            key={day.date_epoch}
            isDay={1}
            icon={<Calendar1Icon size={18} />}
            conditionCode={day.day.condition.code}
            name={dayjs(day.date).format('dddd')}
            temp={weatherStore.selectedUnit === 'c' ? day.day.avgtemp_c : day.day.avgtemp_f}
            description={day.day.condition.text}
          />
        ))}
      </div>
    </>
  );
}
