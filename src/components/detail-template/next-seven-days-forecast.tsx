import { Calendar1Icon } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import dayjs from '@/lib/dayjs';
import { useWeatherStore } from '@/providers/weather-store-provider';
import { WeatherResponse } from '@/types/weather';
import { WeatherCard } from '../weather-card';

export interface Next7DaysForecastProps {
  data: WeatherResponse;
}

export function Next7DaysForecast({ data }: Next7DaysForecastProps) {
  const t = useTranslations('detail-template');
  const locale = useLocale();
  const weatherStore = useWeatherStore((state) => state);

  return (
    <div className="pb-8">
      <h2 className="text-xl lg:text-2xl font-semibold mt-8 mb-4">{t('detail-template.next-seven-days')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-stretch">
        {data.forecast.forecastday.map((day) => (
          <WeatherCard
            key={day.date_epoch}
            isDay={1}
            icon={<Calendar1Icon size={18} />}
            conditionCode={day.day.condition.code}
            name={dayjs(day.date).locale(locale).format('dddd')}
            temp={weatherStore.selectedUnit === 'c' ? day.day.avgtemp_c : day.day.avgtemp_f}
            description={day.day.condition.text}
          />
        ))}
      </div>
    </div>
  );
}
