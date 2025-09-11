import Link from 'next/link';
import { siteConfig, navLinks, contactInfo, coreServices, professionalResources, legalLinks } from '@/config/site';
import SocialIcons from '@/components/ui/SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-background-primary border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content - Three Column Compact Layout */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Left Column: Company Info + Social Media */}
            <div className="space-y-6">
              <div>
                <Link href="/" className="text-white text-2xl lg:text-3xl font-bold hover:text-accent-cyan transition-colors duration-300">
                  {siteConfig.name}
                </Link>
                <p className="text-gray-300 text-base leading-relaxed mt-3 mb-6">
                  Your trusted partner for seamless market entry into China. Professional consulting services for sustainable business growth.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400 text-sm font-medium">Connect with us:</span>
                  <SocialIcons size="md" />
                </div>
              </div>
            </div>

            {/* Middle Column: Core Services */}
            <div className="space-y-6">
              <h3 className="text-white font-semibold text-lg">Our Services</h3>
              <div className="grid grid-cols-1 gap-4">
                {coreServices.slice(0, 4).map((service, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="text-accent-cyan font-semibold text-sm">{service.title}</h4>
                    <div className="space-y-1">
                      {service.links.slice(0, 2).map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.href}
                          className="text-gray-300 hover:text-accent-cyan block text-xs transition-colors duration-300 hover:translate-x-1"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Quick Links + Contact */}
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-gray-400 hover:text-accent-cyan block text-sm transition-colors duration-300 hover:translate-x-1"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
                <div className="space-y-2 text-gray-400 text-sm">
                  <div>
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-accent-cyan transition-colors duration-300">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div>
                    <a href={`tel:${contactInfo.phone}`} className="hover:text-accent-cyan transition-colors duration-300">
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="text-xs leading-relaxed">
                    {contactInfo.address.city}, {contactInfo.address.district}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright + Legal Links */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 {siteConfig.name}. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                {legalLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-accent-cyan text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}