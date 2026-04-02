import { categories } from '@/data/resources';

export default function TableOfContents() {
  return (
    <nav aria-label="Table of contents" className="mx-auto max-w-5xl px-6 pt-8">
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="mb-4 text-lg font-bold text-gray-700">
          Jump to
        </p>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#category-${category.id}`}
              className="rounded-full border border-gray-200 px-5 py-2 text-base font-semibold text-gray-600 transition-all duration-200 hover:border-[#4f50ff] hover:bg-[#4f50ff] hover:text-white"
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
