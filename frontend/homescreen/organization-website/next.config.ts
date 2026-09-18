import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // These settings authorize external domains for next/image
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // For your current mockups
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // Pre-configuring for Sanity integration
      },
    ],
  },
  // Add other standard Next.js config options here if needed,
  // making sure they align with the NextConfig type.
};

export default nextConfig;