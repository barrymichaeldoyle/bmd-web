/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   taint: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stackoverflow.com",
      },
    ],
  },
};

module.exports = nextConfig;
