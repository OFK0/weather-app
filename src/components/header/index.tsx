import Link from 'next/link';
import { Search } from './search';
import { UnitChanger } from './unit-changer';

export function Header() {
  return (
    <header className="relative flex items-center justify-between h-[70px] bg-white border-b-2 border-gray-100 px-4">
      <Link href="/" className="text-3xl font-light text-gray-950">
        <em className="">Weathero</em>
      </Link>
      <Search />
      <UnitChanger />
    </header>
  );
}
