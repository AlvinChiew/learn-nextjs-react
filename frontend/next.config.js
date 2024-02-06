/** @type {import('next').NextConfig} */
module.exports = {
  //   output: 'export', // for static webpage only, export html to out/ folder, test locally via `npx serve@latest out`
  images: {
    // unoptimized: true,
    // loader: 'imgix',
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  },
};
