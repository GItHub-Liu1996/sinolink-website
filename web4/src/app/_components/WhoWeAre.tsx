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
    <section className="py-24 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Text & Data */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-text-heading font-sans">
              Expertise on the Ground, Global Vision.
            </h2>
            
            <div className="space-y-6 text-lg text-text-main font-body leading-relaxed">
              <p>
                We are more than just consultants; we are your strategic partners in China. Our team combines deep local knowledge with international business standards to demystify the market and empower your growth.
              </p>
            </div>
            
            {/* Dynamic Data Display */}
            <div className="flex gap-12">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-5xl font-bold text-accent-cyan mb-2 font-sans"
                >
                  {count15}+
                </motion.div>
                <div className="text-sm text-text-main font-body">
                  Years of Experience
                </div>
              </div>
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-5xl font-bold text-accent-cyan mb-2 font-sans"
                >
                  {count500}+
                </motion.div>
                <div className="text-sm text-text-main font-body">
                  Successful Projects
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Professional Team Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl relative">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Professional China Business Solutions team of experts in modern office environment - experienced consultants for market entry and compliance"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
