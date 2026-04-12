import { useState } from 'react';
import Button from '../components/ui/Button';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { promises } from '../data/promises';
import { analyzeEvidence } from '../services/aiService';

const evidenceTypes = [
  'RTI Response',
  'Photos/Video',
  'Government Document',
  'News Article',
  'Satellite Data',
];

const roles = [
  'Citizen (contesting a promise)',
  'Government representative (claiming fulfillment)',
  'Journalist / NGO (neutral verification)',
  'RTI activist',
];

export default function SubmitEvidence() {
  const [selectedPromise, setSelectedPromise] = useState(promises[0]?.title || '');
  const [role, setRole] = useState(roles[0]);
  const [description, setDescription] = useState('');
  const [evidenceType, setEvidenceType] = useState('RTI Response');
  const [aiResult, setAiResult] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleAnalyze = async () => {
    if (!description.trim()) {
      alert('Please describe your evidence first.');
      return;
    }
    setAiLoading(true);
    setAiResult(null);
    setSubmitted(false);
    try {
      const result = await analyzeEvidence(evidenceType, description);
      setAiResult(result);
    } catch {
      setAiResult('AI analysis unavailable. Please try again.');
    }
    setAiLoading(false);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <div className="bg-white border-b border-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <h1 className="text-xl sm:text-2xl font-bold text-text-primary mb-1.5 tracking-tight">
            Submit Evidence
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed max-w-xl">
            Upload proof for any promise. AI will analyze authenticity, relevance, and impact on promise status. 
            Evidence is public and permanent.
          </p>
        </div>
      </div>

      <div className="max-w-[620px] mx-auto px-4 sm:px-6 py-5">
        {/* Form Card */}
        <div className="bg-white border border-border rounded-xl p-4 sm:p-5 animate-fade-in-up">
          <div className="text-[11px] font-semibold text-text-faint uppercase tracking-wider mb-4">
            Promise & Evidence Details
          </div>

          {/* Promise Select */}
          <div className="mb-4">
            <label className="text-xs text-text-muted font-medium mb-1.5 block">Select Promise</label>
            <select
              value={selectedPromise}
              onChange={e => setSelectedPromise(e.target.value)}
              className="w-full px-3 py-2.5 border border-border rounded-xl text-[13px] bg-white text-text-primary outline-none cursor-pointer focus:border-primary transition-all"
            >
              {promises.map(p => (
                <option key={p.id} value={p.title}>{p.title}</option>
              ))}
            </select>
          </div>

          {/* Role Select */}
          <div className="mb-4">
            <label className="text-xs text-text-muted font-medium mb-1.5 block">Your Role</label>
            <select
              value={role}
              onChange={e => setRole(e.target.value)}
              className="w-full px-3 py-2.5 border border-border rounded-xl text-[13px] bg-white text-text-primary outline-none cursor-pointer focus:border-primary transition-all"
            >
              {roles.map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="text-xs text-text-muted font-medium mb-1.5 block">
              Evidence Description — what does your evidence prove?
            </label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              rows={4}
              placeholder="Describe your evidence in detail. What does it show? Where is it from? What date? The more specific, the better the AI analysis."
              className="w-full px-3 py-2.5 border border-border rounded-xl text-[13px] bg-white text-text-primary outline-none resize-y font-[inherit] leading-relaxed focus:border-primary focus:shadow-glow transition-all placeholder:text-text-faint"
            />
          </div>

          {/* Evidence Type */}
          <div className="mb-5">
            <label className="text-xs text-text-muted font-medium mb-2 block">Evidence Type</label>
            <div className="flex flex-wrap gap-3">
              {evidenceTypes.map(type => (
                <label
                  key={type}
                  className="flex items-center gap-2 text-[13px] text-text-primary cursor-pointer"
                >
                  <input
                    type="radio"
                    name="evtype"
                    value={type}
                    checked={evidenceType === type}
                    onChange={e => setEvidenceType(e.target.value)}
                    className="accent-[#A32D2D]"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* File Upload Area */}
          <div className="mb-5 border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary-light transition-all cursor-pointer bg-surface-secondary">
            <div className="text-2xl mb-2">📁</div>
            <div className="text-sm text-text-secondary font-medium mb-1">
              Drag & drop files here, or click to browse
            </div>
            <div className="text-[11px] text-text-faint">
              Supports: PDF, JPG, PNG, MP4 (max 10MB)
            </div>
          </div>

          {/* Analyze Button */}
          <Button variant="primary" size="full" onClick={handleAnalyze} disabled={aiLoading}>
            Analyze with AI
          </Button>
        </div>

        {/* Loading */}
        {aiLoading && (
          <div className="mt-3">
            <LoadingSpinner text="AI is scanning your evidence for authenticity and relevance..." />
          </div>
        )}

        {/* AI Result */}
        {aiResult && (
          <div className="mt-3 bg-white border border-border rounded-xl p-4 sm:p-5 animate-fade-in-up">
            <div className="text-[11px] font-semibold text-text-faint uppercase tracking-wider mb-3">
              AI Evidence Analysis
            </div>
            <p className="text-[13px] text-text-primary leading-relaxed mb-4">
              {aiResult}
            </p>

            {!submitted ? (
              <div className="flex gap-2">
                <Button variant="primary" size="md" onClick={handleSubmit}>
                  Confirm & Submit Evidence
                </Button>
                <Button size="md" onClick={() => setAiResult(null)}>
                  Cancel
                </Button>
              </div>
            ) : (
              <div className="p-3 bg-kept-bg border border-green-200 rounded-lg text-[13px] text-kept font-medium animate-scale-in flex items-center gap-2">
                <span className="text-lg">✓</span>
                Evidence submitted successfully! It will appear on the promise's evidence chain after verification.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
