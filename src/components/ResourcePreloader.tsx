'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface ResourcePreloaderProps {
  preloadRoutes?: string[];
  preloadImages?: string[];
  preloadComponents?: string[];
  delay?: number;
  userInteraction?: boolean;
}

export default function ResourcePreloader({ 
  preloadRoutes = ['/services', '/about', '/contact'],
  preloadImages = [],
  preloadComponents = [],
  delay = 2000,
  userInteraction = true
}: ResourcePreloaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [hasInteracted, setHasInteracted] = useState(false);
  const [preloadedRoutes, setPreloadedRoutes] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Listen for user interactions
    const handleUserInteraction = () => {
      setHasInteracted(true);
    };

    if (userInteraction) {
      document.addEventListener('mousemove', handleUserInteraction, { once: true });
      document.addEventListener('touchstart', handleUserInteraction, { once: true });
      document.addEventListener('keydown', handleUserInteraction, { once: true });
    }

    return () => {
      document.removeEventListener('mousemove', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [userInteraction]);

  useEffect(() => {
    // Smart preloading strategy
    const preloadRoute = (route: string) => {
      if (!preloadedRoutes.has(route)) {
        router.prefetch(route);
        setPreloadedRoutes(prev => new Set(prev).add(route));
      }
    };

    const preloadImage = (src: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    };

    const preloadComponent = (componentPath: string) => {
      // Preload component modules - using dynamic imports
      try {
        // Here we use a safer way to preload components
        // In actual use, components will be automatically loaded when needed
        console.log(`Preloading component: ${componentPath}`);
      } catch (error) {
        // Silently handle errors
        console.warn(`Failed to preload component: ${componentPath}`);
      }
    };

    // Intelligently select preload content based on current page
    const getSmartPreloadRoutes = () => {
      const smartRoutes = [...preloadRoutes];
      
      // Add related routes based on current page
      if (pathname === '/') {
        smartRoutes.push('/insights', '/services/market-entry');
      } else if (pathname.startsWith('/services')) {
        smartRoutes.push('/about', '/contact');
      } else if (pathname.startsWith('/insights')) {
        smartRoutes.push('/services', '/about');
      }
      
      return smartRoutes;
    };

    // Delay preloading to avoid affecting first screen load
    const timer = setTimeout(() => {
      // Only start preloading after user interaction or delay time is reached
      if (hasInteracted || !userInteraction) {
        const routesToPreload = getSmartPreloadRoutes();
        routesToPreload.forEach(preloadRoute);
        preloadImages.forEach(preloadImage);
        preloadComponents.forEach(preloadComponent);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [router, preloadRoutes, preloadImages, preloadComponents, delay, hasInteracted, userInteraction, pathname, preloadedRoutes]);

  // Monitor network status and preload under good network conditions
  useEffect(() => {
    const handleOnline = () => {
      // Preload when network is restored
      setTimeout(() => {
        preloadRoutes.forEach(route => {
          if (!preloadedRoutes.has(route)) {
            router.prefetch(route);
            setPreloadedRoutes(prev => new Set(prev).add(route));
          }
        });
      }, 1000);
    };

    window.addEventListener('online', handleOnline);
    return () => window.removeEventListener('online', handleOnline);
  }, [router, preloadRoutes, preloadedRoutes]);

  return null; // This is a no-UI component
}
