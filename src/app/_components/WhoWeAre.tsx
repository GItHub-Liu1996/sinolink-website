'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export default function WhoWeAre() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count15, setCount15] = useState(0);
  const [count500, setCount500] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setCount15(Math.floor(15 * easeOutQuart));
        setCount500(Math.floor(500 * easeOutQuart));
        
        if (step >= steps) {
          clearInterval(timer);
          setCount15(15);
          setCount500(500);
        }
      }, stepDuration);
      
      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <section 
      className="py-20 sm:py-24 lg:py-32 bg-background-secondary"
      aria-labelledby="who-we-are-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Column - Text & Data */}
          <div className="space-y-10">
            <motion.h2 
              id="who-we-are-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-heading font-sans leading-tight"
            >
              Expertise on the Ground, Global Vision.
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg sm:text-xl text-text-main font-body leading-relaxed"
            >
              <p>
                We are more than just consultants; we are your strategic partners in China. Our team combines deep local knowledge with international business standards to demystify the market and empower your growth.
              </p>
            </motion.div>
            
            {/* Dynamic Data Display */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-8 sm:gap-12"
              role="region"
              aria-label="Company statistics"
            >
              <div className="text-center group">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-cyan mb-3 font-sans group-hover:text-accent-magenta transition-colors duration-300"
                  aria-label={`${count15} years of experience`}
                >
                  {count15}+
                </motion.div>
                <div className="text-sm sm:text-base text-text-main font-body font-medium">
                  Years of Experience
                </div>
              </div>
              
              <div className="text-center group">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-cyan mb-3 font-sans group-hover:text-accent-magenta transition-colors duration-300"
                  aria-label={`${count500} successful projects`}
                >
                  {count500}+
                </motion.div>
                <div className="text-sm sm:text-base text-text-main font-body font-medium">
                  Successful Projects
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Professional Team Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl relative bg-gradient-to-br from-accent-cyan/20 to-accent-magenta/20 p-1">
              <div className="w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60"
                  alt="Professional China Business Solutions team of experts in modern office environment - experienced consultants for market entry and compliance"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-cyan rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-magenta rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
