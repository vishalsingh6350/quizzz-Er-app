const cacheName = 'quizzerCache-v14'
self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(cacheName).then((cache) => {
            cache.addAll([
                '/index.html',
                'static/js/bundle.js',
                '/static/js/vendors~main.chunk.js',
                'static/js/main.chunk.js',
                'https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Russo+One&family=Poppins:wght@400;500;600;700&display=swap',
                'https://fonts.gstatic.com/s/dmserifdisplay/v5/-nFnOHM81r4j6k0gjAW3mujVU2B2G_Bx0vrx52g.woff2',
                'https://fonts.gstatic.com/s/russoone/v9/Z9XUDmZRWg6M1LvRYsHOz8mJvLuL9A.woff2',
                'https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2',
                'static/media/desktop-hero-image.6f009fd0.svg',
                '/static/media/mathematicsChoice-btn.3a1ce826.svg',
                '/static/media/computerChoice-btn.f1d6d852.svg',
                '/static/media/sportsChoice-btn.be394ec8.svg',
                '/static/media/RandomChoice-btn.e9ff9571.svg',
                '/static/media/mobile-bg-image.46be2772.svg',
                '/favicon.ico',
                '/',
            ])
        }).catch((err) => console.log(err))
    )
})
self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            keys.filter(key => key !== cacheName).map(key => caches.delete(key));
        })
    )
})
self.addEventListener('fetch', evt => {
    evt.respondWith(
        caches.match(evt.request).then((cacheRes) => cacheRes || fetch(evt.request))
    )
})