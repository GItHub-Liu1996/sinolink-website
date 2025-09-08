import Link from 'next/link';
import { siteConfig, navLinks, contactInfo } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="text-white text-xl font-bold">
              {siteConfig.name}
            </Link>
            <p className="text-gray-400 text-sm">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white block text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact Information</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <span className="text-white">Email:</span> {contactInfo.email}
              </p>
              <p>
                <span className="text-white">Phone:</span> {contactInfo.phone}
              </p>
              <p>
                <span className="text-white">Address:</span><br />
                {contactInfo.address.street}<br />
                {contactInfo.address.city}<br />
                {contactInfo.address.district}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 {siteConfig.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
