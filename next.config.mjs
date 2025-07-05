/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"images.pexels.com"
      }
    ]
  }
};

export default nextConfig;