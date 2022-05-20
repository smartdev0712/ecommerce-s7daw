/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: [
      "localhost",
      "strapi-floor-metaverse-ww5pg.ondigitalocean.app",
      "cloudinary.com",
      "res.cloudinary.com",
    ],
  },
  optimization: {
    runtimeChunk: "single",
  },
};

module.exports = nextConfig;
