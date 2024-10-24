/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["vercel.com", "localhost"],
  },
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
};

const withNextIntl = require("next-intl/plugin")("./i18n.ts");

module.exports = withNextIntl(nextConfig);
