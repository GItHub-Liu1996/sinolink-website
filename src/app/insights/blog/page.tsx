'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Blog post data
const blogPosts = [
  {
    slug: 'wfoe-registration-guide-china-2025',
    title: 'The Ultimate Guide to WFOE Registration in China (2025 Edition)',
    excerpt: 'A comprehensive, step-by-step guide for foreign investors on how to register a Wholly Foreign-Owned Enterprise (WFOE) in China.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f',
    category: 'Market Entry',
    date: 'September 9, 2025',
    readTime: '12 min read'
  },
  {
    slug: 'china-business-structures-comparison',
    title: 'Joint Ventures vs WFOE: Which Structure is Right for Your Business?',
    excerpt: 'A detailed comparison of different business structures available to foreign investors in China.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
    category: 'Market Entry',
    date: 'August 15, 2025',
    readTime: '8 min read'
  },
  {
    slug: 'china-tax-system-primer',
    title: 'Decoding the Chinese Tax System: A Primer for Foreign Enterprises',
    excerpt: 'Understanding China\'s complex tax landscape and compliance requirements for foreign companies.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c',
    category: 'Operations & Compliance',
    date: 'August 20, 2025',
    readTime: '10 min read'
  },
  {
    slug: 'china-bank-account-opening-guide',
    title: 'Bank Account Opening in China: A Step-by-Step Guide',
    excerpt: 'Everything you need to know about opening corporate bank accounts in China.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
    category: 'Operations & Compliance',
    date: 'August 25, 2025',
    readTime: '6 min read'
  },
  {
    slug: 'china-hr-visa-guide',
    title: 'Work Permits and Residence Permits: A Complete Guide for Foreign Employees',
    excerpt: 'Navigate the complex process of obtaining work permits and residence permits for foreign employees in China.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902',
    category: 'HR & Visa',
    date: 'August 30, 2025',
    readTime: '9 min read'
  },
  {
    slug: 'china-ip-protection-guide',
    title: 'Intellectual Property Protection in China: What Foreign Companies Need to Know',
    excerpt: 'Essential strategies for protecting your intellectual property when doing business in China.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85',
    category: 'Growth & Strategy',
    date: 'September 2, 2025',
    readTime: '11 min read'
  }
];

// Category filtering
const categories = ['All', 'Market Entry', 'Operations & Compliance', 'HR & Visa', 'Growth & Strategy'];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-background-secondary py-16"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text-heading mb-6 font-sans">
            Blog & Insights
          </h1>
          <p className="text-xl text-text-main font-body leading-relaxed">
            Stay informed with our latest insights on doing business in China
          </p>
        </div>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-8"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="px-6 py-3 rounded-full border border-gray-700 text-text-main hover:text-accent-cyan hover:border-accent-cyan transition-all duration-200 font-medium"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Article List */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-background-secondary rounded-2xl overflow-hidden border border-gray-700 hover:border-accent-cyan transition-all duration-300 group"
              >
                <Link href={`/insights/blog/${post.slug}`}>
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent-cyan text-background px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-text-heading mb-3 font-sans line-clamp-2 group-hover:text-accent-cyan transition-colors duration-200">
                      {post.title}
                    </h2>
                    <p className="text-text-main font-body leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-text-main">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="mt-4 inline-flex items-center space-x-2 text-accent-cyan hover:text-accent-magenta font-semibold transition-colors duration-300">
                      <span>Read More</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Subscription Module */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-background-secondary py-16"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text-heading mb-6 font-sans">
            Stay Updated
          </h2>
          <p className="text-xl text-text-main mb-8 font-body">
            Get the latest insights and updates delivered straight to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-700 bg-background text-text-main placeholder-text-main focus:outline-none focus:border-accent-cyan transition-colors duration-200"
            />
            <button className="bg-gradient-to-r from-accent-cyan to-accent-magenta hover:brightness-110 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
