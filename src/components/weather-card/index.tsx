import Image from 'next/image';
import { MapPin } from 'lucide-react';

export function WeatherCard() {
  return (
    <div className="p-4 bg-gradient-to-tr from-sky-600 to-sky-900 text-white rounded-lg relative overflow-hidden">
      <div className="flex flex-col gap-1 mb-4">
        <h2 className="text-5xl font-semibold">27 °C</h2>
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <MapPin size={18} /> Istanbul
        </h3>
      </div>
      <p>Clear Sky</p>
      <Image src="/images/sunny.png" alt="Sunny" width="192" height="192" className="absolute -top-16 -right-16" />
    </div>
  );
}
