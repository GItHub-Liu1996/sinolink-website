// Service Worker for performance optimization
const CACHE_NAME = 'gochinaadvisors-v1.2.3';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// 需要缓存的静态资源
const STATIC_ASSETS = [
  '/',
  '/favicon.ico',
  '/favicon.svg',
  '/images/logo/favicon.svg',
  '/manifest.webmanifest',
  '/styles/critical.css'
];

// 需要缓存的API路径
const API_CACHE_PATTERNS = [
  '/api/contact',
  '/api/consultation-quiz',
  '/api/newsletter'
];

// 安装事件
self.addEventListener('install', (event) => {
  console.log('🔧 Service Worker 安装中...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('📦 缓存静态资源...');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('✅ Service Worker 安装完成');
        return self.skipWaiting();
      })
  );
});

// 激活事件
self.addEventListener('activate', (event) => {
  console.log('🚀 Service Worker 激活中...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('🗑️ 删除旧缓存:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('✅ Service Worker 激活完成');
        return self.clients.claim();
      })
  );
});

// 拦截请求
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // 只处理同源请求
  if (url.origin !== location.origin) {
    return;
  }
  
  // 处理不同类型的请求
  if (request.method === 'GET') {
    // 静态资源 - Cache First
    if (isStaticAsset(request.url)) {
      event.respondWith(cacheFirst(request, STATIC_CACHE));
    }
    // API请求 - Network First
    else if (isApiRequest(request.url)) {
      event.respondWith(networkFirst(request, DYNAMIC_CACHE));
    }
    // 页面请求 - Stale While Revalidate
    else if (request.destination === 'document') {
      event.respondWith(staleWhileRevalidate(request, DYNAMIC_CACHE));
    }
    // 其他请求 - Network First
    else {
      event.respondWith(networkFirst(request, DYNAMIC_CACHE));
    }
  }
});

// Cache First 策略
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }
  
  const response = await fetch(request);
  if (response.ok) {
    cache.put(request, response.clone());
  }
  
  return response;
}

// Network First 策略
async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  
  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached) {
      return cached;
    }
    throw error;
  }
}

// Stale While Revalidate 策略
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  
  const fetchPromise = fetch(request).then((response) => {
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  });
  
  return cached || fetchPromise;
}

// 判断是否为静态资源
function isStaticAsset(url) {
  return url.includes('/images/') || 
         url.includes('/favicon') || 
         url.includes('/manifest') ||
         url.includes('/styles/') ||
         url.includes('/_next/static/');
}

// 判断是否为API请求
function isApiRequest(url) {
  return API_CACHE_PATTERNS.some(pattern => url.includes(pattern));
}

// 后台同步
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  console.log('🔄 执行后台同步...');
  // 这里可以处理离线时的数据同步
}

// 推送通知
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/images/logo/favicon.svg',
      badge: '/images/logo/favicon.svg',
      tag: 'gochinaadvisors-notification',
      requireInteraction: true,
      actions: [
        {
          action: 'open',
          title: '查看详情'
        },
        {
          action: 'close',
          title: '关闭'
        }
      ]
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// 通知点击
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'open') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
