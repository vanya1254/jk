/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.goat.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
