'use client';

import Link from "next/link";
import Image from "next/image";
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
      <Image
        src="/images/hero-background.webp?v=5"
        alt="Professional business team working in modern office with Shanghai cityscape background - China Business Solutions"
        fill
        priority
        fetchPriority="high"
        className="object-cover -z-10"
        quality={65}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1342px, 1342px"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
          <GradientButton href="/consultation-quiz">
            智能咨询问卷
          </GradientButton>
          
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
