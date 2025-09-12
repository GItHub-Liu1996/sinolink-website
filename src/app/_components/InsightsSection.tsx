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
      color: "accent-cyan",
      icon: "📋"
    },
    {
      title: "China Tax System: A Foreign Investor's Primer",
      excerpt: "Navigate China's complex tax landscape with our comprehensive guide to corporate tax, VAT, and compliance requirements.",
      category: "Tax & Compliance",
      readTime: "12 min read",
      date: "Sep 10, 2025",
      href: "/insights/blog/chinese-tax-system-primer",
      color: "accent-magenta",
      icon: "💰"
    },
    {
      title: "Choosing the Right Legal Entity for China",
      excerpt: "Compare WFOE, Joint Venture, and Representative Office structures to find the best fit for your business model.",
      category: "Business Strategy",
      readTime: "6 min read",
      date: "Sep 8, 2025",
      href: "/insights/blog/choosing-legal-entity-china",
      color: "accent-orange",
      icon: "🏢"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background-secondary relative overflow-hidden">
      {/* 背景装饰 */}
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

        {/* 创意瀑布流布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : 
                index === 1 ? 'md:col-span-1 lg:col-span-1' : 
                'md:col-span-1 lg:col-span-1'
              }`}
            >
              <div className={`bg-white rounded-3xl p-8 border-2 border-${insight.color}/20 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 group h-full`}>
                {/* 图标和分类 */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${insight.color} to-${insight.color}/80 rounded-2xl flex items-center justify-center text-2xl`}>
                    {insight.icon}
                  </div>
                  <div className={`inline-block bg-gradient-to-r from-${insight.color} to-${insight.color}/80 text-white px-4 py-2 rounded-full text-sm font-semibold font-body`}>
                    {insight.category}
                  </div>
                </div>
                
                {/* 标题 */}
                <h3 className={`text-xl font-bold text-text-heading mb-4 font-heading group-hover:text-${insight.color} transition-colors duration-300`}>
                  {insight.title}
                </h3>
                
                {/* 摘要 */}
                <p className="text-text-main mb-6 font-body leading-relaxed">
                  {insight.excerpt}
                </p>
                
                {/* 元信息 */}
                <div className="flex items-center justify-between text-sm text-text-main mb-6 font-body">
                  <span>{insight.readTime}</span>
                  <span>{insight.date}</span>
                </div>
                
                {/* 阅读更多按钮 */}
                <Link
                  href={insight.href}
                  className={`inline-flex items-center gap-2 text-${insight.color} font-semibold hover:text-${insight.color}/80 transition-colors duration-300 font-body`}
                >
                  {insight.type === 'blog' ? '阅读完整文章' : insight.type === 'case-study' ? '查看案例详情' : '了解更多'}
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* 底部CTA - 波浪形设计 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="relative">
            {/* 波浪背景 */}
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