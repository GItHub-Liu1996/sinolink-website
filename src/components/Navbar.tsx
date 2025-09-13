'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig, navLinks } from '@/config/site';
import MegaMenu from './MegaMenu';
import WhyUsDropdown from './WhyUsDropdown';
import InsightsDropdown from './InsightsDropdown';
import SearchModal from './SearchModal';
import Logo from './Logo';
// Using custom SVG icons instead of Heroicons

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isWhyUsOpen, setIsWhyUsOpen] = useState(false);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // const t = useTranslations('navigation');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
    setIsWhyUsOpen(false);
    setIsInsightsOpen(false);
  };

  const toggleWhyUs = () => {
    setIsWhyUsOpen(!isWhyUsOpen);
    setIsMegaMenuOpen(false);
    setIsInsightsOpen(false);
  };

  const toggleInsights = () => {
    setIsInsightsOpen(!isInsightsOpen);
    setIsMegaMenuOpen(false);
    setIsWhyUsOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center h-24 lg:h-28">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo 
              variant="default" 
              width={250} 
              height={75} 
              className="h-16 lg:h-20 w-auto"
              href="/"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            <div className="flex items-center space-x-8 xl:space-x-10">
              {navLinks.map((link) => (
                <div key={link.href} className="relative group">
                  {link.label === 'Solutions' ? (
                    <button
                      onClick={toggleMegaMenu}
                      className="text-text-heading hover:text-accent-cyan px-3 py-3 text-sm xl:text-base font-medium transition-all duration-300 flex items-center gap-1.5 group tracking-tight"
                    >
                      {link.label}
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                  ) : link.label === 'Why Us' ? (
                    <button
                      onClick={toggleWhyUs}
                      className="text-text-heading hover:text-accent-cyan px-3 py-3 text-sm xl:text-base font-medium transition-all duration-300 flex items-center gap-1.5 group tracking-tight"
                    >
                      {link.label}
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                  ) : link.label === 'Insights' ? (
                    <button
                      onClick={toggleInsights}
                      className="text-text-heading hover:text-accent-cyan px-3 py-3 text-sm xl:text-base font-medium transition-all duration-300 flex items-center gap-1.5 group tracking-tight"
                    >
                      {link.label}
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-text-heading hover:text-accent-cyan px-3 py-3 text-sm xl:text-base font-medium transition-all duration-300 relative group tracking-tight"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cyan group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Search and CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            <button
              onClick={toggleSearch}
              className="p-3 text-text-heading hover:text-accent-cyan hover:bg-gray-50 rounded-lg transition-all duration-300"
              aria-label="Open search"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-accent-cyan to-accent-magenta hover:from-accent-magenta hover:to-accent-cyan text-white px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 border border-transparent hover:border-accent-cyan/20 tracking-tight"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-text-heading hover:text-accent-cyan focus:outline-none focus:text-accent-cyan p-3 rounded-lg hover:bg-gray-50 transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden animate-in slide-in-from-top-2 duration-300">
            <div className="px-4 pt-4 pb-6 space-y-2 border-t border-gray-200 bg-white">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.hasDropdown ? (
                    <div className="space-y-2">
                      <div className="text-text-heading px-4 py-2 text-lg font-semibold">
                        {link.label}
                      </div>
                      {link.label === 'Solutions' && (
                        <div className="pl-6 space-y-2">
                          <Link href="/services" className="text-text-main hover:text-accent-cyan block px-4 py-2 rounded-lg transition-all duration-300">
                            All Services
                          </Link>
                          <Link href="/services/wfoe-registration" className="text-text-main hover:text-accent-cyan block px-4 py-2 rounded-lg transition-all duration-300">
                            WFOE Registration
                          </Link>
                          <Link href="/services/tax-compliance" className="text-text-main hover:text-accent-cyan block px-4 py-2 rounded-lg transition-all duration-300">
                            Tax · Compliance
                          </Link>
                        </div>
                      )}
                      {link.label === 'Why Us' && (
                        <div className="pl-6 space-y-2">
                          <Link href="/about" className="text-text-main hover:text-accent-cyan block px-4 py-2 rounded-lg transition-all duration-300">
                            About Us
                          </Link>
                          <Link href="/case-studies" className="text-text-main hover:text-accent-cyan block px-4 py-2 rounded-lg transition-all duration-300">
                            Case Studies
                          </Link>
                          <Link href="/pricing-process" className="text-text-main hover:text-accent-cyan block px-4 py-2 rounded-lg transition-all duration-300">
                            Pricing · Process
                          </Link>
                        </div>
                      )}
                      {link.label === 'Insights' && (
                        <div className="pl-6 space-y-2">
                          <Link href="/insights" className="text-text-main hover:text-accent-cyan block px-4 py-2 rounded-lg transition-all duration-300">
                            Blog Articles
                          </Link>
                          <Link href="/city-guides" className="text-text-main hover:text-accent-cyan block px-4 py-2 rounded-lg transition-all duration-300">
                            City Guides
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-text-heading hover:text-accent-cyan hover:bg-gray-50 block px-4 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-accent-cyan to-accent-magenta hover:from-accent-magenta hover:to-accent-cyan text-white block px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-300 text-center shadow-sm hover:shadow-md hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Mega Menu */}
      <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
      
      {/* Why Us Dropdown */}
      <WhyUsDropdown isOpen={isWhyUsOpen} onClose={() => setIsWhyUsOpen(false)} />
      
      {/* Insights Dropdown */}
      <InsightsDropdown isOpen={isInsightsOpen} onClose={() => setIsInsightsOpen(false)} />
      
      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </nav>
  );
}
