/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["localhost"],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/api/obituaryUploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/api/companyUploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/api/cemetryUploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/api/floristShopUploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/api/floristSlideUploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/api/packageUploads/**",
      },

      // ✅ dev112 patterns (use https if it supports SSL)
      {
        protocol: "https",
        hostname: "dev112.osmrtnica.com",
        pathname: "/api/obituaryUploads/**",
      },
      {
        protocol: "https",
        hostname: "dev112.osmrtnica.com",
        pathname: "/api/companyUploads/**",
      },
      {
        protocol: "https",
        hostname: "dev112.osmrtnica.com",
        pathname: "/api/cemetryUploads/**",
      },
      {
        protocol: "https",
        hostname: "dev112.osmrtnica.com",
        pathname: "/api/floristShopUploads/**",
      },
      {
        protocol: "https",
        hostname: "dev112.osmrtnica.com",
        pathname: "/api/floristSlideUploads/**",
      },
      {
        protocol: "https",
        hostname: "dev112.osmrtnica.com",
        pathname: "/api/packageUploads/**",
      },
    ],
  },
};

export default nextConfig;
