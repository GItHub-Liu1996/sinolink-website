'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
// Using custom SVG icons instead of Heroicons

interface SearchResult {
  title: string;
  description: string;
  href: string;
  type: 'page' | 'service' | 'blog' | 'insight';
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Mock search data - in a real app, this would come from an API or search index
const searchData: SearchResult[] = [
  // Pages
  { title: 'Home', description: 'Main homepage with company overview', href: '/', type: 'page' },
  { title: 'About Us', description: 'Learn about our team and expertise', href: '/about', type: 'page' },
  { title: 'Contact', description: 'Get in touch with our team', href: '/contact', type: 'page' },
  
  // Services
  { title: 'WFOE Registration', description: 'Complete company formation in China', href: '/services/wfoe-registration', type: 'service' },
  { title: 'Tax Compliance', description: 'Ongoing tax management and compliance', href: '/services/tax-compliance', type: 'service' },
  { title: 'HR Services', description: 'Human resources management and support', href: '/services/hr-services', type: 'service' },
  { title: 'Bank Account Opening', description: 'Corporate banking setup in China', href: '/services/corporate-bank-account-opening-china', type: 'service' },
  { title: 'Visa Services', description: 'Work permits and visa processing', href: '/services/visa-services', type: 'service' },
  { title: 'Legal Support', description: 'Legal advisory and compliance services', href: '/services/legal-support', type: 'service' },
  { title: 'Market Research', description: 'Market intelligence and analysis', href: '/services/market-research', type: 'service' },
  { title: 'Strategic Consulting', description: 'Business growth and strategy consulting', href: '/services/consulting', type: 'service' },
  
  // Blog/Insights
  { title: 'Chinese Tax System Primer', description: 'Understanding China\'s tax landscape', href: '/insights/blog/chinese-tax-system-primer', type: 'blog' },
  { title: 'WFOE Registration Guide 2025', description: 'Complete guide to WFOE registration', href: '/insights/blog/wfoe-registration-guide-2025', type: 'blog' },
  { title: 'HR and Visa Essentials', description: 'Essential HR and visa information for China', href: '/insights/blog/hr-and-visa-essentials-china', type: 'blog' },
  { title: 'Intellectual Property Protection', description: 'Protecting your IP in China', href: '/insights/blog/intellectual-property-protection-china', type: 'blog' },
  { title: 'Cross-Border Funds Flow', description: 'Managing international money transfers', href: '/insights/blog/cross-border-funds-flow-china', type: 'blog' },
];

const typeIcons = {
  page: '📄',
  service: '🛠️',
  blog: '📝',
  insight: '💡',
};

const typeLabels = {
  page: 'Page',
  service: 'Service',
  blog: 'Blog',
  insight: 'Insight',
};

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Search functionality
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered.slice(0, 8)); // Limit to 8 results
    setSelectedIndex(0);
  }, [query]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && results.length > 0) {
      e.preventDefault();
      const selectedResult = results[selectedIndex];
      if (selectedResult) {
        window.location.href = selectedResult.href;
        onClose();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  // Scroll selected result into view
  useEffect(() => {
    if (resultsRef.current && selectedIndex >= 0) {
      const selectedElement = resultsRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Search Input */}
            <div className="flex items-center px-6 py-4 border-b border-gray-200">
              <svg className="h-6 w-6 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search services, insights, and more..."
                className="flex-1 text-lg text-gray-900 placeholder-gray-500 outline-none"
              />
              <button
                onClick={onClose}
                className="ml-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close search"
              >
                <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Search Results */}
            {query.trim() !== '' && (
              <div className="max-h-96 overflow-y-auto" ref={resultsRef}>
                {results.length > 0 ? (
                  <div className="py-2">
                    {results.map((result, index) => (
                      <motion.div
                        key={`${result.href}-${index}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <Link
                          href={result.href}
                          onClick={onClose}
                          className={`block px-6 py-4 hover:bg-gray-50 transition-colors ${
                            index === selectedIndex ? 'bg-blue-50 border-r-4 border-blue-500' : ''
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className="text-2xl">{typeIcons[result.type]}</div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2">
                                <h3 className="text-lg font-semibold text-gray-900 truncate">
                                  {result.title}
                                </h3>
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                                  {typeLabels[result.type]}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                {result.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="px-6 py-8 text-center">
                    <div className="text-4xl mb-4">🔍</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
                    <p className="text-gray-600">Try searching for services, insights, or company information.</p>
                  </div>
                )}
              </div>
            )}

            {/* Quick Links */}
            {query.trim() === '' && (
              <div className="p-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/services"
                    onClick={onClose}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-2xl">🛠️</div>
                    <div>
                      <div className="font-medium text-gray-900">All Services</div>
                      <div className="text-sm text-gray-600">Browse our services</div>
                    </div>
                  </Link>
                  <Link
                    href="/insights"
                    onClick={onClose}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-2xl">📝</div>
                    <div>
                      <div className="font-medium text-gray-900">Insights</div>
                      <div className="text-sm text-gray-600">Latest articles</div>
                    </div>
                  </Link>
                  <Link
                    href="/about"
                    onClick={onClose}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-2xl">👥</div>
                    <div>
                      <div className="font-medium text-gray-900">About Us</div>
                      <div className="text-sm text-gray-600">Our team</div>
                    </div>
                  </Link>
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-2xl">📞</div>
                    <div>
                      <div className="font-medium text-gray-900">Contact</div>
                      <div className="text-sm text-gray-600">Get in touch</div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
