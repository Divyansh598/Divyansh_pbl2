export default function LoadingSpinner({ text = 'AI is analyzing...', color = '#A32D2D' }) {
  return (
    <div className="flex items-center gap-2.5 py-2 text-xs italic" style={{ color }}>
      <div
        className="w-3 h-3 rounded-full border-2 border-current animate-spin flex-shrink-0"
        style={{ borderTopColor: 'transparent' }}
      />
      {text}
    </div>
  );
}
