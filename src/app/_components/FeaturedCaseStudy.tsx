'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function FeaturedCaseStudy() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-background-primary via-background-secondary to-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Module Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6 text-text-heading font-heading leading-tight">
            Proven Results, Real Impact
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-main font-body leading-relaxed max-w-3xl mx-auto">
            See how we've helped businesses establish and operate successfully in China with our comprehensive support services.
          </p>
        </motion.div>

        {/* Creative timeline design */}
        <div className="relative">
          {/* Central timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 sm:w-1 h-full bg-gradient-to-b from-accent-cyan via-accent-magenta to-accent-orange rounded-full"></div>
          
          {/* Timeline nodes */}
          <div className="space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-8">
            {/* Node 1 - Left side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ margin: "-100px" }}
              className="relative flex items-center"
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-accent-cyan rounded-full border-2 sm:border-4 border-white shadow-lg z-10"></div>
              
              {/* Content card - Left side */}
              <div className="w-full sm:w-5/12 ml-auto pr-4 sm:pr-8">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-accent-cyan/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent-cyan to-accent-magenta rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-text-heading font-heading">TechGlobal Solutions</h3>
                      <p className="text-accent-cyan font-semibold font-body text-xs sm:text-sm">Technology Services</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-accent-cyan font-heading">2.5</div>
                      <div className="text-xs text-text-main font-body">Months</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-green-500 font-heading">$15K</div>
                      <div className="text-xs text-text-main font-body">Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-accent-magenta font-heading">100%</div>
                      <div className="text-xs text-text-main font-body">Compliant</div>
                    </div>
                  </div>
                  
                  <blockquote className="text-text-main italic font-body text-xs sm:text-sm">
                    "Complete WFOE registration and compliance setup completed efficiently with zero regulatory issues."
                  </blockquote>
                </div>
              </div>
            </motion.div>

            {/* Node 2 - Right side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ margin: "-100px" }}
              className="relative flex items-center"
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-accent-magenta rounded-full border-2 sm:border-4 border-white shadow-lg z-10"></div>
              
              {/* Content card - Right side */}
              <div className="w-full sm:w-5/12 mr-auto pl-4 sm:pl-8">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-accent-magenta/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent-magenta to-accent-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-text-heading font-heading">EcoTech Industries</h3>
                      <p className="text-accent-magenta font-semibold font-body text-xs sm:text-sm">Manufacturing</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-accent-cyan font-heading">4</div>
                      <div className="text-xs text-text-main font-body">Months</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-green-500 font-heading">$25K</div>
                      <div className="text-xs text-text-main font-body">Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-accent-magenta font-heading">100%</div>
                      <div className="text-xs text-text-main font-body">Compliant</div>
                    </div>
                  </div>
                  
                  <blockquote className="text-text-main italic font-body text-xs sm:text-sm">
                    "Comprehensive manufacturing license setup and ongoing compliance support ensured smooth operations."
                  </blockquote>
                </div>
              </div>
            </motion.div>

            {/* Node 3 - Left side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ margin: "-100px" }}
              className="relative flex items-center"
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-accent-orange rounded-full border-2 sm:border-4 border-white shadow-lg z-10"></div>
              
              {/* Content card - Left side */}
              <div className="w-full sm:w-5/12 ml-auto pr-4 sm:pr-8">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-accent-orange/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent-orange to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-text-heading font-heading">Global Innovations</h3>
                      <p className="text-accent-orange font-semibold font-body text-xs sm:text-sm">Financial Services</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-accent-cyan font-heading">3</div>
                      <div className="text-xs text-text-main font-body">Months</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-green-500 font-heading">$20K</div>
                      <div className="text-xs text-text-main font-body">Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-accent-magenta font-heading">100%</div>
                      <div className="text-xs text-text-main font-body">Compliant</div>
                    </div>
                  </div>
                  
                  <blockquote className="text-text-main italic font-body text-xs sm:text-sm">
                    "Complex financial licensing and compliance setup completed with expert guidance and ongoing support."
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom statistics - Enhanced design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ margin: "-100px" }}
          className="mt-6 sm:mt-8 lg:mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 bg-gradient-to-r from-white via-gray-50 to-white rounded-2xl sm:rounded-3xl lg:rounded-[2rem] p-4 sm:p-6 lg:p-8 border-2 border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent-cyan font-heading mb-1">98%</div>
              <div className="text-xs sm:text-sm lg:text-base text-text-main font-body font-medium">Success Rate</div>
            </div>
            <div className="hidden sm:block w-px h-8 sm:h-12 lg:h-16 bg-gradient-to-b from-gray-300 to-gray-400"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent-magenta font-heading mb-1">200+</div>
              <div className="text-xs sm:text-sm lg:text-base text-text-main font-body font-medium">Companies</div>
            </div>
            <div className="hidden sm:block w-px h-8 sm:h-12 lg:h-16 bg-gradient-to-b from-gray-300 to-gray-400"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent-orange font-heading mb-1">15+</div>
              <div className="text-xs sm:text-sm lg:text-base text-text-main font-body font-medium">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}