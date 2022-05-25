/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: "https://floors-app-lz6o6.ondigitalocean.app",
    GOOGLE_MAP_API_KEY:"AIzaSyBpK2K9D5QfMMiTVdsgz9cSjoKcXmhRsOo",
    FULL_ACCESS_TOKEN:"95181fce83979d2bc7254bd60664bb96a0f23c0cc334b3233a726d0a8b2f983fa826a50a4e3c1dcfd44446bbb45f460cfab60f4bc8e30c3c6ef50d08d5836c18e64c5765d13bbdef1bdaf2829f9f6407ca44ec7ceae49c5efa388148511d4d2ebeb50278823f3cfbdfa5cc3cd12cfa6f0b1c7c1ee5c3341b86326448781f64a5",
    READ_ONLY_TOKEN:"f30b2605047a0f61a84fdad6e39f510ba8eae88bc9c625dddfde69853eaeb1d54d8042daff6a9abef564f7d361e2bf954ebd976ebaf43a57e146d71a869ded0bd01097034d3cf921874e61bb79bbcf26798b034beb14ddde6da39ed362684dac15f0865a449145da24e01b8e53b00eae1d7a5c508c8bf2d5c25e8efc8aa8e35f",
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
