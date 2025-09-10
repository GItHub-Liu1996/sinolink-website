'use client';

import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      quote: "ChinaBiz Solutions transformed our China market entry from a daunting challenge into a smooth, successful launch.",
      author: "David Thompson",
      position: "CEO",
      company: "TechGlobal Solutions",
      logo: "TG"
    },
    {
      quote: "Their expertise in Chinese business culture and regulations was invaluable for our market penetration.",
      author: "Sarah Chen",
      position: "Managing Director", 
      company: "Global Innovations Ltd",
      logo: "GI"
    },
    {
      quote: "Working with ChinaBiz Solutions was one of the best decisions we made for our China expansion.",
      author: "Michael Rodriguez",
      position: "Founder",
      company: "EcoTech Industries",
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
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-text-heading font-sans">
              Success Stories from Our Partners
            </h2>
            <p className="text-base sm:text-lg text-text-main font-body leading-relaxed max-w-2xl mx-auto">
              Hear from our satisfied clients who have successfully established their presence in China.
            </p>
                  </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
                  <div className="bg-background-secondary rounded-lg p-6 sm:p-8 md:p-10 border border-gray-700 animate-fade-in">
              <div className="text-center">
                {/* Quote Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-accent-cyan to-accent-magenta rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                {/* Quote */}
                <blockquote className="text-lg sm:text-xl md:text-2xl text-text-main italic mb-6 sm:mb-8 font-body leading-relaxed max-w-3xl mx-auto">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4">
                  {/* Company Logo */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm sm:text-base">
                      {testimonials[currentIndex].logo}
                    </span>
                  </div>

                  {/* Author Details */}
                  <div className="text-center">
                    <p className="text-text-heading font-semibold text-base sm:text-lg font-sans">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-accent-cyan font-medium text-sm sm:text-base">
                      {testimonials[currentIndex].position}
                    </p>
                    <p className="text-text-main font-body text-sm sm:text-base">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
                    </div>

          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevTestimonial}
            className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background-secondary border border-gray-700 rounded-full flex items-center justify-center text-text-main hover:text-accent-cyan hover:border-accent-cyan transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background-secondary border border-gray-700 rounded-full flex items-center justify-center text-text-main hover:text-accent-cyan hover:border-accent-cyan transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
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
