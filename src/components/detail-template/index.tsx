'use client';

import { WeatherResponse } from '@/types/weather';
import { TodayOverview } from './today-overview';
import { Next7DaysForecast } from './next-seven-days-forecast';

export interface DetailTemplateProps {
  data: WeatherResponse;
}

export default function DetailTemplate({ data }: DetailTemplateProps) {
  return (
    <div className="pt-8">
      <h1 className="text-3xl font-bold mb-6">{data.location.name}</h1>
      <TodayOverview data={data} />
      <Next7DaysForecast data={data} />
    </div>
  );
}
