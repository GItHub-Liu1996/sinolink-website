'use client';

import Link from "next/link";
import OptimizedHeroImage from '@/components/OptimizedHeroImage';
import GradientButton from "@/components/ui/GradientButton";
import OutlineButton from "@/components/ui/OutlineButton";

export default function HeroSection() {
  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Hero section"
    >
      {/* Optimized Background Image */}
      <OptimizedHeroImage
        src="/images/hero-background.webp"
        alt="Professional business team working in modern office with Shanghai cityscape background - China Business Solutions"
        className="absolute inset-0 -z-10"
      />
      
      {/* Elegant gradient overlay from bottom to top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10" aria-hidden="true" />
      
      <div className="relative z-20 max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-sans leading-tight animate-fade-in"
          style={{ color: '#FFFFFF' }}
        >
          Launch, Operate, and Thrive in China. We Handle the Complexity.
        </h1>
        
        <p 
          className="text-lg sm:text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto font-body leading-relaxed animate-fade-in-delayed"
          style={{ color: '#FFFFFF' }}
        >
          From WFOE registration to ongoing compliance, our expert team provides the clarity and support you need to succeed.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delayed">
          <GradientButton href="/contact">
            Get Started Today
          </GradientButton>
          
          <OutlineButton href="/services">
            Explore Our Services
          </OutlineButton>
        </div>
      </div>
    </section>
  );
}
