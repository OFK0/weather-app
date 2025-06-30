import { SearchIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Search() {
  const t = useTranslations();

  return (
    <div className="relative w-full h-full max-w-128">
      <SearchIcon size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 z-10" />
      <input
        type="text"
        placeholder={t('common.search')}
        className="relative pl-11 pr-4 w-full h-full rounded bg-gray-100 border-2 border-gray-100 focus:border-gray-500"
      />
    </div>
  );
}
