'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  servicePoints: string[];
}

export default function ServiceCard({ icon, title, description, servicePoints }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-background-secondary rounded-2xl p-8 border border-gray-700 hover:border-accent-cyan transition-all duration-300 shadow-sm hover:shadow-lg"
    >
      {/* Icon and Title */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-accent-cyan to-accent-magenta rounded-lg flex items-center justify-center text-white">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-text-heading font-sans">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-text-main font-body leading-relaxed mb-6">{description}</p>

      {/* Service Points */}
      <ul className="space-y-3">
        {servicePoints.map((point, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-5 h-5 bg-accent-cyan rounded-full flex items-center justify-center flex-shrink-0">
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
    </motion.div>
  );
}
