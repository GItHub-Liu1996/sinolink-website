import Link from 'next/link';
import { siteConfig, navLinks, contactInfo, coreServices, professionalResources, legalLinks } from '@/config/site';
import SocialIcons from '@/components/ui/SocialIcons';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-background-primary border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content - Four Column Layout */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20">
            
            {/* Column 1: Company Info + Social Media */}
            <div className="space-y-12">
              <div>
                <Logo 
                  variant="default" 
                  width={420} 
                  height={120} 
                  className="h-28 lg:h-32 w-auto mb-8"
                />
                <p className="text-text-main text-lg leading-relaxed">
                  Your trusted partner for seamless market entry into China.<br />
                  Professional consulting services for sustainable business growth.
                </p>
              </div>
              
              <div>
                <h3 className="text-text-heading font-semibold text-2xl mb-6">Connect with us</h3>
                <SocialIcons size="lg" />
              </div>
            </div>

            {/* Column 2: Core Services */}
            <div className="space-y-12">
              <div>
                <h3 className="text-text-heading font-semibold text-2xl mb-8">Our Services</h3>
                <div className="space-y-8">
                  {coreServices.slice(0, 3).map((service, index) => (
                    <div key={index} className="space-y-4">
                      <h4 className="text-text-heading font-semibold text-lg">{service.title}</h4>
                      <div className="space-y-3">
                        {service.links.map((link, linkIndex) => (
                          <Link
                            key={linkIndex}
                            href={link.href}
                            className="text-text-main hover:text-accent-primary block text-base transition-colors duration-300 hover:translate-x-1"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3: Resources & Insights */}
            <div className="space-y-12">
              <div>
                <h3 className="text-text-heading font-semibold text-2xl mb-8">Resources</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-text-heading font-semibold text-lg mb-4">Latest Insights</h4>
                    <div className="space-y-3">
                      <Link href="/insights/blog/wfoe-registration-guide-2025" className="text-text-main hover:text-accent-primary block text-base transition-colors duration-300 hover:translate-x-1">
                        WFOE Registration Guide 2025
                      </Link>
                      <Link href="/insights/blog/chinese-tax-system-primer" className="text-text-main hover:text-accent-primary block text-base transition-colors duration-300 hover:translate-x-1">
                        Chinese Tax System Primer
                      </Link>
                      <Link href="/insights/blog/hr-and-visa-essentials-china" className="text-text-main hover:text-accent-primary block text-base transition-colors duration-300 hover:translate-x-1">
                        HR & Visa Essentials
                      </Link>
                      <Link href="/insights/blog/intellectual-property-protection-china" className="text-text-main hover:text-accent-primary block text-base transition-colors duration-300 hover:translate-x-1">
                        IP Protection in China
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-text-heading font-semibold text-lg mb-4">Tools & Guides</h4>
                    <div className="space-y-3">
                      <Link href="/insights/tools" className="text-text-main hover:text-accent-primary block text-base transition-colors duration-300 hover:translate-x-1">
                        Business Tools
                      </Link>
                      <Link href="/insights/case-studies" className="text-text-main hover:text-accent-primary block text-base transition-colors duration-300 hover:translate-x-1">
                        Success Stories
                      </Link>
                      <Link href="/insights/whitepapers" className="text-text-main hover:text-accent-primary block text-base transition-colors duration-300 hover:translate-x-1">
                        Research Reports
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: Quick Links + Contact */}
            <div className="space-y-12">
              <div>
                <h3 className="text-text-heading font-semibold text-2xl mb-8">Quick Links</h3>
                <div className="space-y-4">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-text-main hover:text-accent-primary block text-base transition-colors duration-300 hover:translate-x-1"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-text-heading font-semibold text-2xl mb-8">Contact</h3>
                <div className="space-y-6 text-text-main text-base">
                  <div>
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-accent-primary transition-colors duration-300 flex items-center">
                      <span className="mr-3 text-lg">📧</span>
                      {contactInfo.email}
                    </a>
                  </div>
                  <div>
                    <a href={`tel:${contactInfo.phone}`} className="hover:text-accent-primary transition-colors duration-300 flex items-center">
                      <span className="mr-3 text-lg">📞</span>
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-3 mt-1 text-lg">📍</span>
                    <div className="text-base leading-relaxed">
                      {contactInfo.address.street}<br />
                      {contactInfo.address.city}<br />
                      {contactInfo.address.district}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright + Legal Links */}
        <div className="py-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-main text-base">
              © 2025 {siteConfig.name}. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-8">
              <div className="flex space-x-6">
                {legalLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-text-main hover:text-accent-primary text-base transition-colors duration-300"
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