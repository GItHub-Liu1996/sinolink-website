'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});

  // Real industry data and competitive advantages
  const stats = [
    {
      value: 3,
      label: 'Months Average',
      description: 'WFOE registration timeline vs 12+ months industry average',
      icon: (
        <svg className="w-8 h-8 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'accent-cyan'
    },
    {
      value: 85,
      label: 'Cost Reduction',
      description: 'Average savings vs DIY approach',
      icon: (
        <svg className="w-8 h-8 text-accent-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      color: 'accent-magenta'
    },
    {
      value: 24,
      label: 'Hour Support',
      description: 'Dedicated compliance monitoring',
      icon: (
        <svg className="w-8 h-8 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        </svg>
      ),
      color: 'accent-orange'
    },
    {
      value: 100,
      label: 'Compliance Rate',
      description: 'Zero regulatory violations in 5 years',
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'green-500'
    }
  ];

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        const newValues: { [key: string]: number } = {};
        stats.forEach((stat) => {
          newValues[stat.label] = Math.floor(stat.value * easeOutQuart);
        });
        
        setAnimatedValues(newValues);
        
        if (step >= steps) {
          clearInterval(timer);
          const finalValues: { [key: string]: number } = {};
          stats.forEach((stat) => {
            finalValues[stat.label] = stat.value;
          });
          setAnimatedValues(finalValues);
        }
      }, stepDuration);
      
      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <section 
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 bg-background-primary relative overflow-hidden"
      aria-labelledby="stats-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-accent-magenta/5 to-accent-orange/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-magenta/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 
            id="stats-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-heading mb-4 font-heading"
          >
            Why Choose Us Over Competitors
          </h2>
          <p className="text-lg sm:text-xl text-text-main max-w-3xl mx-auto font-body leading-relaxed">
            Real performance metrics that matter to your business success in China.
          </p>
        </motion.div>

        {/* Creative hexagon grid layout */}
        <div className="relative">
          {/* Central large hexagon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-accent-cyan to-accent-magenta rounded-full flex items-center justify-center shadow-2xl z-10"
          >
            <div className="text-center text-white">
              <div className="text-2xl font-bold font-heading">15+</div>
              <div className="text-sm font-body">Years</div>
            </div>
          </motion.div>

          {/* Four corner hexagons */}
          <div className="grid grid-cols-2 gap-8 lg:gap-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Hexagon background */}
                <div className="w-48 h-48 mx-auto relative">
                  <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color} to-${stat.color}/80 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group`}>
                    <div className="text-center text-white p-6">
                      <div className="flex justify-center mb-4">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold font-heading mb-2">
                        {animatedValues[stat.label] || 0}
                        {stat.label === 'Compliance Rate' ? '%' : stat.label === 'Cost Reduction' ? '%' : stat.label === 'Hour Support' ? '/7' : ''}
                      </div>
                      <div className="text-sm font-semibold font-body mb-1">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                  
                  {/* Description text */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-64 text-center">
                    <p className="text-sm text-text-main font-body leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom decorative statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-12 bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-200 shadow-xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-cyan font-heading">500+</div>
              <div className="text-sm text-text-main font-body">Companies Launched</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-magenta font-heading">50+</div>
              <div className="text-sm text-text-main font-body">Industry Sectors</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-orange font-heading">24/7</div>
              <div className="text-sm text-text-main font-body">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}