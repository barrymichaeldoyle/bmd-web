/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    taint: true,
  },
  images: {
    domains: ["stackoverflow.com"],
  },
};

module.exports = nextConfig;
