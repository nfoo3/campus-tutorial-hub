import { Category } from '@/types';
import ResourceCard from './ResourceCard';

export default function CategorySection({ category }: { category: Category }) {
  return (
    <section id={`category-${category.id}`} aria-labelledby={`heading-${category.id}`} className="scroll-mt-8">
      {/* Category heading with brand-colored left border */}
      <div className="mb-5 border-l-4 border-[#4f50ff] pl-3">
        <h2
          id={`heading-${category.id}`}
          className="text-xl font-bold text-gray-900"
        >
          {category.name}
        </h2>
      </div>

      {/* Responsive 2-column grid on sm+ screens */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {category.resources.map((resource) => (
          <ResourceCard key={resource.url} title={resource.title} url={resource.url} duration={resource.duration} />
        ))}
      </div>
    </section>
  );
}
