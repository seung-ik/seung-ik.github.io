/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production'
const name = 'tradepr'
const nextConfig = {
  assetPrefix: !debug ? `/${name}/` : '',
  reactStrictMode: true,
  distDir: 'build',
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};

module.exports = nextConfig
