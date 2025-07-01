import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://cdn.weatherapi.com/weather/128x128/**')],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
