'use client';

import { WeatherResponse } from '@/types/weather';
import { TodayOverview } from './today-overview';
import { Next5DaysForecast } from './next-five-days-forecast';

export interface DetailTemplateProps {
  data: WeatherResponse;
}

export default function DetailTemplate({ data }: DetailTemplateProps) {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">{data.location.name}</h1>
      <TodayOverview data={data} />
      <Next5DaysForecast data={data} />
    </>
  );
}
