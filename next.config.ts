import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/klyven",
  images: {
    unoptimized: true,
  },
  transpilePackages: [
    "three",
    "@react-three/fiber",
    "@react-three/drei",
    "@react-three/postprocessing",
  ],
};

export default nextConfig;
