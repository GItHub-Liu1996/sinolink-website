'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Article {
  id: string;
  title: string;
  link: string;
}

interface RelatedInsightsProps {
  articles: Article[];
}

export default function RelatedInsights({ articles }: RelatedInsightsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-12"
    >
      <h3 className="text-2xl font-bold text-text-heading mb-6 font-sans">
        Related Insights
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-background-secondary rounded-xl p-6 border border-gray-700 hover:border-accent-cyan transition-all duration-300 group"
          >
            <h4 className="text-lg font-semibold text-text-heading mb-3 font-sans group-hover:text-accent-cyan transition-colors duration-200">
              {article.title}
            </h4>
            
            <Link
              href={article.link}
              className="inline-flex items-center text-accent-cyan hover:text-accent-magenta font-medium transition-colors duration-200"
            >
              Read More
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
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
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
