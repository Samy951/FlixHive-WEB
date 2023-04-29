/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
  }
}
const withTM = require('next-transpile-modules')(["react-icons"]);

module.exports = withTM({})
module.exports = nextConfig
