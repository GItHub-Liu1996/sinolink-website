import Link from 'next/link';
import { siteConfig, navLinks, contactInfo, coreServices, professionalResources, legalLinks } from '@/config/site';
import SocialIcons from '@/components/ui/SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-background-primary border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Row 1: Company Info + Core Value + Social Media */}
        <div className="py-12 border-b border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
            <div className="flex-1 max-w-2xl">
              <Link href="/" className="text-white text-3xl lg:text-4xl font-bold hover:text-accent-cyan transition-colors duration-300">
                {siteConfig.name}
              </Link>
              <p className="text-gray-300 text-lg leading-relaxed mt-4 mb-6">
                Your trusted partner for seamless market entry into China. Professional consulting services for sustainable business growth.
              </p>
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 text-sm font-medium">Connect with us:</span>
                <SocialIcons size="lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Core Services Navigation */}
        <div className="py-12 border-b border-gray-700">
          <h3 className="text-white font-semibold text-2xl mb-8 text-center">Our Core Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, index) => (
              <div key={index} className="text-center lg:text-left">
                <h4 className="text-accent-cyan font-semibold text-lg mb-3">{service.title}</h4>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.href}
                      className="text-gray-300 hover:text-accent-cyan block text-sm transition-colors duration-300 hover:translate-x-1"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Professional Resources */}
        <div className="py-12 border-b border-gray-700">
          <h3 className="text-white font-semibold text-2xl mb-8 text-center">Professional Resources</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {professionalResources.map((resource, index) => (
              <div key={index} className="group">
                <Link
                  href={resource.href}
                  className="block p-6 bg-gray-800/30 rounded-xl hover:bg-gray-700/40 transition-all duration-300 group-hover:translate-y-[-4px] group-hover:shadow-lg"
                >
                  <h4 className="text-white font-semibold text-base mb-2 group-hover:text-accent-cyan transition-colors duration-300">
                    {resource.label}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Row 4: Contact Info + Legal + Copyright */}
        <div className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Contact Us</h3>
              <div className="space-y-3 text-gray-400">
                <div>
                  <span className="text-white font-medium">Email:</span>
                  <a href={`mailto:${contactInfo.email}`} className="ml-2 hover:text-accent-cyan transition-colors duration-300">
                    {contactInfo.email}
                  </a>
                </div>
                <div>
                  <span className="text-white font-medium">Phone:</span>
                  <a href={`tel:${contactInfo.phone}`} className="ml-2 hover:text-accent-cyan transition-colors duration-300">
                    {contactInfo.phone}
                  </a>
                </div>
                <div>
                  <span className="text-white font-medium">Address:</span>
                  <div className="mt-1 text-sm leading-relaxed">
                    {contactInfo.address.street}<br />
                    {contactInfo.address.city}<br />
                    {contactInfo.address.district}
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Legal</h3>
              <div className="grid grid-cols-2 gap-3">
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

            {/* Quick Navigation */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Quick Links</h3>
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
          </div>

          {/* Copyright & Social Media */}
          <div className="pt-6 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2025 {siteConfig.name}. All Rights Reserved.
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm">Follow us:</span>
                <SocialIcons size="sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}