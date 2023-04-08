const isProd = process.env.NODE_ENV === 'production'


const nextConfig = {
  assetPrefix: isProd ? '/RahulSChand.github.io/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
