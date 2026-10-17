/* ============================================================
   «Chiedi alla chiesa» — il pacchetto di conoscenza
   Trasforma i dati della pagina (dati/santuario.js) in brevi passaggi con fonte e stato.
   Lo usano in due:
     - la pagina, per rispondere anche SENZA rete (cerca i passaggi più vicini alla domanda);
     - esporta_kb.js, che scrive lo stesso pacchetto in JSON per il server ASK Trapani.
   Stato di ogni passaggio:
     'verificato'  → opere con attribuzione verificata
     'fonte_web'   → orari, contatti, come arrivare (fonti ufficiali sul web)
     'da_validare' → testi del racconto e delle scene, in attesa del parroco
   Le opere «proposta» o «da_completare» non entrano mai.
   ============================================================ */
(function (root) {
  function pulito(s) { return String(s == null ? '' : s).replace(/\s+/g, ' ').trim(); }
  function unisci(a) { return a.filter(function (x) { return x && pulito(x); }).map(pulito).join(' '); }

  function costruisciKB(D) {
    var L = D.luogo || {}, P = [];
    function add(p) { if (p.testo && p.testo.length > 12) P.push(p); }
    var scenaSlug = {}; (D.scene || []).forEach(function (s) { scenaSlug[s.id] = s.slug; });

    /* ---- il luogo ---- */
    add({ id: 'info:luogo', tipo: 'info', ref: null, titolo: L.nome, stato: 'da_validare',
      testo: unisci([L.nome + ', ' + (L.comune || '') + '.', L.descrizione_breve, L.descrizione,
        L.epoca_costruzione ? 'Epoca di costruzione: ' + L.epoca_costruzione + '.' : '',
        L.patrono ? 'Patrona: ' + L.patrono + '.' : ''] ) });
    if (L.festa_patronale) add({ id: 'info:festa', tipo: 'info', ref: null, titolo: 'La festa', stato: 'fonte_web',
      testo: 'Festa patronale: ' + L.festa_patronale + '.' });
    if (L.orari_visita || L.orari_celebrazioni) add({ id: 'info:orari', tipo: 'info', ref: 'info', titolo: 'Orari', stato: 'fonte_web',
      fonte: L.calendario ? (L.calendario.fonte_messe + ' · ' + L.calendario.fonte_apertura) : null,
      testo: unisci(['Apertura: ' + (L.orari_visita || 'non indicata') + '.', 'Messe: ' + (L.orari_celebrazioni || 'non indicate') + '.',
        L.calendario && L.calendario.estate ? 'L’orario estivo delle messe vale da giugno a settembre.' : '',
        'Durante le funzioni la visita è sospesa.', 'Nei giorni della festa, a fine agosto, gli orari cambiano.']) });
    if (L.contatti) add({ id: 'info:contatti', tipo: 'info', ref: 'info', titolo: 'Contatti', stato: 'fonte_web',
      testo: unisci([L.contatti.telefono ? 'Telefono del santuario: ' + L.contatti.telefono + '.' : '',
        L.contatti.mail ? 'Email: ' + L.contatti.mail + '.' : '',
        L.contatti.whatsapp ? 'Per informazioni sulla visita si può scrivere su WhatsApp al ' + L.contatti.whatsapp + '.' : '']) });
    if (L.come_arrivare) add({ id: 'info:arrivare', tipo: 'info', ref: 'info', titolo: 'Come arrivare', stato: 'fonte_web', testo: L.come_arrivare });
    if (L.accessibilita) add({ id: 'info:accessibilita', tipo: 'info', ref: 'barriere', titolo: 'Accessibilità', stato: L.accessibilita.verificata ? 'verificato' : 'da_validare',
      testo: unisci([L.accessibilita.nota, L.accessibilita.bagno_accessibile ? 'C’è un bagno accessibile.' : '', L.accessibilita.sedute ? 'Ci sono sedute.' : ''] ) });
    (L.prosegui || []).forEach(function (x, i) {
      add({ id: 'info:prosegui-' + (i + 1), tipo: 'info', ref: 'info', titolo: x.nome, stato: 'fonte_web', testo: unisci([x.nome + ' (' + x.dist + '):', x.desc]) });
    });

    /* ---- i capitoli del racconto ---- */
    (D.capitoli || []).forEach(function (c) {
      add({ id: 'cap:' + c.id, tipo: 'capitolo', ref: c.id, titolo: 'Capitolo ' + c.n + ' · ' + c.titolo, stato: c.stato_testo || 'da_validare',
        testo: unisci([c.sottotitolo ? c.sottotitolo + '.' : '', c.trascrizione || c.breve]) });
      if (c.scoperta && c.scoperta.txt) add({ id: 'cap:' + c.id + ':scoperta', tipo: 'capitolo', ref: c.id, titolo: c.scoperta.tit, stato: c.stato_testo || 'da_validare', testo: c.scoperta.txt });
    });

    /* ---- le scene del cammino ---- */
    (D.scene || []).forEach(function (s) {
      add({ id: 'scena:' + s.slug, tipo: 'scena', ref: s.slug, titolo: s.titolo, stato: s.stato_testo || 'da_validare',
        testo: unisci([s.descrizione_scena, s.trascrizione || s.testo]) });
    });

    /* ---- le opere (solo verificate) ---- */
    (D.opere || []).forEach(function (o) {
      if (o.stato !== 'verificata') return;
      var princ = (o.scene || []).filter(function (x) { return x.principale; })[0] || (o.scene || [])[0];
      add({ id: 'opera:' + o.slug, tipo: 'opera', ref: o.slug, scena: princ ? scenaSlug[princ.scena] : null, titolo: o.titolo, stato: 'verificato',
        fonte: o.fonte_attribuzione || null,
        testo: unisci([o.titolo + (o.tipo ? ' (' + o.tipo + ')' : '') + '.', o.autore ? 'Autore: ' + o.autore + '.' : '', o.datazione ? 'Datazione: ' + o.datazione + '.' : '',
          o.breve, o.curiosita, o.trascrizione, o.trascrizione_voce2]) });
      if (o.dettagli && o.dettagli.length) add({ id: 'opera:' + o.slug + ':dettagli', tipo: 'opera', ref: o.slug, scena: princ ? scenaSlug[princ.scena] : null,
        titolo: o.titolo + ' · i dettagli', stato: 'verificato', testo: o.dettagli.map(function (d) { return d.tit + ': ' + d.txt; }).join(' ') });
    });

    return {
      luogo: L.slug, nome: L.nome, versione: D.versione || null,
      voce: L.voce ? { nome: L.voce.nome, ruolo: L.voce.ruolo } : null,
      contatto_fallback: L.contatti ? { whatsapp: L.contatti.whatsapp, telefono: L.contatti.telefono } : null,
      politica: { solo_validati: false, nota: 'Finché il parroco non valida i testi, le risposte possono usare anche i passaggi «da_validare» e lo dicono.' },
      passaggi: P
    };
  }

  /* ---- ricerca locale (senza rete): BM25 con parole normalizzate ---- */
  var STOP = ('il lo la i gli le un uno una di a da in con su per tra fra e o ma se che chi cui non piu più del dello della dei degli delle al allo alla ai agli alle dal dallo dalla dai dagli dalle nel nello nella nei negli nelle sul sullo sulla sui sugli sulle ' +
    'come cosa quale quali quando dove perche perché quanto quanti questo questa questi queste quello quella e è sono era ha hanno ci si mi ti vi ne c sei sta stato ' +
    'the a an of to in on at for and or is are was what who when where why how which this that it from with can i you there do does').split(' ');
  var STOPSET = {}; STOP.forEach(function (w) { STOPSET[w] = 1; });
  function norm(w) { return w.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); }
  /* radice: le prime 6 lettere (dipinto/dipinta/dipinti → dipint; parcheggio/parcheggiare → parche) */
  function radice(w) { return w.length > 6 ? w.slice(0, 6) : (w.length > 4 ? w.slice(0, -1) : w); }
  /* poche parole che la gente usa al posto di quelle dei testi (anche in inglese, per quando manca la rete) */
  var SINONIMI = { dipint: 'autor', pittor: 'autor', paint: 'autor', painte: 'autor', artist: 'autor', scolpi: 'autor', sculpt: 'autor',
    parche: 'parche', park: 'parche', parkin: 'parche',
    messa: 'messa', mess: 'messa', mass: 'messa', funzio: 'messa', celebr: 'messa',
    orari: 'orari', orario: 'orari', apert: 'orari', aperto: 'orari', apre: 'orari', chiude: 'orari', chius: 'orari', open: 'orari', hour: 'orari', hours: 'orari',
    bagn: 'bagno', bagno: 'bagno', toilet: 'bagno', wc: 'bagno', disabi: 'access', carroz: 'access', wheelc: 'access', access: 'access',
    quadr: 'quadr', painti: 'quadr', pictur: 'quadr', madonn: 'madonn', madonna: 'madonn', ship: 'nave', boat: 'nave', nav: 'nave', nave: 'nave', sea: 'mare', feast: 'festa', festa: 'festa' };
  function parole(t) {
    return norm(String(t || '')).split(/[^a-z0-9]+/).filter(function (w) { return w.length > 1 && !STOPSET[w]; })
      .map(function (w) { var r = radice(w); return SINONIMI[r] || SINONIMI[w] || r; });
  }
  function indice(kb) {
    var docs = kb.passaggi.map(function (p) { var w = parole(p.titolo + ' ' + p.titolo + ' ' + p.testo); return { p: p, w: w, n: w.length }; });
    var df = {}, tot = 0;
    docs.forEach(function (d) { tot += d.n; var vis = {}; d.w.forEach(function (w) { if (!vis[w]) { vis[w] = 1; df[w] = (df[w] || 0) + 1; } }); });
    return { docs: docs, df: df, avg: tot / Math.max(1, docs.length), N: docs.length };
  }
  function cerca(idx, domanda, k) {
    var q = parole(domanda), k1 = 1.2, b = 0.35;
    if (!q.length) return [];
    var ris = idx.docs.map(function (d) {
      var tf = {}; d.w.forEach(function (w) { tf[w] = (tf[w] || 0) + 1; });
      var s = 0, presi = 0;
      q.forEach(function (w) { if (!tf[w]) return; presi++; var idf = Math.log(1 + (idx.N - idx.df[w] + 0.5) / (idx.df[w] + 0.5));
        s += idf * tf[w] * (k1 + 1) / (tf[w] + k1 * (1 - b + b * d.n / idx.avg)); });
      return { p: d.p, s: s * (0.6 + 0.4 * presi / q.length) };
    }).filter(function (r) { return r.s > 0; }).sort(function (a, c) { return c.s - a.s; });
    return ris.slice(0, k || 3);
  }

  var API = { costruisciKB: costruisciKB, indice: indice, cerca: cerca, parole: parole };
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  root.KB = API;
})(typeof window !== 'undefined' ? window : this);
