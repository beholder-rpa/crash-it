/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/crash-it/' : '',
  images: {
    loader: 'custom',
  },
};

module.exports = nextConfig;
