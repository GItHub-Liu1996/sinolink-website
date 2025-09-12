'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ArticleCard from '@/app/insights/_components/ArticleCard';

export default function InsightsSection() {
  const insights = [
    {
      title: "WFOE Registration: Complete 2025 Guide",
      excerpt: "Everything you need to know about setting up a Wholly Foreign-Owned Enterprise in China, including latest regulatory changes.",
      category: "Legal Guide",
      readTime: "8 min read",
      date: "Sep 12, 2025",
      href: "/insights/blog/wfoe-registration-guide-2025",
      image: "/images/insights/morandi-gradient-1.svg"
    },
    {
      title: "China Tax System: A Foreign Investor's Primer",
      excerpt: "Navigate China's complex tax landscape with our comprehensive guide to corporate tax, VAT, and compliance requirements.",
      category: "Tax & Compliance",
      readTime: "12 min read",
      date: "Sep 10, 2025",
      href: "/insights/blog/chinese-tax-system-primer",
      image: "/images/insights/morandi-gradient-2.svg"
    },
    {
      title: "Choosing the Right Legal Entity for China",
      excerpt: "Compare WFOE, Joint Venture, and Representative Office structures to find the best fit for your business model.",
      category: "Business Strategy",
      readTime: "6 min read",
      date: "Sep 8, 2025",
      href: "/insights/blog/choosing-legal-entity-china",
      image: "/images/insights/morandi-gradient-3.svg"
    },
    {
      title: "HR & Visa Essentials: Work Permits in China",
      excerpt: "Complete guide to obtaining work permits and residence permits for foreign employees in China.",
      category: "HR & Visa",
      readTime: "10 min read",
      date: "Sep 6, 2025",
      href: "/insights/blog/hr-and-visa-essentials-china",
      image: "/images/insights/morandi-gradient-4.svg"
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

        {/* 4-column grid layout using ArticleCard component */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ArticleCard
                category={insight.category}
                title={insight.title}
                excerpt={insight.excerpt}
                image={insight.image}
                readTime={insight.readTime}
                date={insight.date}
                href={insight.href}
                featured={false}
              />
            </motion.div>
          ))}
        </div>

        {/* Read More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/insights"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-accent-cyan to-accent-magenta hover:from-accent-magenta hover:to-accent-cyan text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 font-heading"
          >
            Read More Insights
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}