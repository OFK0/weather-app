export interface StatCardProps {
  value: string | number | React.ReactNode;
  name: string;
  icon: React.ReactNode;
}

export function StatCard({ value, name, icon }: StatCardProps) {
  return (
    <div className="py-4 pl-8 pr-4 bg-gray-100 flex items-center gap-4 lg:gap-4 xl:gap-8 border-gray-200 text-neutral-600 rounded-lg overflow-hidden xl:min-h-[152px]">
      <div>{icon}</div>
      <div>
        <div className="text-md lg:text-lg flex items-center gap-2 text-neutral-500 font-light mb-1">{name}</div>
        <div className="flex flex-col gap-1">
          <div className="text-xl lg:text-2xl xl:text-4xl font-medium">{value}</div>
        </div>
      </div>
    </div>
  );
}
