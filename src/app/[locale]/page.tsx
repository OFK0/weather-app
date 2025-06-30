import { WeatherCard } from '@/components/weather-card';

export default function Home() {
  return (
    <div className="grid grid-cols-[25%_75%] h-[calc(100vh-70px)]">
      <div className="border-r-2 border-gray-100 p-4">
        <WeatherCard />
      </div>
      <div></div>
    </div>
  );
}
