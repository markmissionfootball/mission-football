/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "missionfootball.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "blastathletics.s3.amazonaws.com",
        pathname: "/uploads/picture/file/**",
      },
    ],
  },
};

export default nextConfig;
