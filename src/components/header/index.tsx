import { CurrentTime } from './current-time';
import { Search } from './search';
import { UnitChanger } from './unit-changer';

export function Header() {
  return (
    <header className="grid grid-cols-[25%_75%] h-[70px] bg-white border-b-2 border-gray-100 items-stretch">
      <CurrentTime />
      <div className="p-4 flex items-center justify-between h-full gap-4">
        <Search />
        <UnitChanger />
      </div>
    </header>
  );
}
