'use strict';

console.log('service worker started: ', self);

self.addEventListener('install', function (e) {
  self.skipWaiting();
  console.log('service worker installed: ', e);
});

self.addEventListener('activate', function (e) {
  console.log('service worker activated: ', e);
});

self.addEventListener('push', function (e) {
  console.log('service worker received a message: ', e);
  e.waitUntil(
    self.registration.showNotification('Push Notification from ygoto3', {
      body: 'This is a message from GCM.',
      icon: 'https://avatars3.githubusercontent.com/u/5054506?v=3&u=4173e7ed8fccfeebf376e7325cafeacd070e07c2&s=192',
      tag: 'id-4-given-notification'
    })
  );
});
