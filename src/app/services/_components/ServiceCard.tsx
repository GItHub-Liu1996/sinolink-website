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
      className={`bg-background-secondary rounded-2xl p-8 border border-gray-700 hover:border-accent-cyan transition-all duration-300 shadow-sm hover:shadow-lg group ${
        href ? 'cursor-pointer hover:scale-105' : ''
      }`}
    >
      {/* Icon and Title */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-accent-cyan to-accent-magenta rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-text-heading font-sans group-hover:text-accent-cyan transition-colors duration-300">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-text-main font-body leading-relaxed mb-6">{description}</p>

      {/* Service Points - Show only first 3 if compact */}
      <ul className="space-y-3 mb-6">
        {(isCompact ? servicePoints.slice(0, 3) : servicePoints).map((point, index) => (
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
        {isCompact && servicePoints.length > 3 && (
          <li className="text-accent-cyan font-medium text-sm">
            +{servicePoints.length - 3} more services
          </li>
        )}
      </ul>

      {/* Action Button */}
      {href && (
        <div className="mt-6 pt-4 border-t border-gray-700">
          <div className="flex items-center justify-between">
            <span className="text-accent-cyan font-semibold text-sm group-hover:text-accent-cyan-light transition-colors duration-300">
              Learn More
            </span>
            <svg
              className="w-5 h-5 text-accent-cyan group-hover:translate-x-1 transition-transform duration-300"
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
