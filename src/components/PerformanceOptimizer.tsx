'use client';

import { useEffect } from 'react';
import { preloadCriticalResources, optimizeImageLoading } from '@/lib/performance';
import PerformanceMonitor from './PerformanceMonitor';

export default function PerformanceOptimizer() {
  useEffect(() => {
    // 预加载关键资源
    preloadCriticalResources();
    
    // 优化图片加载
    optimizeImageLoading();
    
    // 优化字体加载
    if ('fonts' in document) {
      (document as any).fonts.ready.then(() => {
        console.log('✅ 字体加载完成');
      });
    }
    
    // 预连接到关键域名
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://images.unsplash.com'
    ];
    
    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, []);

  return (
    <>
      {/* 开发环境性能监控 */}
      {process.env.NODE_ENV === 'development' && <PerformanceMonitor />}
    </>
  );
}
