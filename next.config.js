/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wizebot.com.br',
      },
    ],
  },
}

module.exports = nextConfig
