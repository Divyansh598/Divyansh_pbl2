import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Badge from '../ui/Badge';
import ProgressBar from '../ui/ProgressBar';
import Button from '../ui/Button';
import LoadingSpinner from '../ui/LoadingSpinner';
import { statusConfig } from '../../data/promises';
import { analyzePromise } from '../../services/aiService';

function ReactionBar({ reactions }) {
  if (!reactions) return null;
  const items = [
    { emoji: '😡', label: 'Angry', count: reactions.angry },
    { emoji: '😞', label: 'Disappointed', count: reactions.disappointed },
    { emoji: '🤞', label: 'Hopeful', count: reactions.hopeful },
    { emoji: '👍', label: 'Satisfied', count: reactions.satisfied },
  ];
  const total = items.reduce((s, i) => s + i.count, 0);
  return (
    <div className="flex items-center gap-1.5 mt-2">
      {items.map(item => (
        <button
          key={item.label}
          className="flex items-center gap-1 px-2 py-1 rounded-full bg-surface-secondary border border-border-light text-[10px] font-medium text-text-secondary hover:bg-gray-100 transition-all cursor-pointer"
          title={item.label}
        >
          <span>{item.emoji}</span>
          <span>{item.count >= 1000 ? (item.count / 1000).toFixed(1) + 'k' : item.count}</span>
        </button>
      ))}
      <span className="text-[10px] text-text-faint ml-1">{total.toLocaleString()} reactions</span>
    </div>
  );
}

