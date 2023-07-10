/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/upload",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8080/api/upload"
            : "/api/",
      },
    ];
  },
};

module.exports = nextConfig
