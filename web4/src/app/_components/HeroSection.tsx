'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Optimized Background Image */}
      <Image
        src="/images/hero-background.webp"
        alt="Professional business team working in modern office with Shanghai cityscape background - China Business Solutions"
        fill
        priority
        className="object-cover -z-10"
        quality={85}
        sizes="100vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
      
      {/* Additional Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(11,17,32,0.6)] to-[rgba(11,17,32,0.9)] z-10" />
      
      <div className="relative z-20 max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 font-sans"
        >
          Launch, Operate, and Thrive in China. We Handle the Complexity.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto font-body leading-relaxed"
        >
          From WFOE registration to ongoing compliance, our expert team provides the clarity and support you need to succeed.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="bg-gradient-to-r from-accent-cyan to-accent-magenta hover:from-accent-magenta hover:to-accent-cyan text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-500 shadow-lg hover:shadow-xl inline-block animate-pulse"
            >
              Book a Free Consultation
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/services"
              className="border-2 border-white hover:bg-white hover:text-background text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 inline-block"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
