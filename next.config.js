/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    assetPrefix: ".",
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
