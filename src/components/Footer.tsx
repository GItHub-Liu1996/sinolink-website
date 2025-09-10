import Link from 'next/link';
import { siteConfig, navLinks, contactInfo } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-background-primary border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4 lg:space-y-6">
            <Link href="/" className="text-white text-xl lg:text-2xl font-bold hover:text-accent-cyan transition-colors duration-300">
              {siteConfig.name}
            </Link>
            <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <div className="space-y-3">
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-accent-cyan block text-sm lg:text-base transition-colors duration-300 hover:translate-x-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 lg:space-y-6 sm:col-span-2 lg:col-span-1">
            <h3 className="text-white font-semibold text-lg">Contact Information</h3>
            <div className="space-y-3 text-sm lg:text-base text-gray-400">
              <p className="flex flex-col sm:flex-row sm:items-center gap-1">
                <span className="text-white font-medium">Email:</span> 
                <a href={`mailto:${contactInfo.email}`} className="hover:text-accent-cyan transition-colors duration-300">
                  {contactInfo.email}
                </a>
              </p>
              <p className="flex flex-col sm:flex-row sm:items-center gap-1">
                <span className="text-white font-medium">Phone:</span> 
                <a href={`tel:${contactInfo.phone}`} className="hover:text-accent-cyan transition-colors duration-300">
                  {contactInfo.phone}
                </a>
              </p>
              <div className="flex flex-col gap-1">
                <span className="text-white font-medium">Address:</span>
                <div className="text-gray-400">
                  {contactInfo.address.street}<br />
                  {contactInfo.address.city}<br />
                  {contactInfo.address.district}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 lg:mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm lg:text-base">
            © 2025 {siteConfig.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
