/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    runtime: "experimental-edge",
    outputFileTracingIncludes: {
      '/api/query': ['node_modules/**/compressjs*/**/*']
    }
  },
}

module.exports = nextConfig