import { statusConfig } from '../../data/promises';

export default function Badge({ status, size = 'sm' }) {
  const config = statusConfig[status] || statusConfig.pending;
  
  const sizeClasses = {
    sm: 'text-[11px] px-2.5 py-0.5',
    md: 'text-xs px-3 py-1',
    lg: 'text-sm px-4 py-1.5',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-semibold whitespace-nowrap ${sizeClasses[size]}`}
      style={{ backgroundColor: config.bgColor, color: config.color }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: config.color }}
      />
      {config.label}
    </span>
  );
}
