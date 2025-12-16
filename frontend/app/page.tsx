import Link from 'next/link';
import Image from 'next/image';
import PackageCard from '@/components/PackageCard';
import InteractiveMap from '@/components/InteractiveMap';
import ContactSection from '@/components/ContactSection';
import { tourismPackages } from '@/lib/data/packages';

export default function Home() {
  const featuredPackages = tourismPackages.slice(0, 3);

  return (
    <main className="min-h-screen bg-brand-50">
      {/* Hero Section with Image */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-image.jpg"
            alt="Sri Lanka Tourism"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/70 via-brand-800/60 to-brand-900/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center text-white w-full">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 drop-shadow-lg">
              Discover Sri Lanka&apos;s Hidden Gems
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white drop-shadow-md">
              Experience the magic of Sri Lanka with our curated tourism packages. 
              From ancient cultural sites to pristine beaches, wildlife safaris to tea plantations, 
              we offer unforgettable journeys across this beautiful island.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/packages"
                className="px-8 py-3 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 transition-colors shadow-lg"
              >
                Explore Packages
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-brand-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-brand-800 mb-4">Our Tourism Services</h2>
            <p className="text-lg text-brand-600 max-w-3xl mx-auto">
              We provide comprehensive tourism services designed to showcase the best of Sri Lanka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-brand-50 border border-brand-200">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-serif font-semibold text-brand-800 mb-2">Cultural Tours</h3>
              <p className="text-brand-600">
                Explore ancient cities, UNESCO World Heritage sites, and rich cultural traditions
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-brand-50 border border-brand-200">
              <div className="text-4xl mb-4">🦁</div>
              <h3 className="text-xl font-serif font-semibold text-brand-800 mb-2">Wildlife Safaris</h3>
              <p className="text-brand-600">
                Experience diverse wildlife in national parks and nature reserves
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-brand-50 border border-brand-200">
              <div className="text-4xl mb-4">🏖️</div>
              <h3 className="text-xl font-serif font-semibold text-brand-800 mb-2">Beach Escapes</h3>
              <p className="text-brand-600">
                Relax on pristine beaches and enjoy water sports along the coastline
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-brand-50 border border-brand-200">
              <div className="text-4xl mb-4">⛰️</div>
              <h3 className="text-xl font-serif font-semibold text-brand-800 mb-2">Hill Country</h3>
              <p className="text-brand-600">
                Discover tea plantations, cool climates, and scenic mountain views
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-brand-50 border border-brand-200">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="text-xl font-serif font-semibold text-brand-800 mb-2">Wellness Retreats</h3>
              <p className="text-brand-600">
                Rejuvenate with Ayurveda treatments and traditional healing practices
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-brand-50 border border-brand-200">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-serif font-semibold text-brand-800 mb-2">Culinary Experiences</h3>
              <p className="text-brand-600">
                Savor authentic Sri Lankan cuisine and cooking experiences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages Section */}
      <section className="py-16 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-brand-800 mb-4">Featured Packages</h2>
            <p className="text-lg text-brand-600 max-w-2xl mx-auto">
              Handpicked experiences to help you discover the best of Sri Lanka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} featured />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/packages"
              className="inline-block px-8 py-3 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 transition-colors shadow-md"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <InteractiveMap />

      {/* Contact Footer */}
      <ContactSection />
    </main>
  );
}



