/** @type {import('next').NextConfig} */
// import * as unoConfig from 'uno.config.ts'

const nextConfig = {
    // webpack: (config) => {
    //     if (context.buildId !== "development") {
    //         config.cache = false;
    //     }
    //     config.plugins.push(
    //       unoConfig
    //     )
    //     return config
    // },
    // experimental: {
    //     webpackBuildWorker: true,
    // },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'rekreartive.com',
            port: '',
            pathname: '/wp-content/**',
          },
          {
            protocol: 'https',
            hostname: 'media.licdn.com',
            port: '',
            pathname: '/**',
          },
        ],
    },
}

module.exports = nextConfig
