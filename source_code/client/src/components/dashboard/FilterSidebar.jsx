import { getStatusCounts, categories, trendingPromises, statusConfig } from '../../data/promises';
import Badge from '../ui/Badge';

const statusFilters = [
  { key: 'all', label: 'All promises', color: '#888' },
  { key: 'broken', label: 'Broken', color: '#A32D2D' },
  { key: 'partial', label: 'In Progress', color: '#854F0B' },
  { key: 'kept', label: 'Fulfilled', color: '#2d7d2d' },
  { key: 'contested', label: 'Contested', color: '#534AB7' },
];

export default function FilterSidebar({ activeFilter, onFilterChange, activeCategory, onCategoryChange }) {
  const counts = getStatusCounts();

  return (
    <div className="flex flex-col gap-3 animate-fade-in">
      {/* Status Filter */}
      <div className="bg-white border border-border rounded-xl p-4">
        <div className="text-[11px] font-semibold text-text-faint uppercase tracking-wider mb-3">
          Filter by Status
        </div>
        <div className="flex flex-col gap-0.5">
          {statusFilters.map(f => (
            <button
              key={f.key}
              onClick={() => onFilterChange(f.key)}
              className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-all duration-100 cursor-pointer border-none w-full ${
                activeFilter === f.key ? 'bg-primary-50' : 'bg-transparent hover:bg-surface-secondary'
              }`}
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: f.color }} />
              <span className="text-[12px] text-text-primary flex-1">{f.label}</span>
              <span className="text-[10px] text-text-faint bg-surface-secondary px-1.5 py-0.5 rounded-full">{counts[f.key]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white border border-border rounded-xl p-4">
        <div className="text-[11px] font-semibold text-text-faint uppercase tracking-wider mb-3">
          📂 Categories
        </div>
        <div className="flex flex-col gap-0.5">
          {categories.filter(c => c.count > 0).map(cat => (
            <button
              key={cat.name}
              onClick={() => onCategoryChange(activeCategory === cat.name ? null : cat.name)}
              className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-all duration-100 cursor-pointer border-none w-full ${
                activeCategory === cat.name ? 'bg-primary-50' : 'bg-transparent hover:bg-surface-secondary'
              }`}
            >
              <span className="text-xs">{cat.icon}</span>
              <span className="text-[12px] text-text-primary flex-1">{cat.name}</span>
              <span className="text-[10px] text-text-faint bg-surface-secondary px-1.5 py-0.5 rounded-full">{cat.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Trending */}
      <div className="bg-white border border-border rounded-xl p-4">
        <div className="text-[11px] font-semibold text-text-faint uppercase tracking-wider mb-3">
          🔥 Trending This Week
        </div>
        <div className="flex flex-col gap-2">
          {trendingPromises.map((tp, i) => (
            <div key={tp.id} className="flex items-start gap-2 pb-2 border-b border-border-light last:border-none last:pb-0">
              <span className="text-[13px] font-black text-text-faint w-4 text-center flex-shrink-0 mt-0.5">{i + 1}</span>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-medium text-text-primary leading-snug truncate">{tp.title}</div>
                <div className="text-[10px] text-text-faint mt-0.5">{tp.votes.toLocaleString()} votes · {tp.trend}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Impact */}
      <div className="bg-white border border-border rounded-xl p-4">
        <div className="text-[11px] font-semibold text-text-faint uppercase tracking-wider mb-3">
          📊 Platform Impact
        </div>
        <div className="space-y-2">
          {[
            { label: 'Citizens participated', value: '24,567', icon: '👥' },
            { label: 'Evidence submitted', value: '1,234', icon: '📄' },
            { label: 'Debates concluded', value: '89', icon: '⚔️' },
            { label: 'Public victories', value: '67', icon: '🏆' },
          ].map(stat => (
            <div key={stat.label} className="flex items-center gap-2">
              <span className="text-xs">{stat.icon}</span>
              <span className="text-[11px] text-text-secondary flex-1">{stat.label}</span>
              <span className="text-[11px] font-bold text-text-primary">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div className="bg-primary-50 border border-primary-100 rounded-xl p-4">
        <div className="text-[11px] font-semibold text-primary uppercase tracking-wider mb-2">About PublicVerdict</div>
        <p className="text-[11px] text-text-secondary leading-relaxed mb-2">
          India's first AI-powered political promise accountability platform. Every promise tracked. Evidence mandatory.
        </p>
        <p className="text-[11px] text-primary font-semibold">Ek vaada, ek zimmedaari.</p>
      </div>
    </div>
  );
}
