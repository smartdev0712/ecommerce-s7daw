/** @type {import('next').NextConfig} */
const webpack = require("webpack");

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
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"development"',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};

module.exports = nextConfig;
