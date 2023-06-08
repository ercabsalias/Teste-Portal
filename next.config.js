/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 1000,
  images: {
    domains: [
      "example.com",
      "uploads-file-portal-das-escolas.s3.amazonaws.com",
      "i.ibb.co",
    ],
  },
};

module.exports = nextConfig;
