/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "media.dev.to" }],
  },
};

export default nextConfig;
