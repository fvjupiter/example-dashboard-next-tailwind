/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // exportTrailingSlash: true,
  // assetPrefix: './', // for next export
  images: {
    // loader: "akamai", //for next export 
    // path: '', //for next export
    domains: [
      'heise.cloudimg.io',
      'i.ibb.co',
      'images.unsplash.com',
    ]
  }
}

module.exports = nextConfig
