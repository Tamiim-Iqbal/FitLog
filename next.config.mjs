/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.magnific.com",
            },
        ],
    },
};

export default nextConfig;
