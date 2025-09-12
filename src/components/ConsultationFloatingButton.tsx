'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ChevronUp } from 'lucide-react';
import ConsultationQuiz from './ConsultationQuiz';

export default function ConsultationFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="w-14 h-14 bg-gradient-to-r from-accent-cyan to-accent-magenta text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            >
              <MessageCircle className="w-6 h-6" />
              
              {/* Tooltip */}
              <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                智能咨询问卷
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Minimized State */}
        <AnimatePresence>
          {isOpen && isMinimized && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="bg-white rounded-lg shadow-lg border border-gray-200 p-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">咨询问卷进行中...</span>
                <button
                  onClick={() => setIsMinimized(false)}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  <ChevronUp className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Consultation Quiz Modal */}
      <ConsultationQuiz 
        isOpen={isOpen && !isMinimized} 
        onClose={() => {
          setIsOpen(false);
          setIsMinimized(false);
        }} 
      />

      {/* Minimize Handler */}
      {isOpen && !isMinimized && (
        <div className="fixed inset-0 z-30" onClick={() => setIsMinimized(true)} />
      )}
    </>
  );
}
