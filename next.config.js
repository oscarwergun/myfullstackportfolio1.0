/** @type {import('next').NextConfig} */
const os = require('os');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: [
      "cdn.sanity.io",
    ],
  },
  webpack(config) {
    if (os.platform() === 'linux' && os.arch() === 'x64') {
      config.resolve.alias['@next/swc'] = '@next/swc-linux-x64';
    } else if (os.platform() === 'darwin' && os.arch() === 'arm64') {
      config.resolve.alias['@next/swc'] = '@next/swc-darwin-arm64';
    }
    return config;
  }
};
