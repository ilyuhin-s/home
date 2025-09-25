const CACHE_NAME = "my-pwa-v1";
const urlsToCache = [
  "/home/",
  "/home/index.html",
  "/home/style.css",
  "/home/icons/icon-192.png",
  "/home/icons/icon-512.png",
];

// Установка кэша при установке SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Обработка запросов — возвращаем из кэша или из сети
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
