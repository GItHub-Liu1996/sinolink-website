'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-text-heading mb-6 font-sans"
          >
            Your Ambition, Our Mission.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-main font-body leading-relaxed"
          >
            We were founded on a simple principle: to be the most trusted bridge for ambitious global companies entering the complex China market.
          </motion.p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-heading mb-6 font-sans">
              Our Core Values
            </h2>
            <p className="text-lg text-text-main font-body leading-relaxed max-w-3xl mx-auto">
              These principles guide everything we do and shape how we serve our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Integrity Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 border border-gray-700 hover:border-accent-cyan transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan to-accent-magenta rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-heading mb-4 font-sans">
                Integrity
              </h3>
              <p className="text-text-main font-body leading-relaxed">
                Your trust is our foundation. We operate with unwavering transparency and ethical standards.
              </p>
            </motion.div>

            {/* Expertise Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 border border-gray-700 hover:border-accent-cyan transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan to-accent-magenta rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-heading mb-4 font-sans">
                Expertise
              </h3>
              <p className="text-text-main font-body leading-relaxed">
                Deep knowledge, delivered with clarity. We turn complex regulations into actionable strategies.
              </p>
            </motion.div>

            {/* Partnership Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 border border-gray-700 hover:border-accent-cyan transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan to-accent-magenta rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-heading mb-4 font-sans">
                Partnership
              </h3>
              <p className="text-text-main font-body leading-relaxed">
                We succeed when you succeed. We act as an extension of your team to achieve shared goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-heading mb-6 font-sans">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-text-main font-body leading-relaxed max-w-3xl mx-auto">
              Our experienced leaders bring deep expertise and a shared vision for your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Leader 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-48 h-48 bg-gradient-to-br from-accent-cyan to-accent-magenta rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Sarah Chen</span>
              </div>
              <h3 className="text-2xl font-bold text-text-heading mb-2 font-sans">
                Sarah Chen
              </h3>
              <p className="text-accent-cyan font-semibold mb-4 text-lg">
                Founder & CEO
              </p>
              <p className="text-text-main font-body leading-relaxed">
                With 15 years of experience in international business law and Chinese corporate regulations, Sarah founded ChinaBiz Solutions to help foreign companies navigate the complexities of the Chinese market. She holds a JD from Harvard Law School and an MBA from Tsinghua University.
              </p>
            </motion.div>

            {/* Leader 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-48 h-48 bg-gradient-to-br from-accent-cyan to-accent-magenta rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Michael Zhang</span>
              </div>
              <h3 className="text-2xl font-bold text-text-heading mb-2 font-sans">
                Michael Zhang
              </h3>
              <p className="text-accent-cyan font-semibold mb-4 text-lg">
                Operations Director
              </p>
              <p className="text-text-main font-body leading-relaxed">
                Michael brings over 12 years of experience in Chinese business operations and regulatory compliance. Previously working with multinational corporations, he specializes in streamlining business processes and ensuring seamless operations for our international clients.
              </p>
            </motion.div>
          </div>

          <div className="text-center">
            <Link
              href="/about/team"
              className="inline-flex items-center bg-gradient-to-r from-accent-cyan to-accent-magenta hover:from-accent-magenta hover:to-accent-cyan text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-500 shadow-lg hover:shadow-xl"
            >
              Meet The Entire Team
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-heading mb-6 font-sans">
              Our Impact
            </h2>
            <p className="text-lg text-text-main font-body leading-relaxed max-w-3xl mx-auto">
              Numbers that tell the story of our commitment to excellence and client success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Statistics */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-5xl font-bold text-accent-cyan mb-2 font-sans"
                >
                  <AnimatedCounter end={15} suffix="+" />
                </motion.div>
                <div className="text-lg font-semibold text-text-heading mb-1">Years of Combined Experience</div>
                <div className="text-sm text-text-main font-body">Deep expertise across all aspects of China business</div>
              </div>

              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-5xl font-bold text-accent-cyan mb-2 font-sans"
                >
                  <AnimatedCounter end={500} suffix="+" />
                </motion.div>
                <div className="text-lg font-semibold text-text-heading mb-1">Companies Successfully Established</div>
                <div className="text-sm text-text-main font-body">From startups to Fortune 500 companies</div>
              </div>

              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-5xl font-bold text-accent-cyan mb-2 font-sans"
                >
                  <AnimatedCounter end={98} suffix="%" />
                </motion.div>
                <div className="text-lg font-semibold text-text-heading mb-1">Client Retention Rate</div>
                <div className="text-sm text-text-main font-body">Long-term partnerships built on trust and results</div>
              </div>
            </motion.div>

            {/* Right Column - Case Study Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                href="/about/cases"
                className="block bg-background rounded-2xl p-8 border border-gray-700 hover:border-accent-cyan transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan to-accent-magenta rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-heading mb-4 font-sans group-hover:text-accent-cyan transition-colors duration-200">
                  Our Expertise in Action
                </h3>
                <p className="text-lg text-accent-cyan font-semibold mb-4">
                  Case Study: A German Manufacturer's Journey to a China WFOE
                </p>
                <p className="text-text-main font-body leading-relaxed mb-6">
                  Discover how we helped a leading German manufacturing company establish their WFOE in Shanghai, navigate complex regulatory requirements, and achieve full operational status within 4 months.
                </p>
                <div className="flex items-center text-accent-cyan font-medium">
                  <span>Read Full Case Study</span>
                  <svg className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-accent-cyan to-accent-magenta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-sans">
              Let's Build Your China Success Story Together.
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto font-body leading-relaxed">
              Ready to take the next step? Our team is here to guide you through every aspect of your China market entry.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white hover:bg-gray-100 text-accent-cyan px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start the Conversation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}