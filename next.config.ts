import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimizations for production
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable compression
  compress: true,
  // Power performance
  poweredByHeader: false,
  // Strict mode for better debugging
  reactStrictMode: true,
};

export default nextConfig;
