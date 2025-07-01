'use client';

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';

import { type WeatherStore, createWeatherStore } from '@/stores/weather-store';

export type WeatherStoreApi = ReturnType<typeof createWeatherStore>;

export const WeatherStoreContext = createContext<WeatherStoreApi | undefined>(undefined);

export interface WeatherStoreProviderProps {
  children: ReactNode;
}

export const WeatherStoreProvider = ({ children }: WeatherStoreProviderProps) => {
  const storeRef = useRef<WeatherStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createWeatherStore();
  }

  return <WeatherStoreContext.Provider value={storeRef.current}>{children}</WeatherStoreContext.Provider>;
};

export const useWeatherStore = <T,>(selector: (store: WeatherStore) => T): T => {
  const weatherStoreContext = useContext(WeatherStoreContext);

  if (!weatherStoreContext) {
    throw new Error(`useWeatherStore must be used within WeatherStoreProvider`);
  }

  return useStore(weatherStoreContext, selector);
};
