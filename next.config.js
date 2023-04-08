const isProd = process.env.NODE_ENV === 'production'


const nextConfig = {
  assetPrefix: isProd ? '/rsc-deploy/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
