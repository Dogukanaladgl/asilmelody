import type { NextConfig } from "next";
import os from "os";

/** Local network IPs so phone/LAN access can load Next.js JS chunks in dev. */
function localNetworkHosts() {
  const hosts = new Set<string>(["localhost", "127.0.0.1"]);

  for (const interfaces of Object.values(os.networkInterfaces())) {
    for (const item of interfaces ?? []) {
      const isV4 = item.family === "IPv4" || (item.family as unknown) === 4;
      if (isV4 && !item.internal) {
        hosts.add(item.address);
      }
    }
  }

  return [...hosts];
}

const nextConfig: NextConfig = {
  allowedDevOrigins: localNetworkHosts(),
  images: {
    // AVIF bazen yumuşak görünebilir; WebP + yüksek kalite daha net
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1600, 1920, 2048, 2560],
    imageSizes: [64, 96, 128, 256, 384, 512, 640, 768, 1024],
    qualities: [75, 85, 90, 95, 100],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
