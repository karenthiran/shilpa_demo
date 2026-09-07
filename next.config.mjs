/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['www.qcsstudio.com','qcsstudio.vercel.app' , 'lh3.googleusercontent.com','media.licdn.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: `shilpa-advisors.s3.eu-north-1.amazonaws.com`,
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
      {
        protocol: "https",
        hostname: "img1.wsimg.com",
      },
      {
        protocol: "https",
        hostname: "isfsrilanka.org",
      },
    ],
  },


  async headers() {
    return [
      {
        // Cache Images, Fonts, Icons for 1 Year
        source: "/:all*(png|jpg|jpeg|gif|svg|webp|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache JS & CSS for 1 Week
        source: "/:all*(js|css)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, immutable",
          },
        ],
      },
      {
        // Cache Next.js static files
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

};

export default nextConfig;
