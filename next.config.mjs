/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/business-card",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
