module.exports = {
  output: 'export',
  assetPrefix: './', // Ensure this is present
  images: {
    unoptimized: true, // If you're using Next.js image optimization, disable it for static export
  },
};
