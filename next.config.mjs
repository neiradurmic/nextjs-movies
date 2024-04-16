/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.tvmaze.com',
      },
    ],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
}
export default nextConfig
