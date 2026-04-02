'use client';

import { useState, useEffect } from 'react';
import { Resource } from '@/types';

const WATCHED_KEY = 'campus-hub-watched';

function getWatched(): Set<string> {
  try {
    const stored = localStorage.getItem(WATCHED_KEY);
    return stored ? new Set(JSON.parse(stored)) : new Set();
  } catch {
    return new Set();
  }
}

function saveWatched(url: string) {
  const watched = getWatched();
  watched.add(url);
  localStorage.setItem(WATCHED_KEY, JSON.stringify([...watched]));
  // Notify ProgressBar to update
  window.dispatchEvent(new Event('watched-updated'));
}

function getYouTubeId(url: string): string | null {
  const match = url.match(/[?&]v=([^&]+)/);
  return match ? match[1] : null;
}

export default function ResourceCard({ title, url, duration }: Resource) {
  const [watched, setWatched] = useState(false);

  // Read watched state from localStorage after mount (avoids SSR mismatch)
  useEffect(() => {
    setWatched(getWatched().has(url));
  }, [url]);

  function handleClick() {
    saveWatched(url);
    setWatched(true);
  }

  const videoId = getYouTubeId(url);
  const thumbnail = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="group relative flex flex-col overflow-hidden rounded-xl border bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
      style={{ borderColor: watched ? '#22c55e' : '#e5e7eb' }}
    >
      {/* Watched checkmark badge */}
      {watched && (
        <span className="absolute right-2 top-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white shadow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="h-3.5 w-3.5">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      )}

      {/* Thumbnail with play button overlay */}
      {thumbnail && (
        <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
          <img
            src={thumbnail}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600/90 text-white shadow-lg transition-transform duration-200 group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 translate-x-0.5">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>
        </div>
      )}

      {/* Title + duration row */}
      <div className="flex items-center gap-2 p-4">
        <span className="flex-1 text-base font-semibold leading-snug text-gray-800 transition-colors group-hover:text-[#4f50ff]">
          {title}
        </span>
        <div className="flex shrink-0 flex-col items-end gap-1">
          {/* Estimated watch time badge */}
          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-500">
            {duration}
          </span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4 text-gray-400 transition-colors group-hover:text-[#4f50ff]"
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </a>
  );
}
