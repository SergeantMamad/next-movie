/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized:true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname:"picsum.photos"
      }
    ],
  },
};

export default nextConfig;
