import { WeatherImage } from './image';
import { MapPin } from 'lucide-react';
import { useWeatherStore } from '@/providers/weather-store-provider';
import { getWeatherGradient } from '@/utils/gradient-by-weather';

export interface WeatherCardProps {
  conditionCode: number;
  temp: number;
  icon?: React.ReactNode;
  name: string;
  description: string;
  isDay: 1 | 0;
}

export function WeatherCard({
  conditionCode,
  temp,
  name,
  icon = <MapPin size={18} />,
  description,
  isDay,
}: WeatherCardProps) {
  const { selectedUnit } = useWeatherStore((state) => state);

  const gradient = getWeatherGradient(conditionCode, isDay);

  return (
    <div
      className="p-4 text-white rounded-lg relative overflow-hidden"
      style={{
        background: `${gradient}`,
      }}
    >
      <div className="flex flex-col gap-1 mb-4 relative z-10">
        <h2 className="text-5xl font-semibold">
          {temp} {selectedUnit === 'c' ? '°C' : '°F'}
        </h2>
        <h3 className="text-xl font-semibold flex items-center gap-2">
          {icon} {name}
        </h3>
      </div>
      <p>{description}</p>
      <WeatherImage conditionCode={conditionCode} isDay={isDay} />
    </div>
  );
}
