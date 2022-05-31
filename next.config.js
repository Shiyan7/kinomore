const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache')
const withPlugins = require('next-compose-plugins');
const withVideos = require('next-videos')

const nextConfig = {
    images: {
        domains: ['st.kp.yandex.net', 'avatars.mds.yandex.net', 'www.themoviedb.org'],
    },
};

module.exports = withPlugins([
    [withPWA, {
        pwa: {
            dest: 'public',
            runtimeCaching,
        }
    }],
    [withVideos]
], nextConfig)