import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ignore TypeScript errors during production build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Optionally, you can ignore ESLint errors during build as well
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
