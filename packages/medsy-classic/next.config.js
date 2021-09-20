// const isProd = process.env.NODE_ENV === 'production';

// const withPWA = require('next-pwa');

// module.exports = withPWA({
//   pwa: {
//     disable: !isProd,
//     dest: 'public',
//   },
// });

const { withPlugins } = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

// next.js configuration
const nextConfig = {
  images: {
    // sizes: [320, 480, 820, 1200, 1600],
    disableStaticImages: true,
    domains: ['s3.amazonaws.com', 'scontent.cdninstagram.com'],
  },
};

module.exports = withPlugins([withOptimizedImages], nextConfig);
