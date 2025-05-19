/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["localhost"],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "dev112.osmrtnica.com",
      //   port: "", // Omit the port since it's not specified for production
      //   pathname: "/api/obituaryUploads/**", // Match the path for your images
      // },

      {
        protocol: "http",
        hostname: "localhost",
        port: "4000", // Omit the port since it's not specified for production
        pathname: "/api/obituaryUploads/**", // Match the path for your images
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000", // Omit the port since it's not specified for production
        pathname: "/api/companyUploads/**", // Match the path for your images
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000", // Omit the port since it's not specified for production
        pathname: "/api/cemetryUploads/**", // Match the path for your images
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000", // Omit the port since it's not specified for production
        pathname: "/api/floristShopUploads/**", // Match the path for your images
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000", // Omit the port since it's not specified for production
        pathname: "/api/floristSlideUploads/**", // Match the path for your images
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000", // Omit the port since it's not specified for production
        pathname: "/api/packageUploads/**", // Match the path for your images
      },
    ],
  },
};

export default nextConfig;
