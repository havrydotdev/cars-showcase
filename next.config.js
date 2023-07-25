/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    basePath: process.env.BASE_PATH,
    trailingSlash: process.env.TRAILING_SLASH,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'github.com',
              port: '',
            },
          ],
    },
}

module.exports = nextConfig
