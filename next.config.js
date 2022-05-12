/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost", "strapi-floor-metaverse-ww5pg.ondigitalocean.app"],
  }
}

module.exports = nextConfig
