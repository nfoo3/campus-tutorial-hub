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

      {/* Suggestion link */}
      <div className="mx-auto max-w-5xl px-6 pb-12 text-center">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScTuhOo3WJjIv10WSNWs3aPX8zjQFXoap0hC8S_PUA4n1KYkw/viewform?usp=sharing&ouid=116602849973708478319"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-[#4f50ff] hover:underline transition-colors"
        >
          Don&apos;t see what you&apos;re looking for? Click here to make suggestions.
        </a>
      </div>

      {/* Floating back-to-top button */}
      <BackToTop />
    </>
  );
}
