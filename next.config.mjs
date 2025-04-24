/** @type {import('next').NextConfig} */
const nextConfig = {
    // distDir: "docs",
    output: "export",
    // assetPrefix: "https://aqibashef.github.io/",
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    // basePath: "//aqibashef.github.io",
};

export default nextConfig;
