/* global self, workbox */
/* eslint-disable no-restricted-globals, no-underscore-dangle */

// See https://developers.google.com/web/tools/workbox/guides/configure-workbox
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('push', (event) => {
  const { title, text } = JSON.parse(event.data.text());
  self.registration.showNotification(title, {
    body: text,
    icon: '/img/logo.82b9c7a5.png',
  });
});

// Offline queueing
const queue = new workbox.backgroundSync.Queue('myQueueName');
self.addEventListener('fetch', (event) => {
  const regex = /:4567\/items.json/;
  if (event.request.url.match(regex) && event.request.method === 'POST') {
    // Clone the request to ensure it's save to read when adding to the Queue.
    const promiseChain = fetch(event.request.clone())
      .catch(() => {
        console.log(queue);
        return queue.addRequest(event.request);
      });

    event.waitUntil(promiseChain);
  }
});

// Cache 3rd party assets
workbox.routing.registerRoute(
  new RegExp('https:.*min\.(css|js)'),
  workbox.strategies.staleWhileRevalidate(),
);

// Cache images
workbox.routing.registerRoute(
  new RegExp(/\.(?:png|gif|jpg|jpeg|svg)$/),
  workbox.strategies.staleWhileRevalidate(),
);

// Cache API calls
workbox.routing.registerRoute(
  new RegExp('http://.*:4567.*\.json'),
  workbox.strategies.networkFirst(),
);

// We need this in Webpack plugin (refer to swSrc option): https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_injectmanifest_config
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

// app-shell
workbox.routing.registerRoute('/', workbox.strategies.networkFirst());
/* eslint-enable no-restricted-globals, no-underscore-dangle */
