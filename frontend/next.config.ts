import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
    output: "export",
    distDir: path.resolve(__dirname, "../client"),
};

export default nextConfig;
