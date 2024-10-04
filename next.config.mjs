// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = { images: {
    remotePatterns: [{ hostname: 'images.unsplash.com' }],
  },
};

export default withPlaiceholder(nextConfig);
