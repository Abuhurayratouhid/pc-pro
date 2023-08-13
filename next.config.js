/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://imgbb.com/", "plus.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        // port: "",
        // pathname: "",
      },
    ],
  },
};

module.exports = nextConfig;
