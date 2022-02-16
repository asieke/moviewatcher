/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    apiKey: 'f5ba401fd6b83bbf08088cb82ce900d1',
  },
  images: {
    domains: ['image.tmdb.org'],
  },
};

module.exports = nextConfig;
