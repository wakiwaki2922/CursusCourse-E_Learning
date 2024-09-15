import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_API_URL: process.env.BASE_API_URL,
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
    BASE_API_URL_FE: process.env.BASE_API_URL_FE,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cursus-cloud-bucket.s3.ap-southeast-1.amazonaws.com",
      },
    ],
  },
  reactStrictMode: false,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.output.chunkLoadTimeout = 30000; // 30 seconds
      config.resolve.fallback = {
        fs: false,
      };
    }

    // Ensure .mjs files are treated as ES modules
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });

    config.resolve.alias.canvas = false;

    return config;
  },
};

export default nextConfig;