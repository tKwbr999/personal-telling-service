/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // .env* ファイルをホットリロードの監視対象から除外
    // config.watchOptions = {
    //   ignored: ['**/.env*'],
    // };
    return config;
  },
};

export default nextConfig;
