/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {
  
  images: {
    domains: [
      'loremflickr.com'
    ]
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = withPlugins([[withImages]], nextConfig)

