'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface InsightsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const insightsCategories = [
  {
    title: 'Knowledge Hub',
    description: 'Expert insights & industry analysis',
    icon: (
      <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center">
        <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
    ),
    href: '/insights',
    links: [
      { title: 'Blog Articles', href: '/insights' },
      { title: 'Industry Reports', href: '/insights/reports' },
      { title: 'Market Analysis', href: '/insights/analysis' },
      { title: 'Regulatory Updates', href: '/insights/regulatory' }
    ]
  },
  {
    title: 'City Guides',
    description: 'Business guides for major Chinese cities',
    icon: (
      <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center">
        <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
    ),
    href: '/city-guides',
    links: [
      { title: 'Shanghai Guide', href: '/city-guides/shanghai' },
      { title: 'Beijing Guide', href: '/city-guides/beijing' },
      { title: 'Shenzhen Guide', href: '/city-guides/shenzhen' },
      { title: 'All Cities', href: '/city-guides' }
    ]
  },
  {
    title: 'Tools · Resources',
    description: 'Practical tools & downloadable resources',
    icon: (
      <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center">
        <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
    ),
    href: '/insights/tools',
    links: [
      { title: 'Business Tools', href: '/insights/tools' },
      { title: 'Templates', href: '/insights/templates' },
      { title: 'Checklists', href: '/insights/checklists' },
      { title: 'Calculators', href: '/insights/calculators' }
    ]
  }
];

const latestContent = [
  {
    title: 'WFOE Registration Guide 2025',
    description: 'Complete step-by-step registration guide',
    href: '/insights/blog/wfoe-registration-guide-2025/',
    image: '📋'
  },
  {
    title: 'Chinese Tax System Primer',
    description: 'Understanding China\'s tax landscape',
    href: '/insights/blog/chinese-tax-system-primer/',
    image: '📊'
  },
  {
    title: 'View All Articles',
    description: 'Browse our complete knowledge base',
    href: '/insights/',
    image: '📚'
  },
  {
    title: 'Subscribe to Updates',
    description: 'Get the latest insights delivered',
    href: '/contact/',
    image: '📧'
  }
];

export default function InsightsDropdown({ isOpen, onClose }: InsightsDropdownProps) {
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
            {/* Column 1: Knowledge Hub */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {insightsCategories[0].icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-heading mb-2 font-sans">
                    {insightsCategories[0].title}
                  </h3>
                  <p className="text-sm text-text-main mb-4 font-sans">
                    {insightsCategories[0].description}
                  </p>
                  <div className="space-y-2">
                    {insightsCategories[0].links.map((link, index) => (
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

            {/* Column 2: City Guides */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {insightsCategories[1].icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-heading mb-2 font-sans">
                    {insightsCategories[1].title}
                  </h3>
                  <p className="text-sm text-text-main mb-4 font-sans">
                    {insightsCategories[1].description}
                  </p>
                  <div className="space-y-2">
                    {insightsCategories[1].links.map((link, index) => (
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

            {/* Column 3: Tools & Resources */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {insightsCategories[2].icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-heading mb-2 font-sans">
                    {insightsCategories[2].title}
                  </h3>
                  <p className="text-sm text-text-main mb-4 font-sans">
                    {insightsCategories[2].description}
                  </p>
                  <div className="space-y-2">
                    {insightsCategories[2].links.map((link, index) => (
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

            {/* Column 4: Latest Content */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-text-heading mb-4 font-sans">Latest Content</h3>
              {latestContent.map((item, index) => (
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
              href="/insights"
              className="inline-flex items-center text-accent-cyan hover:text-accent-magenta font-semibold transition-colors duration-200 font-sans"
              onClick={onClose}
            >
              Explore All Insights
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
