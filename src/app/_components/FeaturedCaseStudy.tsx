'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function FeaturedCaseStudy() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background-primary via-background-secondary to-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Module Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6 text-text-heading font-heading leading-tight">
            Proven Results, Real Impact
          </h2>
          <p className="text-lg md:text-xl text-text-main font-body leading-relaxed max-w-3xl mx-auto">
            See how we've transformed businesses across industries with measurable, lasting results.
          </p>
        </motion.div>

        {/* 创意时间线设计 */}
        <div className="relative">
          {/* 中央时间线 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-cyan via-accent-magenta to-accent-orange rounded-full"></div>
          
          {/* 时间线节点 */}
          <div className="space-y-16">
            {/* 节点1 - 左侧 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-center"
            >
              {/* 时间线圆点 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent-cyan rounded-full border-4 border-white shadow-lg z-10"></div>
              
              {/* 内容卡片 - 左侧 */}
              <div className="w-5/12 ml-auto pr-8">
                <div className="bg-white rounded-2xl p-8 border-2 border-accent-cyan/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan to-accent-magenta rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-text-heading font-heading">TechGlobal Solutions</h3>
                      <p className="text-accent-cyan font-semibold font-body">SaaS Technology Leader</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent-cyan font-heading">2.5</div>
                      <div className="text-sm text-text-main font-body">Months</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-500 font-heading">$180K</div>
                      <div className="text-sm text-text-main font-body">Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent-magenta font-heading">$2.1M</div>
                      <div className="text-sm text-text-main font-body">Revenue</div>
                    </div>
                  </div>
                  
                  <blockquote className="text-text-main italic font-body">
                    "ChinaBiz helped us launch 6 months ahead of schedule, generating $2.1M in first-year revenue."
                  </blockquote>
                </div>
              </div>
            </motion.div>

            {/* 节点2 - 右侧 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative flex items-center"
            >
              {/* 时间线圆点 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent-magenta rounded-full border-4 border-white shadow-lg z-10"></div>
              
              {/* 内容卡片 - 右侧 */}
              <div className="w-5/12 mr-auto pl-8">
                <div className="bg-white rounded-2xl p-8 border-2 border-accent-magenta/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-magenta to-accent-orange rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-text-heading font-heading">EcoTech Industries</h3>
                      <p className="text-accent-magenta font-semibold font-body">Manufacturing Excellence</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent-cyan font-heading">4</div>
                      <div className="text-sm text-text-main font-body">Months</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-500 font-heading">$320K</div>
                      <div className="text-sm text-text-main font-body">Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent-magenta font-heading">+150%</div>
                      <div className="text-sm text-text-main font-body">Capacity</div>
                    </div>
                  </div>
                  
                  <blockquote className="text-text-main italic font-body">
                    "Their expertise in manufacturing regulations saved us $320K in compliance costs."
                  </blockquote>
                </div>
              </div>
            </motion.div>

            {/* 节点3 - 左侧 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative flex items-center"
            >
              {/* 时间线圆点 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent-orange rounded-full border-4 border-white shadow-lg z-10"></div>
              
              {/* 内容卡片 - 左侧 */}
              <div className="w-5/12 ml-auto pr-8">
                <div className="bg-white rounded-2xl p-8 border-2 border-accent-orange/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-orange to-yellow-500 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-text-heading font-heading">Global Innovations</h3>
                      <p className="text-accent-orange font-semibold font-body">Financial Services</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent-cyan font-heading">3</div>
                      <div className="text-sm text-text-main font-body">Months</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-500 font-heading">$450K</div>
                      <div className="text-sm text-text-main font-body">Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent-magenta font-heading">+25%</div>
                      <div className="text-sm text-text-main font-body">Market Share</div>
                    </div>
                  </div>
                  
                  <blockquote className="text-text-main italic font-body">
                    "Complex financial regulations handled flawlessly. We're now market leaders in Shanghai."
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 底部统计 - 六边形设计 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-8 bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-2xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-cyan font-heading">340%</div>
              <div className="text-sm text-text-main font-body">Average ROI</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-magenta font-heading">98%</div>
              <div className="text-sm text-text-main font-body">Success Rate</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-orange font-heading">500+</div>
              <div className="text-sm text-text-main font-body">Companies</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}