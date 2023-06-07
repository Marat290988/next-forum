/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    // JWT_SECRET: process.env.JWT_SECRET
  }
}

module.exports = nextConfig
