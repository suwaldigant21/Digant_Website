/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove swcMinify as it's no longer recognized
  images: {
    domains: ['placehold.co', 'via.placeholder.com'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
}

export default nextConfig