import BackToTop from '@/components/BackToTop';
import ProgressBar from '@/components/ProgressBar';
import SearchableContent from '@/components/SearchableContent';
import TableOfContents from '@/components/TableOfContents';

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

      {/* Intro blurb */}
      <div className="mx-auto max-w-5xl px-6 pt-4">
        <p className="text-center text-base text-gray-600">
          Watch these short videos to get started with your online class tools.
        </p>
      </div>

      {/* Jump to nav */}
      <TableOfContents />

      {/* Progress tracker */}
      <ProgressBar />

      {/* Search + resource categories */}
      <SearchableContent />

      {/* Floating back-to-top button */}
      <BackToTop />
    </>
  );
}
