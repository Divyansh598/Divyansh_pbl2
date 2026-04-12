import { useState } from 'react';
import HeroStats from '../components/dashboard/HeroStats';
import FilterSidebar from '../components/dashboard/FilterSidebar';
import PromiseFeed from '../components/dashboard/PromiseFeed';

export default function Dashboard() {
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState(null);

  return (
    <div>
      <HeroStats />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-5 items-start">
          {/* Sidebar - hidden on mobile */}
          <div className="hidden lg:block">
            <FilterSidebar
              activeFilter={statusFilter}
              onFilterChange={setStatusFilter}
              activeCategory={categoryFilter}
              onCategoryChange={setCategoryFilter}
            />
          </div>

          {/* Mobile filter bar */}
          <div className="lg:hidden flex gap-2 overflow-x-auto pb-2">
            {['all', 'broken', 'partial', 'kept', 'contested'].map(s => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap border transition-all cursor-pointer ${
                  statusFilter === s
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-text-secondary border-border hover:bg-surface-secondary'
                }`}
              >
                {s === 'all' ? 'All' : s === 'partial' ? 'In Progress' : s === 'kept' ? 'Fulfilled' : s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>

          {/* Feed */}
          <PromiseFeed
            statusFilter={statusFilter}
            categoryFilter={categoryFilter}
          />
        </div>
      </div>
    </div>
  );
}
