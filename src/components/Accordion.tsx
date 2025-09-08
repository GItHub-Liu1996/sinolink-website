'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-background-secondary rounded-xl border border-gray-700 overflow-hidden"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors duration-200"
          >
            <h3 className="text-lg font-semibold text-text-heading font-sans">
              {item.question}
            </h3>
            <motion.div
              animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 ml-4"
            >
              <svg
                className="w-5 h-5 text-accent-cyan"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.div>
          </button>
          
          <AnimatePresence>
            {openItems.includes(item.id) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-text-main font-body leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
