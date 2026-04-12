import { useEffect, useRef, useState } from 'react';

export default function ProgressBar({ progress, color, height = 6, animated = true }) {
  const [width, setWidth] = useState(animated ? 0 : progress);
  const barRef = useRef(null);

  useEffect(() => {
    if (!animated) return;
    const timer = setTimeout(() => setWidth(progress), 100);
    return () => clearTimeout(timer);
  }, [progress, animated]);

  return (
    <div
      className="w-full rounded-full overflow-hidden"
      style={{ height: `${height}px`, backgroundColor: '#eee' }}
    >
      <div
        ref={barRef}
        className="h-full rounded-full transition-all duration-700 ease-out"
        style={{
          width: `${width}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
}
