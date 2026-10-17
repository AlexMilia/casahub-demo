/* Service worker della visita raccontata: la pagina funziona anche senza rete.
   - involucro (pagina, dati, librerie, caratteri): rete prima, cache se manca la rete; si aggiorna da solo
   - panorami, audio, video, foto: cache prima (una volta scaricati non si riscaricano)
   - richieste «Range» (audio e video) servite dalla cache con risposta 206, come vuole Safari
   - messaggi dalla pagina: 'shell' (salva l'involucro), 'stato' (quanti file sono già in cache), 'scarica' (scarica una lista con avanzamento) */
var VERSIONE = 'chiesa-v4';   /* cambiala a ogni pubblicazione importante: i vecchi salvataggi si cancellano da soli */
var SHELL = VERSIONE + '-shell', MEDIA = VERSIONE + '-media';
var RE_MEDIA = /\.(jpe?g|png|webp|mp3|mp4|webm|vtt|woff2?|ttf)(\?|$)/i;
var RE_LIB = /^https:\/\/(cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net|fonts\.googleapis\.com|fonts\.gstatic\.com|unpkg\.com)\//;

self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (k) {
    return Promise.all(k.filter(function (n) { return n.indexOf(VERSIONE) !== 0 && n.indexOf('chiesa-') === 0; }).map(function (n) { return caches.delete(n); }));
  }).then(function () { return self.clients.claim(); }));
});

function chiave(u) { return u.split('#')[0]; }
function salvabile(r) { return r && (r.ok || r.type === 'opaque'); }

function daCache(nome, req) {
  return caches.open(nome).then(function (c) { return c.match(req, { ignoreSearch: false }); });
}
/* risposta parziale (206) da una risposta intera in cache */
function parziale(resp, range) {
  var m = /bytes=(\d*)-(\d*)/.exec(range || '');
  if (!m || resp.type === 'opaque') return resp;
  return resp.blob().then(function (b) {
    var tot = b.size, a = m[1] ? parseInt(m[1], 10) : 0, z = m[2] ? parseInt(m[2], 10) : tot - 1;
    if (!m[1] && m[2]) { a = tot - parseInt(m[2], 10); z = tot - 1; }
    z = Math.min(z, tot - 1);
    if (a >= tot) return new Response(null, { status: 416, headers: { 'Content-Range': 'bytes */' + tot } });
    var h = new Headers(resp.headers);
    h.set('Content-Range', 'bytes ' + a + '-' + z + '/' + tot); h.set('Content-Length', String(z - a + 1)); h.set('Accept-Ranges', 'bytes');
    return new Response(b.slice(a, z + 1), { status: 206, statusText: 'Partial Content', headers: h });
  });
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var u = req.url, range = req.headers.get('range');
  var navigazione = req.mode === 'navigate';
  var media = RE_MEDIA.test(u), lib = RE_LIB.test(u);

  if (media || (lib && !navigazione)) {
    /* cache prima */
    e.respondWith(caches.match(chiave(u)).then(function (r) {
      if (r) return range ? parziale(r, range) : r;
      if (range) return fetch(req);                        /* parziale non in cache: dalla rete, senza salvarlo */
      return fetch(req).then(function (net) {
        if (salvabile(net)) { var cp = net.clone(); caches.open(lib ? SHELL : MEDIA).then(function (c) { c.put(chiave(u), cp); }); }
        return net;
      });
    }));
    return;
  }
  /* pagina e dati: rete prima, cache se manca la rete */
  var stessaOrigine = u.indexOf(self.location.origin) === 0;
  if (!stessaOrigine) return;
  /* rete prima, chiedendo sempre al server se c'è una versione nuova (niente copia vecchia della cache del browser) */
  var fresca = navigazione ? fetch(u, { cache: 'no-cache', credentials: 'same-origin' }) : fetch(new Request(req, { cache: 'no-cache' }));
  e.respondWith(fresca.then(function (net) {
    if (net.ok) { var cp = net.clone(); caches.open(SHELL).then(function (c) { c.put(navigazione ? chiave(u).split('?')[0] : chiave(u), cp); }); }
    return net;
  }).catch(function () {
    return caches.open(SHELL).then(function (c) {
      return c.match(navigazione ? chiave(u).split('?')[0] : chiave(u), { ignoreSearch: navigazione });
    }).then(function (r) { return r || new Response('Senza rete e pagina non ancora salvata.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } }); });
  }));
});

/* ---------- messaggi dalla pagina ---------- */
function inCache(u) { return caches.match(chiave(u)).then(function (r) { return !!r; }); }
function scaricaUno(u, nome) {
  return inCache(u).then(function (c) {
    if (c) return true;
    var lib = RE_LIB.test(u), estero = u.indexOf(self.location.origin) !== 0 && !lib;
    return fetch(u, { mode: estero ? 'no-cors' : 'cors', credentials: 'omit' }).then(function (r) {
      if (!salvabile(r)) throw 0;
      return caches.open(nome || (lib ? SHELL : MEDIA)).then(function (c) { return c.put(chiave(u), r); });
    }).then(function () { return true; }, function () { return false; });
  });
}
self.addEventListener('message', function (e) {
  var d = e.data || {}, porta = e.ports && e.ports[0];
  var urls = Array.isArray(d.urls) ? d.urls.filter(function (x, i, a) { return x && a.indexOf(x) === i; }) : [];
  if (d.tipo === 'shell') {
    e.waitUntil(Promise.all(urls.map(function (u) { return scaricaUno(u, SHELL); })).then(function () { if (porta) porta.postMessage({ fine: true }); }));
  } else if (d.tipo === 'stato') {
    e.waitUntil(Promise.all(urls.map(inCache)).then(function (v) { if (porta) porta.postMessage({ fatti: v.filter(Boolean).length, tot: urls.length, fine: true }); }));
  } else if (d.tipo === 'scarica') {
    var fatti = 0, ko = 0, i = 0, tot = urls.length, ultimo = 0;
    function avvisa(fine) { var ora = Date.now(); if (porta && (fine || ora - ultimo > 400)) { ultimo = ora; porta.postMessage({ fatti: fatti, ko: ko, tot: tot, fine: !!fine }); } }
    function lavoratore() {
      if (i >= tot) return Promise.resolve();
      var u = urls[i++];
      return scaricaUno(u).then(function (ok) { if (ok) fatti++; else ko++; avvisa(false); return lavoratore(); });
    }
    e.waitUntil(Promise.all([lavoratore(), lavoratore(), lavoratore()]).then(function () { avvisa(true); }));
  }
});
