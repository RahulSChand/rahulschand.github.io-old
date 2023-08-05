const isProd = process.env.NODE_ENV === 'production'


const nextConfig = {
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
}


module.exports = nextConfig
