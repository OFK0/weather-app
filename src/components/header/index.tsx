import Link from 'next/link';
import { Search } from './search';
import { UnitChanger } from './unit-changer';
import { LanguageSwitch } from './language-switch';

export function Header() {
  return (
    <header className="md:sticky top-0 left-0 w-full pt-4 md:pt-0 flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between md:h-[70px] pb-4 md:pb-0 bg-white border-b-2 border-gray-100 px-4 z-50">
      <Link href="/" className="text-3xl font-light text-gray-950">
        <em className="">Weathero</em>
      </Link>
      <Search />
      <div className="flex items-center justify-end gap-4 md:order-3">
        <LanguageSwitch />
        <UnitChanger />
      </div>
    </header>
  );
}
