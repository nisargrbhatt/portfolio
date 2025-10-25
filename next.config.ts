import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typedRoutes: true,
  reactStrictMode: true,
  experimental: {
    mdxRs: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "engine-docs.nisargbhatt.org",
      },
    ],
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
