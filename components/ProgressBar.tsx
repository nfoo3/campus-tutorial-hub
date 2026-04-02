'use client';

import { useState, useEffect } from 'react';
import { categories } from '@/data/resources';

const WATCHED_KEY = 'campus-hub-watched';
const TOTAL = categories.reduce((sum, c) => sum + c.resources.length, 0);

function getWatchedCount(): number {
  try {
    const stored = localStorage.getItem(WATCHED_KEY);
    return stored ? JSON.parse(stored).length : 0;
  } catch {
    return 0;
  }
}

export default function ProgressBar() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(getWatchedCount());

    // Update whenever a card is clicked
    function onUpdate() {
      setCount(getWatchedCount());
    }
    window.addEventListener('watched-updated', onUpdate);
    return () => window.removeEventListener('watched-updated', onUpdate);
  }, []);

  const percent = Math.round((count / TOTAL) * 100);

  return (
    <div className="mx-auto max-w-5xl px-6 pt-4">
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-700">Your Progress</span>
          <span className="text-sm font-bold text-[#4f50ff]">{count} / {TOTAL} watched</span>
        </div>
        {/* Track */}
        <div className="h-3 w-full overflow-hidden rounded-full bg-gray-100">
          {/* Fill */}
          <div
            className="h-full rounded-full bg-[#4f50ff] transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>
        {count === TOTAL && (
          <p className="mt-2 text-center text-sm font-semibold text-green-600">
            You&apos;ve watched all tutorials!
          </p>
        )}
      </div>
    </div>
  );
}
