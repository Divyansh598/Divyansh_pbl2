import { useEffect, useState } from 'react';
import { getStatusCounts } from '../../data/promises';

const statItems = [
  { key: 'broken', label: 'Broken', colorClass: 'text-broken' },
  { key: 'partial', label: 'In Progress', colorClass: 'text-partial' },
  { key: 'kept', label: 'Fulfilled', colorClass: 'text-kept' },
  { key: 'contested', label: 'Contested', colorClass: 'text-contested' },
];

export default function HeroStats() {
  const counts = getStatusCounts();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="bg-white border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <h1 className="text-xl sm:text-2xl font-bold text-text-primary mb-1.5 tracking-tight">
          Promise Dashboard
        </h1>
        <p className="text-sm text-text-secondary leading-relaxed max-w-xl mb-5">
          Every promise made by Indian politicians — tracked, verified, and open for public scrutiny. 
          Evidence is mandatory. Excuses are not.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-xl">
          {statItems.map((item, i) => (
            <div
              key={item.key}
              className={`bg-surface-secondary rounded-xl p-3.5 border border-border-light transition-all duration-300 hover:shadow-sm ${
                visible ? 'animate-fade-in-up opacity-0' : ''
              }`}
              style={{ animationDelay: `${i * 0.08}s`, animationFillMode: 'forwards' }}
            >
              <div className={`text-2xl sm:text-3xl font-bold ${item.colorClass}`}>
                {counts[item.key]}
              </div>
              <div className="text-[11px] text-text-muted mt-0.5 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
