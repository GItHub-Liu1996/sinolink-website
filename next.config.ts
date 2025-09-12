import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 启用静态导出
  trailingSlash: true,
  images: {
    unoptimized: true,
    qualities: [65, 75, 90],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // 配置本地图片模式以支持查询参数
    localPatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/images/**',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
    webpackBuildWorker: true,
    // 启用现代JavaScript优化
    esmExternals: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // 生产环境移除console.log
  },
  // 优化JavaScript构建
  swcMinify: true,
  // 现代浏览器目标
  env: {
    BROWSERSLIST_ENV: 'modern',
  },
  webpack: (config, { isServer, dev }) => {
    // 优化现代浏览器支持，减少polyfill
    if (!isServer && !dev) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        // 移除不必要的polyfill
        fs: false,
        net: false,
        tls: false,
      };
      
      // 优化babel配置以减少polyfill
      config.module.rules.push({
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  browsers: ['> 1%', 'last 2 versions', 'not ie <= 11']
                },
                modules: false,
                useBuiltIns: 'usage',
                corejs: 3
              }]
            ]
          }
        }
      });
    }
    
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 30,
        maxAsyncRequests: 30,
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          // Critical vendor libraries - split by size
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
            maxSize: 100000,
          },
          // Large vendor libraries - separate chunks
          largeVendor: {
            test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
            name: 'large-vendor',
            chunks: 'all',
            priority: 15,
            maxSize: 150000,
          },
          // Framer Motion - separate chunk for animations
          framerMotion: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: 'framer-motion',
            chunks: 'all',
            priority: 20,
          },
          // UI components - separate chunk
          uiComponents: {
            test: /[\\/]src[\\/]components[\\/]ui[\\/]/,
            name: 'ui-components',
            chunks: 'all',
            priority: 8,
          },
          // Page components - separate chunk
          pageComponents: {
            test: /[\\/]src[\\/]app[\\/].*[\\/]_components[\\/]/,
            name: 'page-components',
            chunks: 'all',
            priority: 7,
          },
          // Common components
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 5,
            reuseExistingChunk: true,
            maxSize: 50000,
          },
          // Default chunks
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
            maxSize: 100000,
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;