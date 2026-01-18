self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("kids-game-cache").then(cache => {
      return cache.addAll([
        "/kids-game/",
        "/kids-game/index.html",
        "/kids-game/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
