/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "*.userapi.com",
      },
      {
        protocol: 'https',
        hostname: "sun9-49.userapi.com",
        port: '',
        pathname: '/impg/**',
      },
      {
        protocol: 'https',
        hostname: "sun9-48.userapi.com",
        port: '',
        pathname: '/impg/UhpzEEiwfzJcCZ8x8JujaR7wBk8w8JFuakX_Fw/**',
      },
      {
        protocol: 'https',
        hostname: "sun9-73.userapi.com",
      },
      {
        protocol: 'https',
        hostname: "sun9-13.userapi.com",
      },
      {
        protocol: 'https',
        hostname: "sun9-5.userapi.com",
      },
      {
        protocol: 'https',
        hostname: "media.giphy.com",
      },
      {
        protocol: 'https',
        hostname: "www.advayta.org/binaries/am/",
      },
      {
        protocol: 'https',
        hostname: "giphy.com",
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
};
