import bundleAnalyzer from '@next/bundle-analyzer'

// Bundle analyzer configuration
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true,
  },
  experimental: {
    // Removed optimizeCss which requires critters
    optimizePackageImports: ['lucide-react'],
    scrollRestoration: true,
  },
  // Increase the static generation concurrency for faster builds
  staticPageGenerationTimeout: 120,
  // Enable compression
  compress: true,
}

export default withBundleAnalyzer(nextConfig)
