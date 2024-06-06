/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'bizweb.dktcdn.net',
            port: '',
          },
        ],
      },
};

export default nextConfig;
