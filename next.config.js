/** @type {import('next').NextConfig} */
const repo = "cars-showcase";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
    output: 'export',
    basePath: basePath,
    assetPrefix: assetPrefix,
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
