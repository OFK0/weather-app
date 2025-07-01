import { createStore } from 'zustand/vanilla';
import { persist } from 'zustand/middleware';
import { WeatherResponse, Location } from '@/types/weather';

export interface History extends Location {
  id: number;
}

export type WeatherState = {
  history: History[];
  selectedUnit: 'c' | 'f';
  defaultData: WeatherResponse | null;
};

export type WeatherActions = {
  setHistory: (history: History[]) => void;
  addToHistory: (item: History) => void;
  removeFromHistory: (id: number) => void;
  clearHistory: () => void;
  setSelectedUnit: (unit: 'c' | 'f') => void;
};

export type WeatherStore = WeatherState & WeatherActions;

export const defaultInitState: WeatherState = {
  history: [],
  selectedUnit: 'c',
  defaultData: null,
};

export const createWeatherStore = (initState: WeatherState = defaultInitState) => {
  return createStore<WeatherStore>()(
    persist(
      (set) => ({
        ...initState,
        setHistory: (history: History[]) => set((state) => ({ ...state, history })),
        addToHistory: (item: History) => {
          set((state) => {
            if (state.history.some((h) => h.id === item.id)) {
              return state; // Item already exists, do not add again
            }
            return {
              ...state,
              history: [...state.history, item].slice(-5), // Keep only the last 10 items
            };
          });
        },
        removeFromHistory: (id: number) =>
          set((state) => ({
            ...state,
            history: state.history.filter((h) => h.id !== id),
          })),
        clearHistory: () => set((state) => ({ ...state, history: [] })),
        setSelectedUnit: (unit: 'c' | 'f') => set((state) => ({ ...state, selectedUnit: unit })),
      }),
      {
        name: 'weather-store',
      }
    )
  );
};
