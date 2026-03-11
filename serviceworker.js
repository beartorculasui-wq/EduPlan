self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("eduplanner-cache").then(function(cache) {
      return cache.addAll(["index.html"]);
    })
  );
});