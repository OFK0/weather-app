'use client';

import { useWeatherStore } from '@/providers/weather-store-provider';
import { Button } from '../button';

export function UnitChanger() {
  const { selectedUnit, setSelectedUnit } = useWeatherStore((state) => state);

  return (
    <div className="flex items-center">
      <Button
        type="button"
        active={selectedUnit === 'c'}
        className="rounded-l rounded-r-none"
        onClick={() => setSelectedUnit('c')}
      >
        °C
      </Button>
      <Button
        type="button"
        active={selectedUnit === 'f'}
        className="rounded-r rounded-l-none"
        onClick={() => setSelectedUnit('f')}
      >
        °F
      </Button>
    </div>
  );
}
