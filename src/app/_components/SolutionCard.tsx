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
    <div className="bg-background-secondary rounded-2xl p-6 sm:p-8 h-full border border-gray-700 hover:border-accent-cyan transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/10">
      {/* Icon and Title */}
      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent-cyan to-accent-magenta rounded-lg flex items-center justify-center text-white flex-shrink-0">
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-text-heading font-sans leading-tight">{title}</h3>
      </div>

      {/* Overview Text */}
      <p className="text-sm sm:text-base text-text-body mb-4 sm:mb-6 leading-relaxed">{overviewText}</p>

      {/* Tab Buttons */}
      <div className="flex gap-2 mb-4 sm:mb-6">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
            activeTab === 'overview'
              ? 'bg-accent-cyan text-white'
              : 'bg-gray-700 text-text-body hover:bg-gray-600'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('services')}
          className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
            activeTab === 'services'
              ? 'bg-accent-cyan text-white'
              : 'bg-gray-700 text-text-body hover:bg-gray-600'
          }`}
        >
          Key Services
        </button>
      </div>

      {/* Content Area with Animation */}
      <div className="min-h-[100px] sm:min-h-[120px]">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' ? (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-sm sm:text-base text-text-body leading-relaxed"
            >
              <p>
                Our comprehensive approach ensures every aspect of your business setup is handled with precision and care. 
                We understand the unique challenges of establishing operations in China and provide tailored solutions 
                that align with your business goals and regulatory requirements.
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
              <ul className="space-y-2 sm:space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-2 sm:gap-3"
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-accent-cyan rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white"
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
                    <span className="text-sm sm:text-base text-text-body leading-relaxed">{service}</span>
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
