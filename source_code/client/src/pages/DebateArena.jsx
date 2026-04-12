import { useState, useRef, useEffect } from 'react';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { debates } from '../data/debates';
import { moderateDebate } from '../services/aiService';

function DebateMessage({ msg }) {
  const roleStyles = {
    citizen: {
      bg: 'bg-surface-secondary',
      border: 'border-border-light',
      senderColor: 'text-text-muted',
    },
    government: {
      bg: 'bg-pending-bg',
      border: 'border-blue-200',
      senderColor: 'text-pending',
    },
    ai: {
      bg: 'bg-contested-bg',
      border: 'border-purple-200',
      senderColor: 'text-contested',
    },
  };

  const style = roleStyles[msg.role] || roleStyles.citizen;

  return (
    <div className={`rounded-xl p-3.5 text-[13px] leading-relaxed ${style.bg} border ${style.border} animate-fade-in`}>
      <div className={`text-[11px] font-semibold mb-1.5 ${style.senderColor}`}>
        {msg.sender} · {msg.location}
      </div>
      <div className="text-text-primary">{msg.text}</div>
    </div>
  );
}

function LiveDebate({ debate }) {
  const [messages, setMessages] = useState(debate.messages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const threadRef = useRef(null);

  const handleSubmit = async () => {
    const text = input.trim();
    if (!text || loading) return;

    // Add citizen message
    const citizenMsg = {
      id: Date.now(),
      role: 'citizen',
      sender: 'You',
      location: 'Citizen',
      text,
      timestamp: new Date().toISOString(),
    };
    setMessages(prev => [...prev, citizenMsg]);
    setInput('');
    setLoading(true);

    try {
      const aiResponse = await moderateDebate(text, debate);
      const aiMsg = {
        id: Date.now() + 1,
        role: 'ai',
        sender: 'AI Moderator',
        location: 'VaadaTracker',
        text: aiResponse,
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch {
      // Silently fail
    }
    setLoading(false);
  };

  useEffect(() => {
    if (threadRef.current) {
      threadRef.current.scrollTop = threadRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="bg-white border border-primary rounded-xl shadow-glow overflow-hidden animate-fade-in-up">
      <div className="p-4 sm:px-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-sm font-semibold text-text-primary leading-snug">
            {debate.title}
          </h3>
          <Badge status="contested" />
        </div>
        <div className="flex flex-wrap gap-x-3.5 text-xs text-text-muted mb-4">
          <span>{debate.politician} · {debate.constituency}</span>
          <span>Debate open: {debate.daysOpen} days</span>
          <span>{debate.publicVotes} public votes</span>
        </div>

        {/* Thread */}
        <div className="text-[11px] font-semibold text-text-faint uppercase tracking-wider mb-2.5">
          Live Debate Thread
        </div>
        <div ref={threadRef} className="flex flex-col gap-2.5 max-h-[500px] overflow-y-auto mb-4 pr-1">
          {messages.map(msg => (
            <DebateMessage key={msg.id} msg={msg} />
          ))}
        </div>

        {/* Input */}
        <div className="text-[11px] font-semibold text-text-faint uppercase tracking-wider mb-2">
          Add Your Argument
        </div>
        <div className="flex gap-2">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            placeholder="State your argument with evidence..."
            className="flex-1 px-3.5 py-2.5 border border-border rounded-xl text-[13px] bg-white text-text-primary outline-none transition-all duration-150 focus:border-primary focus:shadow-glow placeholder:text-text-faint"
            disabled={loading}
          />
          <Button variant="primary" size="md" onClick={handleSubmit} disabled={loading}>
            Submit
          </Button>
        </div>
        {loading && <LoadingSpinner text="AI moderator is analyzing your argument..." />}
      </div>
    </div>
  );
}

function ClosedDebate({ debate }) {
  return (
    <div className="bg-white border border-border rounded-xl p-4 sm:px-5 hover:shadow-md transition-all duration-150 animate-fade-in">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-sm font-semibold text-text-primary leading-snug">
          {debate.title}
        </h3>
        <Badge status="broken" size="md" />
      </div>
      <div className="flex flex-wrap gap-x-3.5 text-xs text-text-muted mb-2.5">
        <span>{debate.politician} · {debate.constituency}</span>
        <span>{debate.closedDaysAgo ? `Closed ${debate.closedDaysAgo} days ago` : `Won ${debate.closedDaysAgo} days ago`}</span>
        <span>Public: {debate.publicVotes} vs Gov: {debate.govVotes}</span>
      </div>
      <p className="text-[13px] text-text-secondary leading-relaxed">
        {debate.summary}
      </p>
    </div>
  );
}

export default function DebateArena() {
  const [activeTab, setActiveTab] = useState('live');

  const liveDebates = debates.filter(d => d.status === 'live');
  const closedDebates = debates.filter(d => d.status === 'closed');
  const wonDebates = debates.filter(d => d.status === 'won');

  const tabs = [
    { key: 'live', label: `Live debates (${liveDebates.length})` },
    { key: 'closed', label: `Closed (${closedDebates.length})` },
    { key: 'won', label: `Public wins (${wonDebates.length})` },
  ];

  return (
    <div>
      {/* Hero */}
      <div className="bg-white border-b border-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <h1 className="text-xl sm:text-2xl font-bold text-text-primary mb-1.5 tracking-tight">
            Debate Arena
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-xl">
            Citizens contest. Government responds. AI moderates. The public decides who has stronger evidence.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-5">
        {/* Tabs */}
        <div className="flex gap-0 border-b border-border-light mb-5">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2.5 text-[13px] font-medium transition-all duration-150 border-b-2 -mb-px cursor-pointer bg-transparent ${
                activeTab === tab.key
                  ? 'text-primary border-primary'
                  : 'text-text-muted border-transparent hover:text-text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3">
          {activeTab === 'live' && liveDebates.map(d => (
            <LiveDebate key={d.id} debate={d} />
          ))}
          {activeTab === 'closed' && closedDebates.map(d => (
            <ClosedDebate key={d.id} debate={d} />
          ))}
          {activeTab === 'won' && wonDebates.map(d => (
            <ClosedDebate key={d.id} debate={d} />
          ))}

          {activeTab === 'live' && liveDebates.length === 0 && (
            <div className="p-8 text-center text-text-faint text-sm bg-white rounded-xl border border-border-light">
              No live debates right now. Contest a promise from the dashboard to start one.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
