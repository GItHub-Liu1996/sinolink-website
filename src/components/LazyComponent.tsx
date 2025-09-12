'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';

interface LazyComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

export default function LazyComponent({ 
  children, 
  fallback = null, 
  threshold = 0.1,
  rootMargin = '50px',
  className = ''
}: LazyComponentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          // 使用 requestIdleCallback 来避免阻塞主线程
          const loadComponent = () => {
            setIsVisible(true);
            setHasLoaded(true);
          };

          if ('requestIdleCallback' in window) {
            requestIdleCallback(loadComponent, { timeout: 100 });
          } else {
            // 降级到 setTimeout
            setTimeout(loadComponent, 0);
          }
          
          observer.disconnect();
        }
      },
      { 
        threshold,
        rootMargin 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, hasLoaded]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : fallback}
    </div>
  );
}
