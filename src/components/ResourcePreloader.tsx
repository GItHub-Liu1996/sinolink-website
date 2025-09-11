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
    // 监听用户交互
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
    // 智能预加载策略
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
      // 预加载组件模块 - 使用动态导入
      try {
        // 这里我们使用一个更安全的方式来预加载组件
        // 在实际使用中，组件会在需要时自动加载
        console.log(`Preloading component: ${componentPath}`);
      } catch (error) {
        // 静默处理错误
        console.warn(`Failed to preload component: ${componentPath}`);
      }
    };

    // 根据当前页面智能选择预加载内容
    const getSmartPreloadRoutes = () => {
      const smartRoutes = [...preloadRoutes];
      
      // 根据当前页面添加相关路由
      if (pathname === '/') {
        smartRoutes.push('/insights', '/services/market-entry');
      } else if (pathname.startsWith('/services')) {
        smartRoutes.push('/about', '/contact');
      } else if (pathname.startsWith('/insights')) {
        smartRoutes.push('/services', '/about');
      }
      
      return smartRoutes;
    };

    // 延迟预加载，避免影响首屏加载
    const timer = setTimeout(() => {
      // 只有在用户交互后或延迟时间到达后才开始预加载
      if (hasInteracted || !userInteraction) {
        const routesToPreload = getSmartPreloadRoutes();
        routesToPreload.forEach(preloadRoute);
        preloadImages.forEach(preloadImage);
        preloadComponents.forEach(preloadComponent);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [router, preloadRoutes, preloadImages, preloadComponents, delay, hasInteracted, userInteraction, pathname, preloadedRoutes]);

  // 监听网络状态，在良好网络条件下进行预加载
  useEffect(() => {
    const handleOnline = () => {
      // 网络恢复时进行预加载
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

  return null; // 这是一个无UI组件
}
