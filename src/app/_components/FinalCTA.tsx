'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-background-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent-magenta rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-heading mb-6 font-sans">
            Ready to Enter the China Market?
          </h2>
          
          <p className="text-xl text-text-main mb-8 max-w-2xl mx-auto font-body">
            Join hundreds of successful businesses who have trusted us with their China market entry. 
            Let's turn your vision into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-accent-cyan to-accent-magenta hover:from-accent-magenta hover:to-accent-cyan text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-500 shadow-lg hover:shadow-xl inline-block"
              >
                Get Started Today
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/services"
                className="border-2 border-accent-cyan hover:bg-accent-cyan hover:text-background text-accent-cyan px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 inline-block"
              >
                View Our Services
              </Link>
            </motion.div>
          </div>
          
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-cyan mb-2">500+</div>
              <p className="text-text-main font-body">Companies Successfully Registered</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-cyan mb-2">15+</div>
              <p className="text-text-main font-body">Years of Combined Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-cyan mb-2">98%</div>
              <p className="text-text-main font-body">Client Satisfaction Rate</p>
            </div>
          </motion.div>
          
          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-2xl p-8 border border-gray-100 shadow-lg"
          >
            <blockquote className="text-lg text-text-main italic mb-6 font-body">
              "ChinaBiz Solutions transformed our China market entry from a daunting challenge into a smooth, successful launch. 
              Their expertise in WFOE registration and ongoing compliance support allowed us to focus on growing our business 
              rather than navigating bureaucratic complexities."
            </blockquote>
            <div className="text-center">
              <p className="text-text-heading font-semibold font-sans">David Thompson</p>
              <p className="text-text-main font-body">CEO, TechGlobal Solutions</p>
              <p className="text-gray-500 text-sm mt-1 font-body">Manufacturing & Technology Sector</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
