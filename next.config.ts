/** @type {import('next').NextConfig} */

module.exports = {
  output: 'standalone',
  experimental: {
    outputStandalone: true,
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
}