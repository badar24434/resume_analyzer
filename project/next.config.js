/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  basePath: '/resume_analyzer',
  assetPrefix: '/resume_analyzer/',
  trailingSlash: true
};

module.exports = nextConfig;
