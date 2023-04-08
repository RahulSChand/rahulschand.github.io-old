const isProd = process.env.NODE_ENV === 'production'


const nextConfig = {
  images: {
    unoptimized: true,
  },
}


module.exports = nextConfig
