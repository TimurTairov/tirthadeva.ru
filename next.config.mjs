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
        hostname: "media.giphy.com",
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
};


export default nextConfig;
