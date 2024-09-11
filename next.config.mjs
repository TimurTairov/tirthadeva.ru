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
        hostname: "*sun9-49.userapi.com",
      },
      {
        protocol: 'https',
        hostname: "media.giphy.com",
      },
      {
        protocol: 'https',
        hostname: "www.advayta.org/binaries/am/",
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
};
