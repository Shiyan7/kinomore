const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache')
const withPlugins = require('next-compose-plugins');

const nextConfig = {
    images: {
        domains: ['st.kp.yandex.net'],
    }
};

module.exports = withPlugins([
    [withPWA, {
        pwa: {
            dest: 'public',
            runtimeCaching
        }
    }]
], nextConfig)