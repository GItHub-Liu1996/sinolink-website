'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ServiceCategoryTabsProps {
  categories: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function ServiceCategoryTabs({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: ServiceCategoryTabsProps) {
  return (
    <div className="mb-12">
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-accent-cyan text-background-primary shadow-lg'
                : 'bg-background-secondary text-text-main hover:bg-gray-700 hover:text-accent-cyan'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>
      
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-text-heading mb-4">
          {categories.find(cat => cat.id === activeCategory)?.title}
        </h2>
        <p className="text-lg text-text-main max-w-3xl mx-auto">
          {categories.find(cat => cat.id === activeCategory)?.description}
        </p>
      </motion.div>
    </div>
  );
}