function PublicOpinionSection({ opinion, status }) {
  if (!opinion) return null;
  const total = opinion.totalVotes;
  const segments = [
    { label: 'Broken', count: opinion.broken, color: '#A32D2D', pct: Math.round((opinion.broken / total) * 100) },
    { label: 'Partial', count: opinion.partial, color: '#854F0B', pct: Math.round((opinion.partial / total) * 100) },
    { label: 'Kept', count: opinion.kept, color: '#2d7d2d', pct: Math.round((opinion.kept / total) * 100) },
    { label: 'Contested', count: opinion.contested, color: '#534AB7', pct: Math.round((opinion.contested / total) * 100) },
  ];

  return (
    <div className="mb-4">
      <div className="text-[11px] font-semibold text-text-faint uppercase tracking-wider mb-2 flex items-center gap-2">
        🗳️ Public Opinion
        <span className="text-text-faint font-normal normal-case">({total.toLocaleString()} votes)</span>
      </div>
      {/* Vote bar */}
      <div className="flex h-3 rounded-full overflow-hidden mb-2">
        {segments.map(seg => (
          seg.pct > 0 && (
            <div
              key={seg.label}
              className="transition-all duration-700"
              style={{ width: `${seg.pct}%`, backgroundColor: seg.color }}
              title={`${seg.label}: ${seg.pct}%`}
            />
          )
        ))}
      </div>
      <div className="flex flex-wrap gap-3 mb-3">
        {segments.map(seg => (
          <div key={seg.label} className="flex items-center gap-1.5 text-[11px]">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: seg.color }} />
            <span className="text-text-secondary">{seg.label}</span>
            <span className="font-bold" style={{ color: seg.color }}>{seg.pct}%</span>
          </div>
        ))}
      </div>
      {/* Top comments */}
      {opinion.comments && opinion.comments.length > 0 && (
        <div className="flex flex-col gap-1.5">
          {opinion.comments.slice(0, 3).map((c, i) => (
            <div key={i} className="p-2.5 bg-surface-secondary rounded-lg border border-border-light">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-semibold text-text-secondary">{c.user} · <span className="font-normal text-text-muted">{c.location}</span></span>
                <span className="text-[10px] text-text-faint">{c.time}</span>
              </div>
              <p className="text-xs text-text-primary leading-relaxed">{c.text}</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-[10px] text-text-faint">👍 {c.upvotes.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function GovernmentProofSection({ proof }) {
  if (!proof || proof.length === 0) return (
    <div className="mb-4">
      <div className="text-[11px] font-semibold text-text-faint uppercase tracking-wider mb-2 flex items-center gap-2">
        🏛️ Government Proof Submitted
      </div>
      <div className="p-3 bg-primary-50 rounded-lg border border-dashed border-primary-100 text-xs text-primary italic">
        ⚠️ No proof submitted by government for this promise
      </div>
    </div>
  );

  return (
    <div className="mb-4">
      <div className="text-[11px] font-semibold text-text-faint uppercase tracking-wider mb-2 flex items-center gap-2">
        🏛️ Government Proof Submitted
        <span className="text-text-faint font-normal normal-case">({proof.length} documents)</span>
      </div>
      <div className="flex flex-col gap-1.5">
        {proof.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 p-2.5 rounded-lg text-xs border"
            style={{
              backgroundColor: item.verified ? '#EDFAED' : '#FEF3E2',
              borderColor: item.verified ? '#bbf0bb' : '#fde68a'
            }}
          >
            <div className={`w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${
              item.type === 'doc' ? 'bg-pending-bg text-pending' : 'bg-kept-bg text-kept'
            }`}>
              {item.type === 'doc' ? '📄' : '🖼️'}
            </div>
            <span className="flex-1 text-text-primary">{item.label}</span>
            <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
              item.verified
                ? 'bg-white text-kept'
                : 'bg-white text-partial'
            }`}>
              {item.verified ? '✓ Verified' : '⚠ Unverified'}
            </span>
            {item.date && <span className="text-text-faint text-[10px]">{item.date}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PromiseCard({ promise, isExpanded, onToggle }) {
  const [aiResult, setAiResult] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();
  const config = statusConfig[promise.status] || statusConfig.pending;

  const handleAskAI = async (e) => {
    e.stopPropagation();
    if (aiResult) { setAiResult(null); return; }
    setAiLoading(true);
    try {
      const result = await analyzePromise(promise);
      setAiResult(result);
    } catch {
      setAiResult('AI analysis unavailable right now.');
    }
    setAiLoading(false);
  };

  return (
    <div
      className={`bg-white border rounded-xl transition-all duration-200 cursor-pointer ${
        isExpanded ? 'border-primary shadow-glow' : 'border-border hover:border-gray-300 hover:shadow-md'
      }`}
      onClick={onToggle}
    >
      <div className="p-4 sm:px-5">
        {/* Top Row */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-sm font-semibold text-text-primary leading-snug">{promise.title}</h3>
          <Badge status={promise.status} />
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-x-3.5 gap-y-1 text-xs text-text-muted mb-2.5">
          <span>{promise.politician} · {promise.party}</span>
          <span>{promise.constituency}</span>
          <span>Deadline: {promise.deadline}</span>
          <span className="font-semibold" style={{ color: config.color }}>{promise.progress}% complete</span>
          <span className="text-text-faint">📂 {promise.category}</span>
        </div>

        {/* Progress Bar */}
        <ProgressBar progress={promise.progress} color={config.color} />

        {/* Reactions Bar */}
        <ReactionBar reactions={promise.reactions} />

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-border-light animate-fade-in" onClick={e => e.stopPropagation()}>
            {/* Tabs */}
            <div className="flex gap-0 border-b border-border-light mb-4 -mx-1">
              {[
                { key: 'overview', label: 'Overview' },
                { key: 'govproof', label: '🏛️ Gov Proof' },
                { key: 'opinion', label: '🗳️ Public Opinion' },
                { key: 'evidence', label: '📄 Evidence' },
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-3 py-2 text-[12px] font-medium border-b-2 -mb-px cursor-pointer bg-transparent transition-all ${
                    activeTab === tab.key ? 'text-primary border-primary' : 'text-text-muted border-transparent hover:text-text-primary'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <>
                <p className="text-[13px] text-text-secondary leading-relaxed mb-4">{promise.description}</p>
                {/* Stats row */}
                <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-surface-secondary border border-border-light">
                  {[
                    { value: promise.credibilityScore, label: 'CREDIBILITY', color: config.color },
                    { value: promise.publicVotes.citizen, label: 'PUBLIC VOTES', color: '#1a1a1a' },
                    { value: promise.publicVotes.government, label: 'GOV VOTES', color: '#888' },
                    { value: promise.debateCount, label: 'DEBATES', color: '#534AB7' },
                    { value: promise.publicOpinion?.totalVotes || 0, label: 'REACTIONS', color: '#0891b2' },
                  ].map((stat, i) => (
                    <div key={i} className="text-center flex-1">
                      <div className="text-lg font-bold" style={{ color: stat.color }}>{stat.value.toLocaleString()}</div>
                      <div className="text-[9px] text-text-faint font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Government Proof Tab */}
            {activeTab === 'govproof' && (
              <GovernmentProofSection proof={promise.governmentProof} />
            )}

            {/* Public Opinion Tab */}
            {activeTab === 'opinion' && (
              <PublicOpinionSection opinion={promise.publicOpinion} status={promise.status} />
            )}

            {/* Evidence Tab */}
            {activeTab === 'evidence' && (
              <div className="mb-4">
                <div className="text-[11px] font-semibold text-text-faint uppercase tracking-wider mb-2">
                  Evidence Chain
                </div>
                <div className="flex flex-col gap-1.5 mb-3">
                  {promise.evidence.map((ev, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-2.5 bg-surface-secondary rounded-lg text-xs text-text-secondary border border-border-light">
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${
                        ev.type === 'doc' ? 'bg-pending-bg text-pending' : 'bg-kept-bg text-kept'
                      }`}>
                        {ev.type === 'doc' ? '📄' : '🖼️'}
                      </div>
                      <span className="flex-1">{ev.label}</span>
                      {ev.verified !== undefined && (
                        <span className={`text-[10px] font-semibold ${ev.verified ? 'text-kept' : 'text-partial'}`}>
                          {ev.verified ? '✓ Verified' : '⚠ Pending'}
                        </span>
                      )}
                      {ev.date && <span className="text-text-faint text-[10px]">{ev.date}</span>}
                    </div>
                  ))}
                  {promise.evidenceMissing && (
                    <div className="flex items-center gap-2.5 p-2.5 bg-primary-50 rounded-lg text-xs text-primary border border-dashed border-primary-100 italic">
                      <span className="text-base">⚠️</span>
                      {promise.evidenceMissing}
                    </div>
                  )}
                  {promise.evidence.length === 0 && !promise.evidenceMissing && (
                    <div className="p-3 bg-primary-50 rounded-lg text-xs text-primary border border-dashed border-primary-100 italic">
                      No evidence submitted by politician
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Actions — always visible */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-border-light">
              <Button variant="primary" onClick={() => navigate('/submit')}>
                📄 Submit Evidence
              </Button>
              <Button variant="danger" onClick={() => navigate('/debate')}>
                ⚔️ Contest this promise
              </Button>
              <Button onClick={handleAskAI}>
                🤖 {aiResult ? 'Hide AI analysis' : 'Ask AI'}
              </Button>
              <Button variant="ghost" onClick={() => {}}>
                🔗 Share
              </Button>
            </div>

            {aiLoading && <LoadingSpinner text="AI is analyzing this promise..." />}

            {aiResult && (
              <div className="mt-3 p-3.5 bg-surface-secondary rounded-xl border border-border-light text-[13px] text-text-primary leading-relaxed animate-fade-in">
                <div className="text-[10px] font-semibold text-contested uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-contested" />
                  AI Credibility Assessment
                </div>
                {aiResult}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
