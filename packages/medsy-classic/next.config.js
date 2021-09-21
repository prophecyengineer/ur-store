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
    domains: [
      's3.amazonaws.com',
      'scontent.cdninstagram.com',
      'i.gifer.com',
      'cdn.vox-cdn.com',
      'tyinternety.cz',
      'encrypted-tbn0.gstatic.com',
      'media3.giphy.com',
      'lh3.googleusercontent.com',
      'encrypted-tbn0.gstatic.com',
      '64.media.tumblr.com',
      'img.rarible.com',
      'upload.wikimedia.org',
    ],
  },
};

module.exports = withPlugins([withOptimizedImages], nextConfig);
