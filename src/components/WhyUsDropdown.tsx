'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface WhyUsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const whyUsCategories = [
  {
    title: 'Company Overview',
    description: 'Mission, values & expert team',
    icon: (
      <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center">
        <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>
    ),
    href: '/about',
    links: [
      { title: 'About Us', href: '/about' },
      { title: 'Our Team', href: '/about#team' },
      { title: 'Company History', href: '/about#history' },
      { title: 'Mission · Values', href: '/about#mission' }
    ]
  },
  {
    title: 'Our Expertise',
    description: '15+ years China market expertise',
    icon: (
      <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center">
        <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    ),
    href: '/about',
    links: [
      { title: 'Industry Experience', href: '/about#experience' },
      { title: 'Certifications', href: '/about#certifications' },
      { title: 'Client Testimonials', href: '/about#testimonials' },
      { title: 'Awards · Recognition', href: '/about#awards' }
    ]
  },
  {
    title: 'Success Metrics',
    description: 'Proven client success track record',
    icon: (
      <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center">
        <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
    ),
    href: '/case-studies',
    links: [
      { title: 'Case Studies', href: '/case-studies' },
      { title: 'Success Stories', href: '/case-studies#success' },
      { title: 'Client Portfolio', href: '/case-studies#portfolio' },
      { title: 'Results Dashboard', href: '/case-studies#results' }
    ]
  }
];

const featuredResources = [
  {
    title: 'Why Choose Us',
    description: 'Discover what makes us different',
    href: '/about#why-choose-us',
    image: '⭐'
  },
  {
    title: 'Client Success Stories',
    description: 'Real results from real clients',
    href: '/case-studies',
    image: '🏆'
  },
  {
    title: 'Free Consultation',
    description: 'Get personalized advice',
    href: '/contact',
    image: '💬'
  },
  {
    title: 'Pricing · Process',
    description: 'Transparent pricing structure',
    href: '/pricing-process',
    image: '💰'
  }
];

export default function WhyUsDropdown({ isOpen, onClose }: WhyUsDropdownProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="fixed top-24 left-0 w-full bg-white shadow-2xl border-t border-gray-200 z-50"
        ref={menuRef}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Column 1: Company Overview */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {whyUsCategories[0].icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-heading mb-2 font-sans">
                    {whyUsCategories[0].title}
                  </h3>
                  <p className="text-sm text-text-main mb-4 font-sans">
                    {whyUsCategories[0].description}
                  </p>
                  <div className="space-y-2">
                    {whyUsCategories[0].links.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className="block text-sm text-accent-cyan hover:text-accent-magenta transition-colors duration-200 font-medium"
                        onClick={onClose}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Our Expertise */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {whyUsCategories[1].icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-heading mb-2 font-sans">
                    {whyUsCategories[1].title}
                  </h3>
                  <p className="text-sm text-text-main mb-4 font-sans">
                    {whyUsCategories[1].description}
                  </p>
                  <div className="space-y-2">
                    {whyUsCategories[1].links.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className="block text-sm text-accent-cyan hover:text-accent-magenta transition-colors duration-200 font-medium"
                        onClick={onClose}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Success Metrics */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {whyUsCategories[2].icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-heading mb-2 font-sans">
                    {whyUsCategories[2].title}
                  </h3>
                  <p className="text-sm text-text-main mb-4 font-sans">
                    {whyUsCategories[2].description}
                  </p>
                  <div className="space-y-2">
                    {whyUsCategories[2].links.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className="block text-sm text-accent-cyan hover:text-accent-magenta transition-colors duration-200 font-medium"
                        onClick={onClose}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: Featured Resources */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-text-heading mb-4 font-sans">Featured Resources</h3>
              {featuredResources.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block group p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  onClick={onClose}
                >
                  <div>
                    <h4 className="text-sm font-medium text-text-heading group-hover:text-accent-cyan transition-colors duration-200 mb-1 font-sans">
                      {item.title}
                    </h4>
                    <p className="text-xs text-text-main font-sans">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Bottom Link */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <Link
              href="/about"
              className="inline-flex items-center text-accent-cyan hover:text-accent-magenta font-semibold transition-colors duration-200 font-sans"
              onClick={onClose}
            >
              Learn More About Us
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
