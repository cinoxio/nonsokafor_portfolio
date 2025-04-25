import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const config: NextConfig = {
    experimental: {
        viewTransition: true,
    },
};

export default withNextIntl(config);

