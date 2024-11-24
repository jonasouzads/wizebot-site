/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    WIZEBOT_API_TOKEN: process.env.WIZEBOT_API_TOKEN,
  },
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['gfemkvtgyrzvvgaxxbwc.supabase.co'],
  },
  trailingSlash: true,
}

export default nextConfig
