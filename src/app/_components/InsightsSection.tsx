'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { lazy, Suspense } from 'react';

export default function InsightsSection() {
  const insights = [
    {
      title: "WFOE Registration: Complete 2025 Guide",
      excerpt: "Everything you need to know about setting up a Wholly Foreign-Owned Enterprise in China, including latest regulatory changes.",
      category: "Legal Guide",
      readTime: "8 min read",
      date: "Sep 12, 2025",
      href: "/insights/blog/wfoe-registration-guide-2025",
      image: "/images/insights/morandi-gradient-1.svg",
      color: "accent-cyan",
      type: "blog"
    },
    {
      title: "China Tax System: A Foreign Investor's Primer",
      excerpt: "Navigate China's complex tax landscape with our comprehensive guide to corporate tax, VAT, and compliance requirements.",
      category: "Tax & Compliance",
      readTime: "12 min read",
      date: "Sep 10, 2025",
      href: "/insights/blog/chinese-tax-system-primer",
      image: "/images/insights/morandi-gradient-2.svg",
      color: "accent-magenta",
      type: "blog"
    },
    {
      title: "Choosing the Right Legal Entity for China",
      excerpt: "Compare WFOE, Joint Venture, and Representative Office structures to find the best fit for your business model.",
      category: "Business Strategy",
      readTime: "6 min read",
      date: "Sep 8, 2025",
      href: "/insights/blog/choosing-legal-entity-china",
      image: "/images/insights/morandi-gradient-3.svg",
      color: "accent-orange",
      type: "blog"
    },
    {
      title: "HR & Visa Essentials: Work Permits in China",
      excerpt: "Complete guide to obtaining work permits and residence permits for foreign employees in China.",
      category: "HR & Visa",
      readTime: "10 min read",
      date: "Sep 6, 2025",
      href: "/insights/blog/hr-and-visa-essentials-china",
      image: "/images/insights/morandi-gradient-4.svg",
      color: "accent-cyan",
      type: "blog"
    },
    {
      title: "Intellectual Property Protection in China",
      excerpt: "Protect your valuable IP assets with our comprehensive guide covering trademarks, patents, and copyrights.",
      category: "Growth & Strategy",
      readTime: "15 min read",
      date: "Sep 4, 2025",
      href: "/insights/blog/intellectual-property-protection-china",
      image: "/images/insights/morandi-gradient-5.svg",
      color: "accent-magenta",
      type: "blog"
    },
    {
      title: "Financial Outsourcing Benefits in China",
      excerpt: "Discover the advantages of financial outsourcing for your China business operations.",
      category: "Operations",
      readTime: "7 min read",
      date: "Sep 2, 2025",
      href: "/insights/blog/financial-outsourcing-benefits-china",
      image: "/images/insights/morandi-gradient-6.svg",
      color: "accent-orange",
      type: "blog"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent-cyan/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent-magenta/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-4 md:mb-6 font-heading">
            News & Insights
          </h2>
          <p className="text-lg md:text-xl text-text-main font-body leading-relaxed max-w-3xl mx-auto">
            Cut through the complexities of China business with local insight and global expertise.
          </p>
        </motion.div>

        {/* Vistra-style grid layout - 2x4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full">
                {/* Gradient image header */}
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={insight.image}
                    alt={`${insight.category} gradient background`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                {/* Content area */}
                <div className="p-6">
                  {/* Category badge */}
                  <div className="mb-3">
                    <span className={`inline-block bg-${insight.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                      {insight.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-text-heading mb-3 font-heading line-clamp-2 group-hover:text-accent-cyan transition-colors duration-300">
                    {insight.title}
                  </h3>
                  
                  {/* Meta information */}
                  <div className="flex items-center justify-between text-sm text-text-muted mb-4 font-body">
                    <span>{insight.readTime}</span>
                    <span>{insight.date}</span>
                  </div>
                  
                  {/* Read more button */}
                  <Link
                    href={insight.href}
                    className={`inline-flex items-center gap-2 text-${insight.color} font-semibold hover:text-${insight.color}/80 transition-colors duration-300 text-sm`}
                  >
                    {insight.type === 'blog' ? 'Read Full Article' : insight.type === 'case-study' ? 'View Case Details' : 'Learn More'}
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA - Wave design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="relative">
            {/* Wave background */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 via-accent-magenta/10 to-accent-orange/10 rounded-3xl transform rotate-1"></div>
            <div className="relative bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-xl">
              <h3 className="text-2xl font-bold text-text-heading mb-4 font-heading">
                Stay Ahead of China Business Trends
              </h3>
              <p className="text-text-main mb-6 font-body">
                Get exclusive insights, regulatory updates, and market analysis delivered to your inbox.
              </p>
              <Link
                href="/insights"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-accent-cyan to-accent-magenta text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-accent-magenta hover:to-accent-cyan transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 font-heading"
              >
                Explore All Insights
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}