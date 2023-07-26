/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    basePath: process.env.BASE_PATH,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'github.com',
              port: '',
            },
            {
              protocol: 'https',
              hostname: 'cdn.imagin.studio',
              port: ''
            }
          ],
    },
}

module.exports = nextConfig
