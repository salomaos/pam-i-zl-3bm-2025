self.addEventListener("install", () => {
  caches.open("tarefas").then((cache) => {
    cache.addAll([
        "/pam-i-zl-3bm-2025/index.html", 
        "/pam-i-zl-3bm-2025/manifest.json", 
        "/pam-i-zl-3bm-2025/script.js", 
        "/pam-i-zl-3bm-2025/sw.js"
    ]);
  });
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
