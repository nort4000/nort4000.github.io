import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "@phosphor-icons/react"],
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
