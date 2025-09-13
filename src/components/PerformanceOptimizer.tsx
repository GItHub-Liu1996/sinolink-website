'use client';

import { useEffect } from 'react';

export default function PerformanceOptimizer() {
  useEffect(() => {
    // 延迟非关键JavaScript执行
    const optimizePerformance = () => {
      // 使用 requestIdleCallback 来延迟非关键任务
      const runWhenIdle = (callback: () => void) => {
        if ('requestIdleCallback' in window) {
          requestIdleCallback(callback, { timeout: 2000 });
        } else {
          setTimeout(callback, 100);
        }
      };

      // 延迟加载非关键功能
      runWhenIdle(() => {
        // 预加载关键资源
        const preloadLinks = [
          '/images/hero-background.webp',
          '/images/logo/logo.svg'
        ];

        preloadLinks.forEach(href => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = href;
          document.head.appendChild(link);
        });
      });

      // 优化滚动性能
      let ticking = false;
      const optimizeScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // 滚动优化逻辑
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', optimizeScroll, { passive: true });

      // 清理函数
      return () => {
        window.removeEventListener('scroll', optimizeScroll);
      };
    };

    // 延迟执行性能优化
    const timeoutId = setTimeout(optimizePerformance, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return null;
}