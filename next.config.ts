import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/Portfolio' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/Portfolio' : ''
  }
};

export default nextConfig;
