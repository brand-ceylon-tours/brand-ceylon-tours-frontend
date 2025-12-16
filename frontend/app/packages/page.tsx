import PackageCard from '@/components/PackageCard';
import { tourismPackages } from '@/lib/data/packages';

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-brand-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-brand-600 to-brand-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Tourism Packages</h1>
            <p className="text-xl text-brand-100 max-w-2xl mx-auto">
              Choose from our carefully curated selection of tourism packages designed to showcase the best of Sri Lanka
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourismPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

