// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ===== ОСНОВНА ОПТИМІЗАЦІЯ =====
  
  compress: true,
  productionBrowserSourceMaps: false,
  
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lodash', 'date-fns', 'react-icons'],
  },
  
  // ===== TURBOPACK КОНФІГУРАЦІЯ =====
  turbopack: {
    // Порожній об'єкт = використовувати Turbopack без додаткової конфігурації
  },
  
  // ===== HEADERS ДЛЯ КЕШУВАННЯ =====
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;