/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // assetPrefix: './',
  images: {
    // loader: "akamai",
    // path: '',
    domains: [
      'heise.cloudimg.io',
    ]
  }
}

module.exports = nextConfig
