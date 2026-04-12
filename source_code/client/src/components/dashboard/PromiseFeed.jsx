import { useState, useMemo } from 'react';
import PromiseCard from './PromiseCard';
import { promises } from '../../data/promises';

export default function PromiseFeed({ statusFilter, categoryFilter }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortMode, setSortMode] = useState('recent');
  const [expandedId, setExpandedId] = useState(null);

  const filtered = useMemo(() => {
    let list = [...promises];

    // Status filter
    if (statusFilter && statusFilter !== 'all') {
      list = list.filter(p => p.status === statusFilter);
    }

    // Category filter
    if (categoryFilter) {
      list = list.filter(p => p.category === categoryFilter);
    }

    // Search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.politician.toLowerCase().includes(q) ||
        p.constituency.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.party.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortMode === 'progress') {
      list.sort((a, b) => b.progress - a.progress);
    } else if (sortMode === 'contested') {
      list.sort((a, b) => (b.status === 'contested' ? 1 : 0) - (a.status === 'contested' ? 1 : 0) || b.debateCount - a.debateCount);
    } else if (sortMode === 'credibility') {
      list.sort((a, b) => a.credibilityScore - b.credibilityScore);
    } else {
      // 'recent' — sort by lastUpdated descending
      list.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
    }

    return list;
  }, [statusFilter, categoryFilter, searchQuery, sortMode]);

  return (
    <div className="flex flex-col gap-2.5 animate-fade-in">
      {/* Search & Sort */}
      <div className="flex gap-2 mb-1">
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search promises, politicians, constituencies..."
          className="flex-1 px-3.5 py-2.5 border border-border rounded-xl text-[13px] bg-white text-text-primary outline-none transition-all duration-150 focus:border-primary focus:shadow-glow placeholder:text-text-faint"
        />
        <select
          value={sortMode}
          onChange={e => setSortMode(e.target.value)}
          className="px-3 py-2.5 border border-border rounded-xl text-[13px] bg-white text-text-secondary outline-none cursor-pointer"
        >
          <option value="recent">Sort: Most recent</option>
          <option value="contested">Sort: Most contested</option>
          <option value="progress">Sort: Progress</option>
          <option value="credibility">Sort: Lowest credibility</option>
        </select>
      </div>

      {/* Promise Cards */}
      {filtered.length === 0 ? (
        <div className="p-8 text-center text-text-faint text-sm bg-white rounded-xl border border-border-light">
          No promises found. Try a different search or filter.
        </div>
      ) : (
        filtered.map((promise, i) => (
          <div
            key={promise.id}
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: `${i * 0.04}s`, animationFillMode: 'forwards' }}
          >
            <PromiseCard
              promise={promise}
              isExpanded={expandedId === promise.id}
              onToggle={() => setExpandedId(expandedId === promise.id ? null : promise.id)}
            />
          </div>
        ))
      )}

      {/* Results count */}
      <div className="text-center text-[11px] text-text-faint py-2">
        Showing {filtered.length} of {promises.length} promises
      </div>
    </div>
  );
}
