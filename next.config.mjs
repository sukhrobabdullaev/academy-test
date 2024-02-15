/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "media.dev.to" },
      { hostname: "img.clerk.com" },
      { hostname: "media.graphassets.com" },
    ],
  },
};

export default nextConfig;
