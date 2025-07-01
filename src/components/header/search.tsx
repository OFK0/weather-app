'use client';

import useDebounce from '@/hooks/useDebounce';
import { useWeatherStore } from '@/providers/weather-store-provider';
import { HistoryIcon, LoaderCircle, SearchIcon, XIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRef, useState } from 'react';
import useSWR from 'swr';
import { Location } from '@/types/weather';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function Search() {
  const t = useTranslations();
  const listDivRef = useRef<HTMLDivElement | null>(null);
  const historyListDivRef = useRef<HTMLDivElement | null>(null);
  const noResultDivRef = useRef<HTMLDivElement | null>(null);
  const { history, addToHistory } = useWeatherStore((state) => state);
  const [queryParam, setQueryParam] = useState('');
  const debouncedQuery = useDebounce(queryParam, 350);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useOnClickOutside(listDivRef, () => {
    setIsDropdownOpen(false);
  });
  useOnClickOutside(historyListDivRef, () => {
    setIsDropdownOpen(false);
  });
  useOnClickOutside(noResultDivRef, () => {
    setIsDropdownOpen(false);
  });

  const { data, isValidating } = useSWR<Location[]>(
    () => (debouncedQuery && debouncedQuery.length > 3 ? `/api/search?q=${encodeURIComponent(debouncedQuery)}` : null),
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 1000,
      onError: () => {
        toast.error(t('errors.search-error'));
      },
    }
  );

  function onLocationClick(location: Location) {
    setQueryParam('');
    setIsDropdownOpen(false);
    addToHistory({
      ...location,
      id: location.id as number,
    });
  }

  return (
    <div className="xl:absolute xl:left-1/2 xl:-translate-x-1/2 w-full md:max-w-72 lg:max-w-96 xl:max-w-128 order-3">
      <div className="relative h-full w-full z-20">
        <SearchIcon size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 z-10" />
        <input
          type="text"
          placeholder={t('common.search')}
          className="relative pl-11 pr-4 w-full py-2 rounded bg-gray-100 border-2 border-gray-100 focus:border-gray-500 disabled:bg-gray-50"
          value={queryParam}
          onChange={(e) => {
            setQueryParam(e.target.value);
          }}
          onFocus={() => {
            setIsDropdownOpen(true);
          }}
        />
        {queryParam.length > 0 ? (
          <button
            type="button"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 z-10 cursor-pointer hover:text-gray-400"
            onClick={() => {
              setQueryParam('');
            }}
          >
            <XIcon size={18} />
          </button>
        ) : null}
        {isValidating ? (
          <LoaderCircle
            size={18}
            className="animate-spin absolute right-12 top-1/2 transform -translate-y-1/2 text-black z-10"
          />
        ) : null}

        {isDropdownOpen && data && data.length > 0 && queryParam.length > 3 ? (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.3 }}
          >
            <div
              className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded mt-1 p-2 z-20"
              ref={listDivRef}
            >
              {data.map((location) => (
                <Link
                  key={location.id}
                  href={`/weather/${location.id}`}
                  className="w-full block py-2 px-4 hover:bg-gray-100 cursor-pointer border-b border-gray-200 [&:last-child]:border-b-0 mb-2 [&:last-child]:mb-0 hover:rounded"
                  onClick={() => {
                    onLocationClick(location);
                  }}
                >
                  <div className="flex-1 flex items-center justify-between">
                    <div className="block text-left font-bold text-md mb-1">{location.name}</div>
                    {location.lat && location.lon ? (
                      <div className="text-xs text-gray-500">
                        {location.lat.toFixed(2)}, {location.lon.toFixed(2)}
                      </div>
                    ) : null}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-left block text-sm w-full">
                      {location.region ? `${location.region},` : null} {location.country}
                    </div>
                    <div className="text-xs flex-1 text-gray-500">#{location.id}</div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}

        {isDropdownOpen && queryParam.length === 0 && history.length > 0 ? (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.3 }}
          >
            <div
              className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded mt-1 p-2 z-20"
              ref={historyListDivRef}
            >
              {history.map((location) => (
                <Link
                  key={location.id}
                  href={`/weather/${location.id}`}
                  className="w-full block py-2 px-4 hover:bg-gray-100 cursor-pointer border-b border-gray-200 [&:last-child]:border-b-0 mb-2 [&:last-child]:mb-0 hover:rounded"
                  onClick={() => {
                    onLocationClick(location);
                  }}
                >
                  <div className="flex-1 flex items-center justify-between">
                    <div className="block text-left font-bold text-md mb-1">{location.name}</div>
                    {location.lat && location.lon ? (
                      <div className="text-xs text-gray-500">
                        {location.lat.toFixed(2)}, {location.lon.toFixed(2)}
                      </div>
                    ) : null}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-left block text-sm">
                      {location.region ? `${location.region},` : null} {location.country}
                    </div>
                    <div className="text-xs text-gray-500 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-xs flex-1">
                        <HistoryIcon size={16} /> <span>{t('common.in-history')}</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}

        {(!data || data.length === 0) && isDropdownOpen && queryParam.length > 0 ? (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.3 }}
          >
            <div
              className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded mt-1 p-2 z-20"
              ref={noResultDivRef}
            >
              <div className="flex items-center justify-center py-4">{t('search.no-results')}</div>
            </div>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}
