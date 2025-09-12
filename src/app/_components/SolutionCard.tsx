'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  overviewText: string;
  services: string[];
}

export default function SolutionCard({ icon, title, overviewText, services }: SolutionCardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'services'>('overview');

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 h-full border-2 border-gray-200 hover:border-accent-primary transition-all duration-300 hover:shadow-2xl hover:shadow-accent-primary/20 hover:-translate-y-2 group">
      {/* Icon and Title */}
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-accent-cyan to-accent-magenta rounded-lg flex items-center justify-center text-white flex-shrink-0">
          {icon}
        </div>
        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-text-heading font-sans leading-tight">{title}</h3>
      </div>

      {/* Overview Text */}
      <p className="text-xs sm:text-sm lg:text-base text-text-body mb-3 sm:mb-4 leading-relaxed">{overviewText}</p>

      {/* Tab Buttons */}
      <div className="flex gap-1 sm:gap-2 mb-3 sm:mb-4">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
            activeTab === 'overview'
              ? 'bg-gradient-to-r from-accent-cyan to-accent-magenta text-white shadow-lg'
              : 'border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-background-primary'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('services')}
          className={`px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
            activeTab === 'services'
              ? 'bg-gradient-to-r from-accent-cyan to-accent-magenta text-white shadow-lg'
              : 'border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-background-primary'
          }`}
        >
          Key Services
        </button>
      </div>

      {/* Content Area with Animation */}
      <div className="min-h-[60px] sm:min-h-[80px] lg:min-h-[100px]">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' ? (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-xs sm:text-sm lg:text-base text-text-body leading-relaxed"
            >
              <p>
                Comprehensive business setup with precision and care, tailored to your goals and regulatory requirements.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="space-y-1 sm:space-y-2">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-1.5 sm:gap-2"
                  >
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-accent-cyan rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm lg:text-base text-text-body leading-relaxed">{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
