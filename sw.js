/* Service worker della visita: «Scarica la visita» mette in cache audio, video, panorami e pianta.
   Funziona solo se la pagina è servita via http(s). */
var CACHE = 'chiesa-sim1-v1';
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('message', function (e) {
  var d = e.data || {};
  if (d.tipo !== 'scarica' || !Array.isArray(d.urls)) return;
  var porta = e.ports && e.ports[0];
  var ok = 0, ko = 0, tot = d.urls.length;
  caches.open(CACHE).then(function (c) {
    return Promise.all(d.urls.map(function (u) {
      return fetch(u, { mode: 'cors' }).then(function (r) { if (!r.ok) throw 0; return c.put(u, r); }).then(function () { ok++; }).catch(function () { ko++; });
    }));
  }).then(function () { if (porta) porta.postMessage({ ok: ok, ko: ko, tot: tot }); });
});
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: false }).then(function (r) { return r || fetch(e.request); }));
});
