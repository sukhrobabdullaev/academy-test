/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "media.dev.to" },
      { hostname: "img.clerk.com" },
    ],
  },
};

export default nextConfig;
