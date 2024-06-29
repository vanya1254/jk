/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.goat.com",
        port: "",
      },
    ],
  },
  basePath: "/jk",
  assetPrefix: "/js",
};

export default nextConfig;
