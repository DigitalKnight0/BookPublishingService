import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // The Figma artwork is already prepared in its display format. Serving the
    // files directly avoids a second lossy resize/compression pass in Next.js.
    unoptimized: true,
  },
};

export default nextConfig;
