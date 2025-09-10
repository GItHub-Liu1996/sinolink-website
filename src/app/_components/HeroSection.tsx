'use client';

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Hero section"
    >
      {/* Optimized Background Image */}
      <Image
        src="/images/hero-background.webp?v=5"
        alt="Professional business team working in modern office with Shanghai cityscape background - China Business Solutions"
        fill
        priority
        fetchPriority="high"
        className="object-cover -z-10"
        quality={65}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
      
      {/* Additional Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(11,17,32,0.6)] to-[rgba(11,17,32,0.9)] z-10" aria-hidden="true" />
      
      <div className="relative z-20 max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-sans leading-tight animate-fade-in"
        >
          Launch, Operate, and Thrive in China. We Handle the Complexity.
        </h1>
        
        <p 
          className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto font-body leading-relaxed animate-fade-in-delayed"
        >
          From WFOE registration to ongoing compliance, our expert team provides the clarity and support you need to succeed.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delayed">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-accent-cyan to-accent-magenta hover:from-accent-magenta hover:to-accent-cyan text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-block relative overflow-hidden group"
            aria-label="Book a free consultation to discuss your China business needs"
          >
            <span className="relative z-10">Book a Free Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-magenta to-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
          </Link>
          
          <Link
            href="/services"
            className="border-2 border-white hover:bg-white hover:text-background-primary text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 inline-block backdrop-blur-sm hover:backdrop-blur-none hover:scale-105"
            aria-label="Explore our comprehensive business services for China market entry"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
