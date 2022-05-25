/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: "https://floors-app-lz6o6.ondigitalocean.app",
    GOOGLE_MAP_API_KEY:"AIzaSyBpK2K9D5QfMMiTVdsgz9cSjoKcXmhRsOo",
    FULL_ACCESS_TOKEN:"40e256f93cf73cd281b7af95518a87925c948c52d50a056a6aba95fd92bc7aa86d0b634144340309b1a3f9a8d930b1a008d90e6da6b7e559f44471d09b509591bac27d63076ea1119bb5df42e69cb001dac86834613c9d28dac34fc6f3e46c794c40ef1c0b49efdcd2a406c33fec6161363436e2ad06783b6b49540df3e5e36f",
    READ_ONLY_TOKEN:"ba68c3bb33954c1e57606bb049596386beea09e803b03a521c5596d73101f6e566d1f6e4a534f78ed584e2eca20d3cdc7ee018161272a44cc2e94b6d109de34a81ac467786b3c9ff6922e24b6765723f87fcad9229a49be65ee4a874cd6fab9105e4c82d108f50214ad4459c1283c069740a707ec7d4f90248ec8c281716ee00",
  },
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: [
      "localhost",
      "floors-app-lz6o6.ondigitalocean.app",
      "cloudinary.com",
      "res.cloudinary.com",
    ],
  },
  optimization: {
    runtimeChunk: "single",
  },
};

module.exports = nextConfig;
