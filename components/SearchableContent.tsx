'use client';

import { useState } from 'react';
import { categories } from '@/data/resources';
import CategorySection from './CategorySection';

export default function SearchableContent() {
  const [query, setQuery] = useState('');

  const filtered = query.trim()
    ? categories
        .map((category) => ({
          ...category,
          resources: category.resources.filter((r) =>
            r.title.toLowerCase().includes(query.toLowerCase())
          ),
        }))
        .filter((category) => category.resources.length > 0)
    : categories;

  return (
    <>
      {/* Search bar */}
      <div className="mx-auto max-w-5xl px-6 pt-6">
        <div className="relative">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <input
            type="search"
            placeholder="Search for a tutorial..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-4 text-base text-gray-800 shadow-sm outline-none transition focus:border-[#4f50ff] focus:ring-2 focus:ring-[#4f50ff]/20 placeholder:text-gray-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      <main className="mx-auto max-w-5xl px-6 py-12">
        {filtered.length > 0 ? (
          <div className="space-y-12">
            {filtered.map((category) => (
              <CategorySection key={category.id} category={category} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No tutorials found for &ldquo;{query}&rdquo;. Try a different search term.
          </p>
        )}
      </main>
    </>
  );
}
