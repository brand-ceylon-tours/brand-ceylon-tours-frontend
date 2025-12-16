import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-serif font-bold text-brand-800 mb-4">404</h1>
        <h2 className="text-2xl font-serif font-semibold text-brand-700 mb-4">Page Not Found</h2>
        <p className="text-brand-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
}

