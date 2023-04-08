const isProd = process.env.NODE_ENV === 'production'


const nextConfig = {
  assetPrefix: isProd ? '/rahulschand.github.io/' : '',
  images: {
    unoptimized: true,
  },
}


module.exports = nextConfig
