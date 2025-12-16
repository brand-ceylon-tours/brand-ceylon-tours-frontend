import Link from 'next/link';
import { TourismPackage } from '@/lib/data/packages';

interface PackageCardProps {
  pkg: TourismPackage;
  featured?: boolean;
}

export default function PackageCard({ pkg, featured = false }: PackageCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-xl border border-brand-200 ${featured ? 'h-full' : ''}`}>
      <div className="relative h-48 bg-gradient-to-br from-brand-400 to-brand-600">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-6xl font-bold opacity-20">{pkg.region.charAt(0)}</span>
        </div>
        <div className="absolute top-4 right-4 bg-brand-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {pkg.region}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-brand-800 mb-2">{pkg.title}</h3>
        <p className="text-brand-600 text-sm mb-4 line-clamp-3">{pkg.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-brand-500">{pkg.duration}</span>
          <span className="text-lg font-bold text-brand-600">{pkg.price}</span>
        </div>

        <div className="mb-4">
          <p className="text-xs font-semibold text-brand-700 mb-2">Highlights:</p>
          <ul className="flex flex-wrap gap-2">
            {pkg.highlights.slice(0, 2).map((highlight, idx) => (
              <li key={idx} className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded border border-brand-200">
                {highlight}
              </li>
            ))}
            {pkg.highlights.length > 2 && (
              <li className="text-xs text-brand-500">+{pkg.highlights.length - 2} more</li>
            )}
          </ul>
        </div>

        <Link
          href={`/packages/${pkg.id}`}
          className="block w-full text-center bg-brand-600 text-white py-2 rounded-md hover:bg-brand-700 transition-colors font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

