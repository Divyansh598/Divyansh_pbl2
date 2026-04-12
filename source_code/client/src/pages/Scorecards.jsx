import { useState, useEffect } from 'react';
import ProgressBar from '../components/ui/ProgressBar';
import Button from '../components/ui/Button';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { politicians } from '../data/politicians';
import { askAboutPolitician } from '../services/aiService';

function ScoreRing({ score, color, size = 72 }) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedScore / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedScore(score), 200);
    return () => clearTimeout(timer);
  }, [score]);

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#eee"
          strokeWidth="4"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-bold" style={{ color }}>{animatedScore}</span>
      </div>
    </div>
  );
}

function PoliticianCard({ politician, index }) {
  return (
    <div
      className="bg-white border border-border rounded-xl p-5 text-center hover:shadow-lg transition-all duration-200 animate-fade-in-up opacity-0"
      style={{ animationDelay: `${index * 0.08}s`, animationFillMode: 'forwards' }}
    >
      {/* Avatar */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-[15px] mx-auto mb-3"
        style={{ backgroundColor: politician.avatarBg, color: politician.avatarColor }}
      >
        {politician.initials}
      </div>

      {/* Name & Meta */}
      <div className="text-sm font-semibold text-text-primary mb-0.5">{politician.name}</div>
      <div className="text-xs text-text-muted mb-3">
        {politician.role} · {politician.constituency} · {politician.party}
      </div>

      {/* Score Ring */}
      <div className="mb-2">
        <ScoreRing score={politician.score} color={politician.scoreColor} />
      </div>
      <div className="text-[11px] text-text-faint mb-3">Accountability Score</div>

      {/* Stats */}
      <div className="flex items-center justify-center gap-3 text-[11px] text-text-secondary mb-2">
        <span>Fulfilled: <strong className="text-kept">{politician.fulfilled}</strong></span>
        <span>Broken: <strong className="text-broken">{politician.broken}</strong></span>
      </div>
      <ProgressBar progress={politician.score} color={politician.scoreColor} height={4} />

      {/* Score Breakdown */}
      <div className="mt-3 pt-3 border-t border-border-light">
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="text-left">
            <span className="text-text-faint">Response Rate</span>
            <div className="font-semibold text-text-primary">{politician.responseRate}%</div>
          </div>
          <div className="text-left">
            <span className="text-text-faint">Evidence Quality</span>
            <div className="font-semibold text-text-primary">{politician.evidenceQuality}%</div>
          </div>
          <div className="text-left">
            <span className="text-text-faint">Deadline Hit Rate</span>
            <div className="font-semibold text-text-primary">{politician.avgDeadlineAdherence}%</div>
          </div>
          <div className="text-left">
            <span className="text-text-faint">Total Promises</span>
            <div className="font-semibold text-text-primary">{politician.totalPromises}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Scorecards() {
  const [query, setQuery] = useState('');
  const [aiResult, setAiResult] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);

  const sortedPoliticians = [...politicians].sort((a, b) => b.score - a.score);

  const handleAsk = async () => {
    if (!query.trim() || aiLoading) return;
    setAiLoading(true);
    setAiResult(null);
    try {
      const result = await askAboutPolitician(query);
      setAiResult(result);
    } catch {
      setAiResult('AI analysis unavailable right now.');
    }
    setAiLoading(false);
  };

  return (
    <div>
      {/* Hero */}
      <div className="bg-white border-b border-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <h1 className="text-xl sm:text-2xl font-bold text-text-primary mb-1.5 tracking-tight">
            Politician Scorecards
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-xl">
            AI-calculated accountability score (0–100) based on promise fulfillment rate, evidence quality, 
            deadline adherence, and debate response rate.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-5">
        {/* Score Formula Legend */}
        <div className="bg-white border border-border rounded-xl p-4 mb-5 animate-fade-in">
          <div className="text-[11px] font-semibold text-text-faint uppercase tracking-wider mb-3">
            How the Score is Calculated
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Promise Fulfillment', weight: '40%', color: '#2d7d2d' },
              { label: 'Evidence Quality', weight: '25%', color: '#1a5fa5' },
              { label: 'Debate Response Rate', weight: '20%', color: '#534AB7' },
              { label: 'Deadline Adherence', weight: '15%', color: '#854F0B' },
            ].map(f => (
              <div key={f.label} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: f.color }} />
                <span className="text-xs text-text-secondary">{f.label}</span>
                <span className="text-xs font-bold ml-auto" style={{ color: f.color }}>{f.weight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Politician Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-6">
          {sortedPoliticians.map((pol, i) => (
            <PoliticianCard key={pol.id} politician={pol} index={i} />
          ))}
        </div>

        {/* Ask AI */}
        <div className="bg-white border border-border rounded-xl p-4 sm:p-5 animate-fade-in">
          <div className="text-[11px] font-semibold text-text-faint uppercase tracking-wider mb-3">
            Ask AI About Any Politician
          </div>
          <div className="flex gap-2">
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleAsk()}
              placeholder="e.g. Why does Mukesh Sharma have such a low score?"
              className="flex-1 px-3.5 py-2.5 border border-border rounded-xl text-[13px] bg-white text-text-primary outline-none transition-all duration-150 focus:border-primary focus:shadow-glow placeholder:text-text-faint"
            />
            <Button variant="primary" size="md" onClick={handleAsk} disabled={aiLoading}>
              Ask AI
            </Button>
          </div>
          {aiLoading && <LoadingSpinner text="Analyzing politician data..." />}
          {aiResult && (
            <div className="mt-3 p-3.5 bg-surface-secondary rounded-xl border border-border-light text-[13px] text-text-primary leading-relaxed animate-fade-in">
              <div className="text-[10px] font-semibold text-contested uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-contested" />
                AI Analysis
              </div>
              {aiResult}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
