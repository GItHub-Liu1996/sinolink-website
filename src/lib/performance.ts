// 性能优化工具函数

/**
 * 使用 requestIdleCallback 来执行非关键任务
 */
export function runWhenIdle(callback: () => void, timeout = 1000): void {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(callback, { timeout });
  } else {
    setTimeout(callback, 0);
  }
}

/**
 * 批量处理任务，避免长时间阻塞主线程
 */
export function batchProcess<T>(
  items: T[],
  processor: (item: T) => void,
  batchSize = 10,
  delay = 0
): Promise<void> {
  return new Promise((resolve) => {
    let index = 0;

    const processBatch = () => {
      const endIndex = Math.min(index + batchSize, items.length);
      
      for (let i = index; i < endIndex; i++) {
        processor(items[i]);
      }
      
      index = endIndex;
      
      if (index < items.length) {
        runWhenIdle(processBatch, delay);
      } else {
        resolve();
      }
    };

    runWhenIdle(processBatch, delay);
  });
}

/**
 * 防抖函数，用于优化频繁触发的事件
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * 节流函数，用于限制函数执行频率
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * 预加载关键资源
 */
export function preloadCriticalResources(): void {
  // 预加载关键CSS
  const criticalCSS = document.createElement('link');
  criticalCSS.rel = 'preload';
  criticalCSS.as = 'style';
  criticalCSS.href = '/styles/critical.css';
  document.head.appendChild(criticalCSS);

  // 预加载关键字体
  const criticalFont = document.createElement('link');
  criticalFont.rel = 'preload';
  criticalFont.as = 'font';
  criticalFont.type = 'font/woff2';
  criticalFont.crossOrigin = 'anonymous';
  criticalFont.href = '/fonts/inter-var.woff2';
  document.head.appendChild(criticalFont);
}

/**
 * 优化图片加载
 */
export function optimizeImageLoading(): void {
  // 添加图片懒加载支持
  if ('loading' in HTMLImageElement.prototype) {
    // 现代浏览器支持原生懒加载
    const images = document.querySelectorAll('img[data-src]');
    images.forEach((img) => {
      (img as HTMLImageElement).src = (img as HTMLImageElement).dataset.src || '';
      (img as HTMLImageElement).loading = 'lazy';
    });
  } else {
    // 降级到 Intersection Observer
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img);
    });
  }
}

/**
 * 监控性能指标
 */
export function monitorPerformance(): void {
  if ('PerformanceObserver' in window) {
    // 监控 LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // 监控 FID (First Input Delay)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // 监控 CLS (Cumulative Layout Shift)
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      list.getEntries().forEach((entry) => {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      });
      console.log('CLS:', clsValue);
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  }
}
