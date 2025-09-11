import Link from 'next/link';
import { siteConfig, navLinks, contactInfo, serviceCategories, resourceLinks, legalLinks } from '@/config/site';
import SocialIcons from '@/components/ui/SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-background-primary border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Row 1: Company Info & Social Media */}
        <div className="py-8 border-b border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            <div className="flex-1">
              <Link href="/" className="text-white text-2xl lg:text-3xl font-bold hover:text-accent-cyan transition-colors duration-300">
                {siteConfig.name}
              </Link>
              <p className="text-gray-400 text-base lg:text-lg leading-relaxed mt-3 max-w-2xl">
                {siteConfig.description}
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-end space-y-3">
              <p className="text-gray-400 text-sm font-medium">Follow us on social media:</p>
              <SocialIcons size="lg" />
            </div>
          </div>
        </div>

        {/* Row 2: Services Navigation */}
        <div className="py-8 border-b border-gray-700">
          <h3 className="text-white font-semibold text-xl mb-6">Our Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-accent-cyan font-semibold text-lg">{category.title}</h4>
                <div className="space-y-3">
                  {category.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.href}
                      className="text-gray-400 hover:text-accent-cyan block text-sm transition-colors duration-300 hover:translate-x-1"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Resources Center */}
        <div className="py-8 border-b border-gray-700">
          <h3 className="text-white font-semibold text-xl mb-6">Resources</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {resourceLinks.map((resource, index) => (
              <Link
                key={index}
                href={resource.href}
                className="group p-4 rounded-lg border border-gray-700 hover:border-accent-cyan transition-all duration-300 hover:bg-gray-800/30"
              >
                <h4 className="text-white font-medium text-base group-hover:text-accent-cyan transition-colors duration-300 mb-2">
                  {resource.label}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Row 4: Legal Links & Contact Info */}
        <div className="py-8 border-b border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Legal Links */}
            <div className="space-y-6">
              <h3 className="text-white font-semibold text-xl">Legal</h3>
              <div className="grid grid-cols-2 gap-4">
                {legalLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-accent-cyan text-sm transition-colors duration-300 hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-white font-semibold text-xl">Contact Information</h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="text-white font-medium min-w-[60px]">Email:</span> 
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-accent-cyan transition-colors duration-300">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="text-white font-medium min-w-[60px]">Phone:</span> 
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-accent-cyan transition-colors duration-300">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-white font-medium">Address:</span>
                  <div className="text-gray-400 leading-relaxed">
                    {contactInfo.address.street}<br />
                    {contactInfo.address.city}<br />
                    {contactInfo.address.district}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 5: Copyright & Social Media */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 {siteConfig.name}. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Connect with us:</span>
              <SocialIcons size="sm" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
