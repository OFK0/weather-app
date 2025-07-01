'use client';

import Image from 'next/image';
import { memo } from 'react';
import WeatherConditionsData from '@/data/weather-conditions.json';
import { useLocale } from 'next-intl';

export interface WeatherImageProps {
  conditionCode: number;
  isDay: 1 | 0;
}

const WeatherImage = memo(({ conditionCode, isDay }: WeatherImageProps) => {
  const locale = useLocale();
  const attributes = {
    width: 72,
    height: 72,
    className: 'absolute top-2 right-4',
  };

  function getWeatherCondition(conditionCode: number) {
    const condition = WeatherConditionsData.find((c) => c.code === conditionCode);

    if (!condition) {
      return null;
    }

    const lang = condition.languages.find((lang) => lang.lang_iso === locale);

    return {
      text: isDay ? lang?.day_text || condition.day : lang?.night_text || condition.night,
      code: conditionCode,
      icon: condition.icon,
      iconImageSrc: `https://cdn.weatherapi.com/weather/128x128/${isDay ? 'day' : 'night'}/${condition.icon}.png`,
    };
  }

  const weatherCondition = getWeatherCondition(conditionCode);

  if (!weatherCondition) {
    return null;
  }

  return (
    <Image src={weatherCondition.iconImageSrc} alt={weatherCondition.text} priority loading="eager" {...attributes} />
  );
});

WeatherImage.displayName = 'WeatherCardImage';

export { WeatherImage };
