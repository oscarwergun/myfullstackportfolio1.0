/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: [
      "scontent.fmmx3-1.fna.fbcdn.net",
      "z3d9h8m9.stackpathcdn.com",
      "logodix.com",
      "codeguruozzy.com",
    ],
  },
};
