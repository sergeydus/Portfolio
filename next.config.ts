import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
    path: '/Portfolio/',
  },
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
};

export default nextConfig;
