/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    basePath: "./",
    // trailingSlash: true,
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
