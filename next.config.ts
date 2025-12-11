import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sun9-47.userapi.com',
        port: '',
        pathname: '/impg/**',
        search: '',
      },
    ],
  },
}

export default nextConfig
