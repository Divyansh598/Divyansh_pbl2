import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStatusCounts, nearbyLeaders, topLeaders, activityFeed } from '../data/promises';
import ProgressBar from '../components/ui/ProgressBar';

function AnimatedCounter({ target, duration = 2000, color }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.max(1, Math.floor(target / (duration / 30)));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [target, duration]);
  return <span style={{ color }}>{count.toLocaleString()}</span>;
}

function TrendBadge({ trend }) {
  const icons = { up: '↗', down: '↘', stable: '→' };
  const colors = { up: '#2d7d2d', down: '#A32D2D', stable: '#854F0B' };
  return (
    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full" style={{ color: colors[trend], backgroundColor: trend === 'up' ? '#EDFAED' : trend === 'down' ? '#FCEBEB' : '#FEF3E2' }}>
      {icons[trend]}
    </span>
  );
}

export default function LandingPage() {
  const navigate = useNavigate();
  const counts = getStatusCounts();
  const [activeActivity, setActiveActivity] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveActivity(prev => (prev + 1) % activityFeed.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* ===== HERO ===== */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: 'linear-gradient(rgba(163,45,45,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(163,45,45,0.4) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-16 sm:py-24 relative">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-center">
            <div className="animate-fade-in-up opacity-0" style={{ animationFillMode: 'forwards' }}>
              <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full text-[11px] font-semibold border border-white/10 bg-white/5 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                India's #1 Political Accountability Platform
              </div>
              <h1 className="text-4xl sm:text-[52px] font-black text-white leading-[1.1] tracking-tight mb-5">
                Every Promise<br />
                is a <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #ef4444, #f97316)' }}>Contract.</span>
              </h1>
              <p className="text-[15px] text-gray-400 leading-relaxed mb-8 max-w-md">
                Track political promises. Demand evidence. Contest false claims in 
                AI-moderated public debates. Hold your leaders accountable.
              </p>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => navigate('/dashboard')} className="px-7 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl text-[13px] transition-all cursor-pointer border-none shadow-lg shadow-primary/25">
                  Explore Promises →
                </button>
                <button onClick={() => navigate('/debate')} className="px-7 py-3 bg-white/[0.08] hover:bg-white/[0.14] text-white font-semibold rounded-xl text-[13px] transition-all cursor-pointer border border-white/15 backdrop-blur-sm">
                  ⚔️ Debate Arena
                </button>
              </div>
            </div>

            {/* Stats Card */}
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}>
              <div className="bg-white/[0.06] backdrop-blur-xl rounded-2xl border border-white/10 p-5">
                <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Live Stats
                </div>
                <div className="grid grid-cols-2 gap-2.5 mb-3">
                  {[
                    { label: 'Promises Tracked', value: counts.all, color: '#fff' },
                    { label: 'Broken', value: counts.broken, color: '#ef4444' },
                    { label: 'Fulfilled', value: counts.kept, color: '#22c55e' },
                    { label: 'Active Debates', value: counts.contested, color: '#a78bfa' },
                  ].map((s, i) => (
                    <div key={i} className="bg-white/[0.04] rounded-xl p-3 border border-white/[0.06]">
                      <div className="text-[22px] font-bold leading-none mb-1">
                        <AnimatedCounter target={s.value} color={s.color} />
                      </div>
                      <div className="text-[10px] text-gray-500">{s.label}</div>
                    </div>
                  ))}
                </div>
                {/* Ticker */}
                <div className="bg-white/[0.04] rounded-xl p-2.5 border border-white/[0.06]">
                  <div className="relative h-4 overflow-hidden">
                    {activityFeed.map((item, i) => (
                      <div
                        key={i}
                        className="absolute inset-0 flex items-center gap-2 transition-all duration-500 text-[11px] text-gray-400"
                        style={{ transform: i === activeActivity ? 'translateY(0)' : 'translateY(100%)', opacity: i === activeActivity ? 1 : 0 }}
                      >
                        <span className="flex-shrink-0">{item.icon}</span>
                        <span className="truncate">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== NEARBY LEADERS ===== */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-end justify-between mb-5">
          <div>
            <h2 className="text-[17px] font-bold text-text-primary tracking-tight">📍 Leaders Near You</h2>
            <p className="text-[12px] text-text-muted mt-0.5">Politicians representing your area</p>
          </div>
          <button onClick={() => navigate('/scores')} className="text-[12px] text-primary font-semibold cursor-pointer bg-transparent border-none hover:underline">
            View all →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {nearbyLeaders.map((leader, i) => (
            <div
              key={leader.id}
              onClick={() => navigate('/scores')}
              className="bg-white border border-border rounded-xl p-4 cursor-pointer hover:shadow-lg hover:border-gray-300 transition-all duration-200 animate-fade-in-up opacity-0 group"
              style={{ animationDelay: `${i * 0.07}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ backgroundColor: leader.color + '15', color: leader.color }}>
                  {leader.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold text-text-primary truncate group-hover:text-primary transition-colors">{leader.name}</div>
                  <div className="text-[11px] text-text-muted">{leader.role} · {leader.party}</div>
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] mb-2">
                <span className="text-text-faint">📍 {leader.distance}</span>
                <span className="font-bold" style={{ color: leader.score >= 50 ? '#2d7d2d' : leader.score >= 35 ? '#854F0B' : '#A32D2D' }}>
                  {leader.score}/100
                </span>
              </div>
              <ProgressBar progress={leader.score} color={leader.score >= 50 ? '#2d7d2d' : leader.score >= 35 ? '#854F0B' : '#A32D2D'} height={3} />
              <div className="flex justify-between mt-2 text-[10px] text-text-faint">
                <span>{leader.promises} promises</span>
                <span className="text-broken font-semibold">{leader.broken} broken</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== TOP LEADERS ===== */}
      <div className="bg-white border-y border-border">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-10">
          <div className="flex items-end justify-between mb-5">
            <div>
              <h2 className="text-[17px] font-bold text-text-primary tracking-tight">🏛️ Top Leaders — Accountability Rankings</h2>
              <p className="text-[12px] text-text-muted mt-0.5">India's most-tracked politicians by promise delivery</p>
            </div>
            <button onClick={() => navigate('/scores')} className="text-[12px] text-primary font-semibold cursor-pointer bg-transparent border-none hover:underline">
              Full scorecards →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {topLeaders.map((leader, i) => (
              <div
                key={leader.id}
                className="bg-surface-secondary border border-border-light rounded-xl p-4 hover:bg-white hover:shadow-md hover:border-border transition-all duration-200 animate-fade-in-up opacity-0 cursor-pointer group"
                style={{ animationDelay: `${i * 0.06}s`, animationFillMode: 'forwards' }}
                onClick={() => navigate('/scores')}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold" style={{ backgroundColor: leader.color + '14', color: leader.color }}>
                      {leader.initials}
                    </div>
                    <div className="absolute -top-1 -right-1"><TrendBadge trend={leader.trending} /></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-semibold text-text-primary group-hover:text-primary transition-colors truncate">{leader.name}</div>
                    <div className="text-[11px] text-text-muted">{leader.role} · {leader.party}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold" style={{ color: leader.score >= 50 ? '#2d7d2d' : leader.score >= 35 ? '#854F0B' : '#A32D2D' }}>{leader.score}</div>
                    <div className="text-[9px] text-text-faint font-medium uppercase">Score</div>
                  </div>
                </div>
                <div className="mt-3 pt-2.5 border-t border-border-light flex items-center gap-4 text-[11px]">
                  <span className="text-text-muted">{leader.promises} promises</span>
                  <span className="text-kept font-semibold">{leader.kept} kept</span>
                  <span className="text-broken font-semibold">{leader.broken} broken</span>
                  <span className="text-text-faint ml-auto">{Math.round((leader.kept / leader.promises) * 100)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-10">
        <div className="rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #A32D2D 0%, #791F1F 100%)' }}>
          <div className="px-8 py-10 sm:py-12 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Democracy needs watchdogs. Be one.</h2>
            <p className="text-sm text-red-200/80 mb-7 max-w-md mx-auto">
              Submit evidence, contest broken promises, and help build India's largest political accountability database.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <button onClick={() => navigate('/submit')} className="px-6 py-2.5 bg-white text-primary font-semibold rounded-xl text-[13px] hover:bg-gray-50 cursor-pointer border-none shadow-lg transition-all">
                📄 Submit Evidence
              </button>
              <button onClick={() => navigate('/debate')} className="px-6 py-2.5 bg-white/10 text-white font-semibold rounded-xl text-[13px] hover:bg-white/20 cursor-pointer border border-white/20 transition-all">
                ⚔️ Join a Debate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
