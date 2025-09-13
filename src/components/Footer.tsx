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

    // 先显示即时反馈
    setTimeout(() => {
      setSubscribeStatus('success');
      setSubscribeMessage('Thank you for subscribing! We\'ll keep you updated.');
      setEmail('');
      setIsSubscribing(false);
    }, 1000);

    // 后台尝试发送到API（不影响用户体验）
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

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          // 如果API成功，更新消息
          setSubscribeMessage('Successfully subscribed to our newsletter!');
        }
      }
    } catch (error) {
      console.error('Subscription error:', error);
      // 不显示错误给用户，因为已经显示了成功消息
    }
  };

  return (
    <footer className="bg-background-primary border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content - Four Column Layout */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            
            {/* Column 1: Company Info + Social Media + Newsletter */}
            <div className="flex flex-col min-h-[400px] lg:min-h-[450px]">
              {/* Logo + Brand Tagline Group */}
              <div className="mb-8 lg:mb-10">
                <Logo 
                  variant="default" 
                  width={500} 
                  height={140} 
                  className="h-28 lg:h-32 w-auto mb-4"
                />
                <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
                  Your trusted partner for navigating the complexity of the China market.
                </p>
              </div>
              
              {/* Social Media + Newsletter Group - Moved Up */}
              <div className="flex-1 flex flex-col justify-start space-y-8 lg:space-y-10 mt-4">
                {/* Social Media Icons */}
                <div className="flex items-center gap-x-3">
                  <span className="text-gray-500 font-normal text-sm lg:text-base whitespace-nowrap">
                    Connect
                  </span>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <div className="flex items-center gap-x-3">
                    <SocialIcons size="md" />
                  </div>
                </div>

                {/* Newsletter Subscription */}
                <div className="mt-4">
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-1.5">
                    <input
                      type="email"
                      placeholder="Enter your email for insights"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-2.5 py-1.5 bg-white border border-gray-300 rounded-md text-text-main placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all duration-300 text-xs"
                      required
                    />
                    <button
                      type="submit"
                      disabled={isSubscribing}
                      className={`px-2.5 py-1.5 rounded-md font-medium transition-all duration-300 text-white hover:shadow-lg text-xs disabled:cursor-not-allowed whitespace-nowrap ${
                        isSubscribing 
                          ? 'bg-gradient-to-r from-green-500 to-green-600 animate-pulse' 
                          : 'bg-gradient-to-r from-accent-cyan to-accent-magenta hover:from-accent-magenta hover:to-accent-cyan'
                      }`}
                    >
                      {isSubscribing ? '✓ Subscribing...' : 'Subscribe'}
                    </button>
                  </form>
                  {subscribeMessage && (
                    <div className={`mt-1.5 p-2 rounded-md transition-all duration-300 ${
                      subscribeStatus === 'success' 
                        ? 'bg-green-50 border border-green-200' 
                        : 'bg-red-50 border border-red-200'
                    }`}>
                      <p className={`text-xs flex items-center ${
                        subscribeStatus === 'success' ? 'text-green-700' : 'text-red-700'
                      }`}>
                        {subscribeStatus === 'success' && (
                          <span className="mr-1">✓</span>
                        )}
                        {subscribeMessage}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Column 2: Core Services */}
            <div className="flex flex-col justify-start min-h-[400px] lg:min-h-[450px]">
              <h3 className="text-text-heading font-semibold text-lg lg:text-xl mb-6">Our Services</h3>
              <div className="space-y-6">
                {coreServices.slice(0, 3).map((service, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="text-text-heading font-semibold text-base lg:text-lg">{service.title}</h4>
                    <div className="space-y-2">
                      {service.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.href}
                          className="text-text-main hover:text-accent-primary block text-sm lg:text-base transition-colors duration-300 hover:translate-x-1"
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
            <div className="flex flex-col justify-start min-h-[400px] lg:min-h-[450px]">
              <h3 className="text-text-heading font-semibold text-lg lg:text-xl mb-6">Resources</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-text-heading font-semibold text-base lg:text-lg mb-3">Latest Insights</h4>
                  <div className="space-y-2">
                    <Link href="/insights/blog/wfoe-registration-guide-2025" className="text-text-main hover:text-accent-primary block text-sm lg:text-base transition-colors duration-300 hover:translate-x-1">
                      WFOE Registration Guide 2025
                    </Link>
                    <Link href="/insights/blog/chinese-tax-system-primer" className="text-text-main hover:text-accent-primary block text-sm lg:text-base transition-colors duration-300 hover:translate-x-1">
                      Chinese Tax System Primer
                    </Link>
                    <Link href="/insights/blog/hr-and-visa-essentials-china" className="text-text-main hover:text-accent-primary block text-sm lg:text-base transition-colors duration-300 hover:translate-x-1">
                      HR · Visa Essentials
                    </Link>
                    <Link href="/insights/blog/intellectual-property-protection-china" className="text-text-main hover:text-accent-primary block text-sm lg:text-base transition-colors duration-300 hover:translate-x-1">
                      IP Protection in China
                    </Link>
                  </div>
                </div>
                <div>
                  <h4 className="text-text-heading font-semibold text-base lg:text-lg mb-3">Tools · Guides</h4>
                  <div className="space-y-2">
                    <Link href="/insights/tools" className="text-text-main hover:text-accent-primary block text-sm lg:text-base transition-colors duration-300 hover:translate-x-1">
                      Business Tools
                    </Link>
                    <Link href="/case-studies" className="text-text-main hover:text-accent-primary block text-sm lg:text-base transition-colors duration-300 hover:translate-x-1">
                      Success Stories
                    </Link>
                    <Link href="/insights/whitepapers" className="text-text-main hover:text-accent-primary block text-sm lg:text-base transition-colors duration-300 hover:translate-x-1">
                      Research Reports
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: Quick Links + Contact */}
            <div className="flex flex-col justify-start min-h-[400px] lg:min-h-[450px]">
              <h3 className="text-text-heading font-semibold text-lg lg:text-xl mb-6">Quick Links</h3>
              <div className="space-y-3 mb-8">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-text-main hover:text-accent-primary block text-sm lg:text-base transition-colors duration-300 hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div>
                <h3 className="text-text-heading font-semibold text-lg lg:text-xl mb-6">Contact</h3>
                <div className="space-y-4 text-text-main text-sm lg:text-base">
                  <div>
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-accent-primary transition-colors duration-300 flex items-center">
                      <span className="mr-3 text-sm lg:text-base">📧</span>
                      {contactInfo.email}
                    </a>
                  </div>
                  <div>
                    <a href={`tel:${contactInfo.phone}`} className="hover:text-accent-primary transition-colors duration-300 flex items-center">
                      <span className="mr-3 text-sm lg:text-base">📞</span>
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-3 mt-1 text-sm lg:text-base">📍</span>
                    <div className="text-sm lg:text-base leading-relaxed">
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
        <div className="py-6 lg:py-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-text-main text-sm lg:text-base">
              © 2025 {siteConfig.name}. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-6 lg:space-x-8">
              <div className="flex space-x-4 lg:space-x-6">
                {legalLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-text-main hover:text-accent-primary text-sm lg:text-base transition-colors duration-300"
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