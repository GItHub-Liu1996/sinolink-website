'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  servicePoints: string[];
  href?: string;
  isCompact?: boolean;
}

export default function ServiceCard({ 
  icon, 
  title, 
  description, 
  servicePoints, 
  href, 
  isCompact = false 
}: ServiceCardProps) {
  const CardContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`bg-white rounded-3xl p-8 border border-gray-100 hover:border-accent-primary transition-all duration-300 shadow-xl hover:shadow-2xl group h-full flex flex-col relative overflow-hidden ${
        href ? 'cursor-pointer hover:scale-105' : ''
      }`}
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
      {/* Icon and Title */}
      <div className="flex items-center gap-4 mb-4 relative z-10">
        <div className="w-14 h-14 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-text-heading font-sans group-hover:text-accent-primary transition-colors duration-300">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className={`text-text-main font-body leading-relaxed mb-6 relative z-10 ${isCompact ? 'flex-1' : ''}`}>
        {description}
      </p>

      {/* Service Points - Show only first 3 if compact */}
      {!isCompact && (
        <ul className="space-y-3 mb-6 relative z-10">
          {servicePoints.map((point, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-5 h-5 bg-accent-primary rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-text-main font-body">{point}</span>
            </motion.li>
          ))}
        </ul>
      )}

      {/* Action Button */}
      {href && (
        <div className={`${isCompact ? 'mt-auto' : 'mt-6'} pt-4 border-t border-gray-700 relative z-10`}>
          <div className="flex items-center justify-between">
            <span className="text-accent-primary font-semibold text-sm group-hover:text-accent-secondary transition-colors duration-300">
              Learn More
            </span>
            <svg
              className="w-5 h-5 text-accent-primary group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}
