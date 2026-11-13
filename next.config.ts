import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/work/",
        permanent: true,
      },
      {
        source: "/projects/:path*",
        destination: "/work/:path*",
        permanent: true,
      },
      {
        source: "/blogs",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blogs/:path*",
        destination: "/blog/:path*",
        permanent: true,
      },
      {
        source: "/designs",
        destination: "/design/",
        permanent: true,
      },
      {
        source: "/designs/:path*",
        destination: "/design/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
