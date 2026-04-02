import BackToTop from '@/components/BackToTop';
import CategorySection from '@/components/CategorySection';
import ProgressBar from '@/components/ProgressBar';
import TableOfContents from '@/components/TableOfContents';
import { categories } from '@/data/resources';

export default function Home() {
  return (
    <>
      {/* Header image */}
      <header className="mx-auto max-w-5xl px-6 pt-8">
        <img
          src="/header.png"
          alt="Campus Tutorial Hub"
          className="w-full object-contain"
        />
      </header>

      {/* Jump to nav */}
      <TableOfContents />

      {/* Progress tracker */}
      <ProgressBar />

      {/* Resource categories */}
      <main className="mx-auto max-w-5xl px-6 py-12">
        <div className="space-y-12">
          {categories.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>
      </main>

      {/* Floating back-to-top button */}
      <BackToTop />
    </>
  );
}
