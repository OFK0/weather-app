'use client';

import dayjs from 'dayjs';
import { Calendar, Clock } from 'lucide-react';
import { memo, useEffect, useState } from 'react';

const CurrentTime = memo(() => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(dayjs().format('HH:mm'));
    };

    // Update time immediately
    updateTime();

    // Set interval to update time every second
    const intervalId = setInterval(updateTime, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="border-r-2 border-gray-100 p-4 flex items-center justify-between h-full">
      <span className="font-semibold inline-flex items-center gap-1">
        <Calendar size={18} /> {dayjs().format('DD MMMM YYYY')}
      </span>
      <span className="font-light inline-flex items-center gap-1">
        <Clock size={18} /> {currentTime.length > 0 ? currentTime : dayjs().format('HH:mm')}
      </span>
    </div>
  );
});

CurrentTime.displayName = 'CurrentTime';

export { CurrentTime };
