/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/era',
  assetPrefix: '/era',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
