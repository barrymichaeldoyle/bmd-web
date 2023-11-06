/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    taint: true,
  },
  cleanDistDir: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev-to-uploads.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "images.prismic.io",
      },
    ],
  },
};

module.exports = nextConfig;
