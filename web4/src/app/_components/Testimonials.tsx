'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      quote: "ChinaBiz Solutions transformed our China market entry from a daunting challenge into a smooth, successful launch. Their expertise in WFOE registration and ongoing compliance support allowed us to focus on growing our business rather than navigating bureaucratic complexities.",
      author: "David Thompson",
      position: "CEO",
      company: "TechGlobal Solutions",
      industry: "Manufacturing & Technology",
      logo: "TG"
    },
    {
      quote: "The team's deep understanding of Chinese business culture and regulations was invaluable. They not only handled all our legal requirements but also provided strategic guidance that helped us establish strong local partnerships and accelerate our market penetration.",
      author: "Sarah Chen",
      position: "Managing Director",
      company: "Global Innovations Ltd",
      industry: "Financial Services",
      logo: "GI"
    },
    {
      quote: "Working with ChinaBiz Solutions was one of the best decisions we made for our China expansion. Their comprehensive approach, from initial setup to ongoing operational support, ensured we remained compliant while scaling our business efficiently.",
      author: "Michael Rodriguez",
      position: "Founder",
      company: "EcoTech Industries",
      industry: "Clean Technology",
      logo: "ET"
    }
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-text-heading font-sans">
              Success Stories from Our Partners.
            </h2>
            <p className="text-lg text-text-main font-body leading-relaxed max-w-3xl mx-auto">
              Hear from our satisfied clients who have successfully established their presence in China.
            </p>
          </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-background-secondary rounded-lg p-8 md:p-12 border border-gray-700"
            >
              <div className="text-center">
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-accent-cyan to-accent-magenta rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-text-main italic mb-8 font-body leading-relaxed max-w-4xl mx-auto">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                  {/* Company Logo */}
                  <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonials[currentIndex].logo}
                    </span>
                  </div>

                  {/* Author Details */}
                  <div className="text-center md:text-left">
                    <p className="text-text-heading font-semibold text-lg font-sans">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-accent-cyan font-medium">
                      {testimonials[currentIndex].position}
                    </p>
                    <p className="text-text-main font-body">
                      {testimonials[currentIndex].company}
                    </p>
                    <p className="text-gray-500 text-sm font-body">
                      {testimonials[currentIndex].industry}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background-secondary border border-gray-700 rounded-full flex items-center justify-center text-text-main hover:text-accent-cyan hover:border-accent-cyan transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background-secondary border border-gray-700 rounded-full flex items-center justify-center text-text-main hover:text-accent-cyan hover:border-accent-cyan transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex 
                  ? 'bg-accent-cyan' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
