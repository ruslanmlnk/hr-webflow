import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ===== ОСНОВНА ОПТИМІЗАЦІЯ =====

  
  // Компресія gzip
  compress: true,
  
  // Вимкнути source maps у продакшені
  productionBrowserSourceMaps: false,
  
  // Оптимізація зображень
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // ===== ЕКСПЕРИМЕНТАЛЬНІ ФІЧІ =====
  
  experimental: {
    // Оптимізація CSS (Next.js 14+)
    optimizeCss: true,
    
    // Оптимізація імпортів пакетів
    optimizePackageImports: ['lodash', 'date-fns', 'react-icons'],
  },
  
  // ===== WEBPACK КОНФІГУРАЦІЯ =====
  
  webpack: (config, { dev, isServer }) => {
    // Тільки для production клієнтського коду
    if (!dev && !isServer) {
      
      // Оптимізація bundle splitting
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            
            // Vendor chunk для node_modules
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20,
            },
            
            // Спільний код між сторінками
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
            
            // Великі бібліотеки окремо
            lib: {
              test(module: any) {
                return (
                  module.size() > 160000 &&
                  /node_modules/.test(module.identifier())
                );
              },
              name(module: any) {
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )?.[1];
                return `lib-${packageName?.replace('@', '')}`;
              },
              priority: 30,
              minChunks: 1,
            },
          },
        },
      };
      
      // Видалення console.log у продакшені
      config.optimization.minimizer = config.optimization.minimizer || [];
      config.optimization.minimizer.forEach((minimizer: any) => {
        if (minimizer.constructor.name === 'TerserPlugin') {
          minimizer.options.terserOptions = {
            ...minimizer.options.terserOptions,
            compress: {
              ...minimizer.options.terserOptions?.compress,
              drop_console: true,
              drop_debugger: true,
            },
          };
        }
      });
      
      // Tree shaking
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }
    
    return config;
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