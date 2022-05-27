/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: "https://meta-floor-strapi-app.herokuapp.com",
    GOOGLE_MAP_API_KEY:"AIzaSyBpK2K9D5QfMMiTVdsgz9cSjoKcXmhRsOo",
    FULL_ACCESS_TOKEN:"065fd41ce83bf1656e6e45f74bbd301ab893e73368727ca35e296a8dcc71d37b9a9e4662d10d56380d5dcd1b26cf792d8e1d04ad97af3f86e5fd74fafa05e6e729eb6e3ee11bdcd3a7435555b7039d36e7672a7c0df82b7a7448878f1ff8109964b43e28abeab6a764b3ba1df3f88f2afe5baf1e6026e0ad827c59001305c5e2",
    READ_ONLY_TOKEN:"3e513f77fe642a2add2ad30ed4cf42651e3fd1300cd9329aba718b66e0e400e8d8daf00467133f4f17697bd889d3e0e0d29b46e44939bf0936e9b9d194b3dc8f69221f06489aea245083bbde1897ebd584512598be2661b2b6f3d41955f3ace8eb1750e0f76e176bb6ea4ea2dfbf277a7384bc308f1121f4ed43ac206bb42f86",
  },
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: [
      "localhost",
      "meta-floor-strapi-app.herokuapp.com",
      "cloudinary.com",
      "res.cloudinary.com",
    ],
  },
  optimization: {
    runtimeChunk: "single",
  },
};

module.exports = nextConfig;
