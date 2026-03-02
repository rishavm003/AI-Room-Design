/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'interior-79c36.appspot.com',
      'replicate.delivery',
      'pbxt.replicate.delivery',
      'replicate.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ],
    dangerouslyAllowSVG: true,
    unoptimized: true
  }
};

export default nextConfig;
