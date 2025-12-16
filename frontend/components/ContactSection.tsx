import Link from 'next/link';

export default function ContactSection() {
  return (
    <footer className="bg-brand-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-brand-200">Brand Ceylon Tours</h3>
            <p className="text-brand-200 text-sm">
              Your trusted partner for exploring the beautiful island of Sri Lanka. 
              We offer curated tourism experiences that showcase the best of our country.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-2 text-sm text-brand-200">
              <li className="flex items-start">
                <span className="mr-2">📧</span>
                <a href="mailto:presanganaula@gmail.com" className="hover:text-white transition-colors">
                  presanganaula@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                <a href="tel:+971508479183" className="hover:text-white transition-colors">
                  +971 50 847 9183
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>Nuala, Matale, Sri Lanka</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/packages" className="text-brand-200 hover:text-white transition-colors">
                  View All Packages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-brand-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-brand-200 hover:text-white transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-brand-700 text-center text-sm text-brand-300">
          <p>&copy; {new Date().getFullYear()} Brand Ceylon Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

