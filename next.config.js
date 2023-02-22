/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputFileTracingIncludes: {
      '/api/query': ['node_modules/**/compressjs*/**/*']
    }
  },
}

module.exports = nextConfig