// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Set the basePath and assetPrefix only in production
  assetPrefix: isProd ? "https://WinstonLam.github.io/EastFeast" : "",
  basePath: isProd ? "/EastFeast" : "",
  output: "export",
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

export default nextConfig;
