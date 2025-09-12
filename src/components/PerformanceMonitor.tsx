'use client';

import { useEffect } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'development') {
      return;
    }

    const metrics: PerformanceMetrics = {};

    // 监控 LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      metrics.lcp = lastEntry.startTime;
      console.log('🎯 LCP (Largest Contentful Paint):', `${metrics.lcp.toFixed(2)}ms`);
    });

    // 监控 FID (First Input Delay)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        metrics.fid = entry.processingStart - entry.startTime;
        console.log('⚡ FID (First Input Delay):', `${metrics.fid.toFixed(2)}ms`);
      });
    });

    // 监控 CLS (Cumulative Layout Shift)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      metrics.cls = clsValue;
      console.log('📐 CLS (Cumulative Layout Shift):', clsValue.toFixed(4));
    });

    // 监控 FCP (First Contentful Paint)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        metrics.fcp = entry.startTime;
        console.log('🎨 FCP (First Contentful Paint):', `${metrics.fcp.toFixed(2)}ms`);
      });
    });

    // 监控 TTFB (Time to First Byte)
    const ttfbObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        metrics.ttfb = entry.responseStart - entry.requestStart;
        console.log('🌐 TTFB (Time to First Byte):', `${metrics.ttfb.toFixed(2)}ms`);
      });
    });

    // 启动所有观察器
    try {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      fcpObserver.observe({ entryTypes: ['paint'] });
      ttfbObserver.observe({ entryTypes: ['navigation'] });
    } catch (error) {
      console.warn('性能监控初始化失败:', error);
    }

    // 页面卸载时输出性能报告
    const handleBeforeUnload = () => {
      console.log('📊 性能报告:', {
        LCP: metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'N/A',
        FID: metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'N/A',
        CLS: metrics.cls ? metrics.cls.toFixed(4) : 'N/A',
        FCP: metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A',
        TTFB: metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A',
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      fcpObserver.disconnect();
      ttfbObserver.disconnect();
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null;
}
