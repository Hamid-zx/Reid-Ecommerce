interface CategoryIconProps {
  icon: React.ReactNode;
  label: string;
  count?: number;
  onClick?: () => void;
}

export default function CategoryIcon({ icon, label, count, onClick }: CategoryIconProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-3 group cursor-pointer w-full"
    >
      <div className="p-6 rounded-xl bg-white shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
        {icon}
      </div>
      <div className="text-center">
        <span className="text-sm font-medium text-gray-900 block">{label}</span>
        {count !== undefined && (
          <span className="text-xs text-gray-500">{count} items</span>
        )}
      </div>
    </button>
  );
}