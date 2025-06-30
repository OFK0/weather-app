import { Button } from '../button';

export function UnitChanger() {
  return (
    <div className="flex items-center">
      <Button type="button" active className="rounded-l rounded-r-none">
        °C
      </Button>
      <Button type="button" className="rounded-r rounded-l-none">
        °F
      </Button>
    </div>
  );
}
