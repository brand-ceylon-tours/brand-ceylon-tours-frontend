import { notFound } from 'next/navigation';
import Link from 'next/link';
import { tourismPackages } from '@/lib/data/packages';

interface PackageDetailPageProps {
  params: {
    id: string;
  };
}

export default function PackageDetailPage({ params }: PackageDetailPageProps) {
  const pkg = tourismPackages.find((p) => p.id === params.id);

  if (!pkg) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-brand-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-brand-600 to-brand-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/packages"
            className="inline-flex items-center text-brand-100 hover:text-white mb-4 transition-colors"
          >
            ← Back to Packages
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{pkg.title}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">{pkg.description}</p>
        </div>
      </section>

      {/* Package Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-brand-200">
                <h2 className="text-2xl font-serif font-bold text-brand-800 mb-4">Package Overview</h2>
                <p className="text-brand-600 leading-relaxed mb-6">{pkg.description}</p>
                
                <div className="border-t border-brand-200 pt-6">
                  <h3 className="text-xl font-serif font-semibold text-brand-800 mb-4">Highlights</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-brand-600 mr-2">✓</span>
                        <span className="text-brand-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 border border-brand-200">
                <h2 className="text-2xl font-serif font-bold text-brand-800 mb-4">What&apos;s Included</h2>
                <ul className="space-y-3 text-brand-600">
                  <li className="flex items-start">
                    <span className="text-brand-600 mr-2">✓</span>
                    <span>Accommodation as per package</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-600 mr-2">✓</span>
                    <span>Transportation between destinations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-600 mr-2">✓</span>
                    <span>Professional tour guide</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-600 mr-2">✓</span>
                    <span>Entrance fees to attractions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-600 mr-2">✓</span>
                    <span>Breakfast included</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24 border border-brand-200">
                <div className="text-center mb-6">
                  <div className="text-4xl font-serif font-bold text-brand-600 mb-2">{pkg.price}</div>
                  <div className="text-brand-600">{pkg.duration}</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-600">Region:</span>
                    <span className="font-semibold text-brand-800">{pkg.region}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-600">Duration:</span>
                    <span className="font-semibold text-brand-800">{pkg.duration}</span>
                  </div>
                </div>

                <button className="w-full bg-brand-600 text-white py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors shadow-md mb-4">
                  Book Now
                </button>

                <Link
                  href="/contact"
                  className="block w-full text-center bg-white border-2 border-brand-600 text-brand-600 py-3 rounded-lg font-semibold hover:bg-brand-50 transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              <div className="bg-brand-50 rounded-lg p-6 border border-brand-200">
                <h3 className="font-serif font-semibold text-brand-800 mb-3">Need Help?</h3>
                <p className="text-sm text-brand-600 mb-4">
                  Have questions about this package? Our team is here to help.
                </p>
                <Link
                  href="/contact"
                  className="text-brand-600 hover:text-brand-700 text-sm font-medium"
                >
                  Contact Support →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

