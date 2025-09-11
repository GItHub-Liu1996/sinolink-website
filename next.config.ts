import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // 注释掉静态导出，以支持API路由
  trailingSlash: true,
  images: {
    unoptimized: true,
    qualities: [65, 75, 90],
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
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          framerMotion: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: 'framer-motion',
            chunks: 'all',
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
