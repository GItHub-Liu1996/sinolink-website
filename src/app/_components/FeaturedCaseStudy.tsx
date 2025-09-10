'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function FeaturedCaseStudy() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Module Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-6 text-text-heading font-sans">
            Real Clients, Measurable Results.
          </h2>
          <p className="text-lg text-text-main font-body leading-relaxed max-w-3xl mx-auto">
            We don't just provide services; we deliver outcomes. See how we helped a global leader succeed in China.
          </p>
        </motion.div>

        {/* Main Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#1A2130] rounded-2xl p-12 border border-gray-700"
        >
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left Column - Results & Data (40%) */}
            <div className="lg:col-span-2">
              {/* Client Logo Placeholder */}
              <div className="mb-8">
                <div className="w-32 h-16 bg-gray-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">Global Innovations</span>
                </div>
              </div>

              {/* Core Metrics */}
              <div className="space-y-8">
                {/* Metric 1 */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-cyan mb-2 font-sans">
                    <AnimatedCounter end={50} suffix="%" />
                  </div>
                  <div className="text-lg font-semibold text-text-heading mb-1">Faster</div>
                  <div className="text-sm text-text-main font-body">Market Entry</div>
                </div>

                {/* Metric 2 */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-cyan mb-2 font-sans">
                    <AnimatedCounter end={100} suffix="%" />
                  </div>
                  <div className="text-lg font-semibold text-text-heading mb-1">Compliance</div>
                  <div className="text-sm text-text-main font-body">Initial Rate</div>
                </div>

                {/* Metric 3 */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-cyan mb-2 font-sans">
                    <AnimatedCounter end={6} suffix=" Months" />
                  </div>
                  <div className="text-lg font-semibold text-text-heading mb-1">Project</div>
                  <div className="text-sm text-text-main font-body">Timeline</div>
                </div>
              </div>
            </div>

            {/* Right Column - Story & Testimonial (60%) */}
            <div className="lg:col-span-3 space-y-8">
              {/* The Challenge */}
              <div>
                <h3 className="text-2xl font-bold text-text-heading mb-4 font-sans">The Challenge</h3>
                <p className="text-text-main font-body leading-relaxed">
                  Global Innovations Ltd, a leader in financial services, needed to establish a WFOE in Shanghai under a tight deadline to capture a fleeting market opportunity.
                </p>
              </div>

              {/* Our Solution */}
              <div>
                <h3 className="text-2xl font-bold text-text-heading mb-4 font-sans">Our Solution</h3>
                <p className="text-text-main font-body leading-relaxed">
                  Our team provided end-to-end strategic guidance, navigating complex regulatory hurdles and streamlining the entire registration process.
                </p>
              </div>

              {/* Client Testimonial */}
              <div className="bg-background-secondary rounded-xl p-8 border border-gray-600">
                <div className="flex items-start gap-4">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-cyan to-accent-magenta rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                  
                  {/* Testimonial Content */}
                  <div className="flex-1">
                    <blockquote className="text-lg text-text-main italic mb-6 font-body leading-relaxed">
                      "ChinaBiz Solutions transformed our China market entry from a daunting challenge into a smooth, successful launch. Their expertise in WFOE registration and ongoing compliance support allowed us to focus on growing our business rather than navigating bureaucratic complexities."
                    </blockquote>
                    
                    {/* Client Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">SC</span>
                      </div>
                      <div>
                        <div className="text-text-heading font-semibold font-sans">Sarah Chen</div>
                        <div className="text-accent-cyan font-medium text-sm">CEO</div>
                        <div className="text-text-main font-body text-sm">Global Innovations Ltd</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="border-2 border-accent-cyan hover:bg-accent-cyan hover:text-background text-accent-cyan px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
            Explore More Case Studies
          </button>
        </motion.div>
      </div>
    </section>
  );
}
