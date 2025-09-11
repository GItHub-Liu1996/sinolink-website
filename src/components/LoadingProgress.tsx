'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface LoadingProgressProps {
  className?: string;
}

export default function LoadingProgress({ className = '' }: LoadingProgressProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let progressTimer: NodeJS.Timeout;
    let hideTimer: NodeJS.Timeout;

    const startProgress = () => {
      setIsVisible(true);
      setProgress(0);

      // Simulate progress
      progressTimer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressTimer);
            return 90;
          }
          return prev + Math.random() * 15;
        });
      }, 100);
    };

    const completeProgress = () => {
      clearInterval(progressTimer);
      setProgress(100);
      
      hideTimer = setTimeout(() => {
        setIsVisible(false);
        setProgress(0);
      }, 300);
    };

    // Listen for route changes
    const handleRouteChange = () => {
      startProgress();
    };

    const handleRouteComplete = () => {
      completeProgress();
    };

    // Add event listeners
    window.addEventListener('beforeunload', startProgress);
    window.addEventListener('load', handleRouteComplete);

    // Cleanup
    return () => {
      clearInterval(progressTimer);
      clearTimeout(hideTimer);
      window.removeEventListener('beforeunload', startProgress);
      window.removeEventListener('load', handleRouteComplete);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 ${className}`}>
      <div className="h-1 bg-gray-200">
        <div
          className="h-full bg-gradient-to-r from-accent-cyan to-accent-magenta transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
