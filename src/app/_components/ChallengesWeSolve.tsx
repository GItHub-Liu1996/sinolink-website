'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ChallengesWeSolve() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const challenges = [
    {
      title: "Regulatory Maze",
      description: "Navigating China's complex regulatory environment can be overwhelming for foreign investors. With constantly evolving policies, multiple government departments, and intricate compliance requirements, businesses often struggle to understand and meet all necessary obligations. Our experts stay current with the latest regulatory changes and guide you through every requirement, ensuring full compliance while minimizing administrative burden.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Financial Compliance",
      description: "China's financial regulations require meticulous attention to detail, from tax registration and reporting to foreign exchange controls and banking requirements. Many international companies face challenges with VAT compliance, transfer pricing regulations, and the complexities of China's tax system. Our financial experts provide comprehensive support, ensuring your business meets all tax obligations while optimizing your financial structure for maximum efficiency.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: "Operational Hurdles",
      description: "From HR management and payroll processing to office setup and local partnerships, operating a business in China presents unique challenges. Cultural differences, language barriers, and local business practices can create significant obstacles. Our operational support services help you establish efficient processes, build strong local relationships, and create a sustainable business model that thrives in the Chinese market environment.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-text-heading font-sans">
              Anticipate Challenges Before They Become Problems.
            </h2>
            <p className="text-lg text-text-main font-body leading-relaxed max-w-3xl mx-auto">
              Understanding the obstacles you face is the first step toward overcoming them. 
              Here are the most common challenges foreign investors encounter in China.
            </p>
          </motion.div>

        <div className="space-y-4">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background-secondary rounded-lg border border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-cyan to-accent-magenta rounded-lg flex items-center justify-center text-white">
                    {challenge.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-text-heading font-sans">
                    {challenge.title}
                  </h3>
                </div>
                
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-text-main"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <div className="pt-4 border-t border-gray-700">
                        <p className="text-text-main font-body leading-relaxed">
                          {challenge.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
