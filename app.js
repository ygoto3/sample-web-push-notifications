'use strict';

document.addEventListener('DOMContentLoaded', function (e) {

  if (!'serviceWorker' in navigator) {
    console.log('Service Worker is not supported.');
    return;
  }

  navigator.serviceWorker.register('./service-worker.js').then(function (registration) {

    console.log('service worker is ready: ', registration);
    registration.pushManager.subscribe({
      userVisibleOnly: true
    }).then(function (subscription) {
      console.log('endpoint: ', subscription.endpoint);
      console.log('subscription ID: ', subscription.endpoint.split("/").pop());
    });

  }).catch(function (error) {

    console.log(error);

  });

});
