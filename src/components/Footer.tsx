'use client';

import Link from 'next/link';
import { useState } from 'react';
import { siteConfig, navLinks, contactInfo, coreServices, professionalResources, legalLinks } from '@/config/site';
import SocialIcons from '@/components/ui/SocialIcons';
import GradientButton from '@/components/ui/GradientButton';
import Logo from './Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    setSubscribeStatus('idle');
    setSubscribeMessage('');

    try {
      const response = await fetch('/api/subscriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          source: 'footer'
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setSubscribeStatus('success');
        setSubscribeMessage('Successfully subscribed to our newsletter!');
        setEmail('');
      } else {
        setSubscribeStatus('error');
        setSubscribeMessage(result.message || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setSubscribeStatus('error');
      setSubscribeMessage('Failed to subscribe. Please try again later.');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-background-primary border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content - Four Column Layout */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Column 1: Company Info + Social Media + Newsletter */}
            <div className="space-y-6">
              {/* Logo */}
              <Logo 
                variant="default" 
                width={500} 
                height={140} 
                className="h-32 lg:h-36 w-auto"
              />
              
              {/* Brand Tagline */}
              <p className="text-gray-500 text-sm leading-relaxed">
                Your trusted partner for navigating the complexity of the China market.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-x-4">
                <SocialIcons size="lg" />
              </div>

              {/* Newsletter Subscription */}
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email for insights"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 bg-background border border-gray-300 rounded-lg text-text-main placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all duration-300 text-sm"
                  required
                />
                <GradientButton
                  type="submit"
                  className="px-4 py-2 text-sm whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubscribing}
                >
                  {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                </GradientButton>
              </form>
              {subscribeMessage && (
                <p className={`text-xs ${
                  subscribeStatus === 'success' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {subscribeMessage}
                </p>
              )}
            </div>

            {/* Column 2: Core Services */}
            <div>
              <h3 className="text-text-heading font-semibold text-lg mb-6">Our Services</h3>
              <div className="space-y-4">
                {coreServices.slice(0, 3).map((service, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="text-text-heading font-semibold text-sm">{service.title}</h4>
                    <div className="space-y-1">
                      {service.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.href}
                          className="text-text-main hover:text-accent-primary block text-sm transition-colors duration-300 hover:translate-x-1"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Resources & Insights */}
            <div>
              <h3 className="text-text-heading font-semibold text-lg mb-6">Resources</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-text-heading font-semibold text-sm mb-2">Latest Insights</h4>
                  <div className="space-y-1">
                    <Link href="/insights/blog/wfoe-registration-guide-2025" className="text-text-main hover:text-accent-primary block text-sm transition-colors duration-300 hover:translate-x-1">
                      WFOE Registration Guide 2025
                    </Link>
                    <Link href="/insights/blog/chinese-tax-system-primer" className="text-text-main hover:text-accent-primary block text-sm transition-colors duration-300 hover:translate-x-1">
                      Chinese Tax System Primer
                    </Link>
                    <Link href="/insights/blog/hr-and-visa-essentials-china" className="text-text-main hover:text-accent-primary block text-sm transition-colors duration-300 hover:translate-x-1">
                      HR & Visa Essentials
                    </Link>
                    <Link href="/insights/blog/intellectual-property-protection-china" className="text-text-main hover:text-accent-primary block text-sm transition-colors duration-300 hover:translate-x-1">
                      IP Protection in China
                    </Link>
                  </div>
                </div>
                <div>
                  <h4 className="text-text-heading font-semibold text-sm mb-2">Tools & Guides</h4>
                  <div className="space-y-1">
                    <Link href="/insights/tools" className="text-text-main hover:text-accent-primary block text-sm transition-colors duration-300 hover:translate-x-1">
                      Business Tools
                    </Link>
                    <Link href="/insights/case-studies" className="text-text-main hover:text-accent-primary block text-sm transition-colors duration-300 hover:translate-x-1">
                      Success Stories
                    </Link>
                    <Link href="/insights/whitepapers" className="text-text-main hover:text-accent-primary block text-sm transition-colors duration-300 hover:translate-x-1">
                      Research Reports
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: Quick Links + Contact */}
            <div>
              <h3 className="text-text-heading font-semibold text-lg mb-6">Quick Links</h3>
              <div className="space-y-2 mb-8">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-text-main hover:text-accent-primary block text-sm transition-colors duration-300 hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div>
                <h3 className="text-text-heading font-semibold text-lg mb-4">Contact</h3>
                <div className="space-y-3 text-text-main text-sm">
                  <div>
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-accent-primary transition-colors duration-300 flex items-center">
                      <span className="mr-3 text-sm">📧</span>
                      {contactInfo.email}
                    </a>
                  </div>
                  <div>
                    <a href={`tel:${contactInfo.phone}`} className="hover:text-accent-primary transition-colors duration-300 flex items-center">
                      <span className="mr-3 text-sm">📞</span>
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-3 mt-1 text-sm">📍</span>
                    <div className="text-sm leading-relaxed">
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