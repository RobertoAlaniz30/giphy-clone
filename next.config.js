/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media4.giphy.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media4.giphy.com',
      },
    ],
  }, 
}

module.exports = nextConfig
