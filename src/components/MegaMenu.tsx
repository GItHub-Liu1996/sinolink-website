'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const mainSolutions = [
  {
    title: 'Corporate Solutions',
    description: 'Expand and operate your business anywhere in the world.',
    icon: (
      <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center">
        <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>
    ),
    href: '/services'
  },
  {
    title: 'Fund Solutions',
    description: 'Remove friction from your global investment operations.',
    icon: (
      <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center">
        <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>
    ),
    href: '/services'
  },
  {
    title: 'Private Client Solutions',
    description: 'Transition wealth across jurisdictions.',
    icon: (
      <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center">
        <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
    ),
    href: '/services'
  }
];

const serviceCategories = [
  {
    title: 'International Expansion',
    description: 'Expand quickly and compliantly to succeed anywhere.',
    href: '/services/expansion'
  },
  {
    title: 'Global Entity Management',
    description: 'Global entity management services.',
    href: '/services'
  },
  {
    title: 'Tax & Accounting Solutions',
    description: 'Don\'t pay for tax and accounting chaos.',
    href: '/services/tax-compliance'
  },
  {
    title: 'Essential Business',
    description: 'Run a better, more efficient business.',
    href: '/services'
  },
  {
    title: 'Global Employment',
    description: 'Employ, reward and deliver exceptional employee experiences.',
    href: '/services/hr-services'
  },
  {
    title: 'ECCTA',
    description: 'Online ID verification and full ECCTA compliance.',
    href: '/services'
  }
];

const featuredContent = [
  {
    title: 'Careers',
    description: 'View our open positions.',
    href: '/careers',
    image: '👥'
  },
  {
    title: 'News & Insights',
    description: 'Read our latest Insights.',
    href: '/insights',
    image: '📰'
  },
  {
    title: 'View all our Services',
    description: 'Explore our complete service portfolio.',
    href: '/services',
    image: '🔧'
  }
];

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
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
            {/* Column 1: Main Solutions */}
            <div className="space-y-6">
              {mainSolutions.map((solution, index) => (
                <Link
                  key={index}
                  href={solution.href}
                  className="block group"
                  onClick={onClose}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {solution.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-text-heading mb-2 group-hover:text-accent-cyan transition-colors duration-300">
                        {solution.title}
                      </h3>
                      <p className="text-sm text-text-main leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-accent-cyan transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Column 2: Services */}
            <div className="space-y-4">
              {serviceCategories.slice(0, 3).map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="block group"
                  onClick={onClose}
                >
                  <h4 className="text-base font-semibold text-text-heading mb-1 group-hover:text-accent-cyan transition-colors duration-200">
                    {service.title}
                  </h4>
                  <p className="text-sm text-text-main leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>

            {/* Column 3: More Services */}
            <div className="space-y-4">
              {serviceCategories.slice(3).map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="block group"
                  onClick={onClose}
                >
                  <h4 className="text-base font-semibold text-text-heading mb-1 group-hover:text-accent-cyan transition-colors duration-200">
                    {service.title}
                  </h4>
                  <p className="text-sm text-text-main leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>

            {/* Column 4: Featured Content */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-text-heading mb-4">Featured Content</h3>
              {featuredContent.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block group p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  onClick={onClose}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-xl">{item.image}</div>
                    <div>
                      <h4 className="text-sm font-semibold text-text-heading group-hover:text-accent-cyan transition-colors duration-200">
                        {item.title}
                      </h4>
                      <p className="text-xs text-text-main">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Bottom Link */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link
              href="/services"
              className="inline-flex items-center text-accent-cyan hover:text-accent-magenta font-semibold transition-colors duration-200"
              onClick={onClose}
            >
              Corporate Solutions Overview
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