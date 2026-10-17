/* ============================================================
   CHIESA · dati di esempio — Santuario di Maria SS. di Custonaci
   Specchio delle tabelle dell'Atlante POI (story_poi, story_tour_scene,
   story_opere, story_opera_scena) + i campi nuovi della tavola di regia.
   Scene, panorami, opere e testi: presi dal DB (poi 39) il 15 ott 2026.
   Narratori, audio, video, accessibilità, orari: DATI DI PROVA.
   Le deviazioni sono rinumerate 100 e 200 (nel DB oggi: 100 e 101).
   ============================================================ */
var CHIESA = {
  versione: 'sim1',
  luogo: {
    id: 39, slug: 'santuario-madonna-custonaci',
    nome: 'Santuario di Maria SS. di Custonaci',
    comune: 'Custonaci', categoria: 'chiesa',
    lat: 38.0762, lng: 12.6772,
    claim: 'La casa della Madonna arrivata dal mare',
    descrizione_breve: 'Il santuario mariano affacciato sul golfo di Cofano, cuore della devozione dell’agro ericino.',
    descrizione: 'Affacciato sul belvedere che guarda il golfo di Cofano, il santuario custodisce il quadro della Madonna di Custonaci, patrona di Custonaci e dell’agro ericino, giunto secondo la tradizione via mare. Meta di pellegrinaggio da cinque secoli, è il cuore dell’identità del paese del marmo.',
    epoca_costruzione: 'XVI secolo, ampliamenti successivi',
    patrono: 'Maria SS. di Custonaci',
    festa_patronale: 'ultimo mercoledì di agosto',
    /* media */
    media_base: ['https://media.esploratrapani.it/Santuario-Madonna-Custonaci/', 'https://f003.backblazeb2.com/file/Santuario-Madonna-Custonaci/'],
    site_plan: 'https://www.esploratrapani.it/landing/cultura/img/MAPPA_SANTUARIO.jpeg',
    foto_portale: null,              /* assente: la soglia usa la facciata del 360 */
    yaw_facciata: 0,                 /* nella scena 0, dove si guarda per vedere il portale */
    pianta_strati: null,             /* assente: «la chiesa che cresce» non compare */
    /* voce del luogo (formato «Attenti a quei due»: il luogo parla in prima persona) */
    voce: { nome: 'Il Santuario', ruolo: 'la voce della chiesa', sigla: 'S',
      saluto: 'Sono qui da cinque secoli, affacciato sul golfo. Dentro di me c’è un quadro arrivato dal mare: entra, ti racconto come.' },
    /* orari e contatti — DATI DI PROVA */
    orari_celebrazioni: 'Feriali 18:00 · Festivi 10:30 e 18:00',
    orari_visita: 'Tutti i giorni 8:30–12:30 e 16:00–19:00',
    contatti: { whatsapp: '3490627997', telefono: '', mail: '' },
    come_arrivare: 'In centro, piazza del Santuario. Bus AST Trapani–San Vito, fermata Custonaci. Parcheggio in piazza e nelle vie vicine.',
    sostieni_url: null, sostieni_obiettivo: null,   /* assenti: la sezione non compare */
    prosegui: [
      { nome: 'MAC — Museo a Cielo Aperto di Custonaci', dist: '5 min a piedi', desc: 'Le opere in marmo Perlato tra le vie del borgo, con audioguide e 360.', url: 'https://www.alessandromilia.it/project/mac/' },
      { nome: 'Grotta Mangiapane', dist: '10 min in auto', desc: 'Il borgo rupestre di Scurati, abitato dalla preistoria al Novecento.', url: 'https://www.esploratrapani.it' }
    ],
    /* accessibilità — DATI DI PROVA, da rilevare sul posto */
    accessibilita: {
      verificata: false,
      gradino_ingresso_cm: 12, rampa: true, bagno_accessibile: false, sedute: true,
      metri_da_parcheggio: 60,
      percorso_accessibile: [[50, 96], [50, 88], [50, 76], [50, 64], [50, 52]],
      nota: 'Un gradino di 12 cm sul portale; rampa mobile su richiesta al custode. Fino al cuore della navata senza altri ostacoli; il presbiterio ha due gradini.'
    },
    lettura_facile: 'Questa è una chiesa. Si chiama Santuario di Custonaci. Dentro c’è un quadro antico della Madonna. La gente dice che il quadro è arrivato con una nave, tanto tempo fa. Ogni anno, in agosto, c’è una grande festa.'
  },

  /* ---------- narratori (tabella nuova story_narratori) — DI PROVA ---------- */
  narratori: [
    { id: 1, nome: 'Paola', ruolo: 'la guida · voce dell’arte', sigla: 'P', bio: 'Storica dell’arte. Legge le pietre, le date e gli stili.', voce_demo: 'paola' },
    { id: 2, nome: 'Riccardo', ruolo: 'il custode · voce della memoria', sigla: 'R', bio: 'Custode del santuario. Racconta le persone, le feste, i ricordi.', voce_demo: 'riccardo' }
  ],

  /* ---------- racconto (Atto I): capitoli con il video dei narratori ---------- */
  capitoli: [
    { id: 'perche', n: 1, titolo: 'Perché è qui', sottotitolo: 'Una nave, una tempesta, un quadro',
      narratore: 2, video: 'media/cap1.mp4', poster: 'media/cap1.jpg', sottotitoli: 'media/cap1.vtt', durata: 20.7,
      breve: 'Da questo belvedere, cinque secoli fa, il paese guardava il mare aspettando una nave. Quella nave portava il quadro della Madonna.',
      trascrizione: 'Siamo sul belvedere di Custonaci, a picco sul golfo di Cofano. Da qui, cinque secoli fa, la gente del paese guardava il mare aspettando una nave che non arrivava. Quella nave portava un quadro. La tempesta la spinse a riva a Cala Buguto. I marinai, salvi, portarono il quadro della Madonna in processione fin quassù. Da allora questa è la sua casa, e Custonaci è il paese che la custodisce.',
      voce_luogo: 'Guarda il mare, laggiù. Da lì è arrivata la mia storia.',
      scoperta: { t: 7, tit: 'Cala Buguto', narr: 'Fermati un attimo: il custode sta per dire dove la nave toccò terra. Tocca il punto «?».', txt: 'La tradizione indica Cala Buguto come il punto dell’approdo. Da lì il quadro salì in processione fino al belvedere dove oggi sorge il santuario.' },
      quiz: { d: 'Secondo la tradizione, come arrivò il quadro della Madonna a Custonaci?', o: ['Via mare, su una nave spinta a riva da una tempesta', 'A dorso di mulo da Erice', 'Fu dipinto in paese'], ok: 0 },
      stato_testo: 'da_validare' },
    { id: 'chi', n: 2, titolo: 'Chi l’ha costruita', sottotitolo: 'Cinque secoli di cantieri',
      narratore: 1, video: 'media/cap2.mp4', poster: 'media/cap2.jpg', sottotitoli: 'media/cap2.vtt', durata: 18.8,
      breve: 'Una chiesa del Cinquecento, ampliata nei secoli: la tribuna d’altare del 1756 e la grande trasformazione di fine Ottocento.',
      trascrizione: 'La chiesa nasce nel Cinquecento, su questo belvedere, e cresce per secoli. Nel 1756 Pietro Calamela realizza la tribuna d’altare che ancora oggi incornicia il quadro. Tra il 1870 e il 1900 monsignor Giuseppe Rizzo trasforma il santuario e gli dà l’aspetto che vediamo entrando. Ogni epoca ha lasciato una pietra, e tutte stanno insieme.',
      voce_luogo: 'Non sono nata così. Mi hanno allargata, alzata, cambiata. Paola ti dice chi e quando.',
      scoperta: { t: 6, tit: 'Il 1756', narr: 'Una data da ricordare. Tocca il punto «?».', txt: 'La tribuna d’altare è del 1756, opera di Pietro Calamela: è la cornice monumentale che accoglie il quadro quattrocentesco della Madonna.' },
      quiz: { d: 'Chi trasformò il santuario tra il 1870 e il 1900?', o: ['Mons. Giuseppe Rizzo', 'Pietro Calamela', 'C. Righetto'], ok: 0 },
      stato_testo: 'da_validare' },
    { id: 'mare', n: 3, titolo: 'Le storie di mare', sottotitolo: 'Gli ex voto: ogni oggetto, una storia che finisce bene',
      narratore: 2, video: 'media/cap3.mp4', poster: 'media/cap3.jpg', sottotitoli: 'media/cap3.vtt', durata: 14.0,
      breve: 'Nel transetto, sotto il Crocifisso del Cinquecento, la sala degli Ex Voto raccoglie argenti e piccoli quadri donati da chi è tornato vivo da una tempesta.',
      trascrizione: 'Nel transetto, sotto il Crocifisso del Cinquecento, si apre la sala degli Ex Voto: argenti, tele, piccoli quadri donati da chi è tornato vivo da una tempesta. Ogni oggetto è una storia di mare che finisce bene. Le famiglie di Custonaci le conoscono una per una.',
      voce_luogo: 'Qui dentro conservo le promesse mantenute. Riccardo le conosce tutte.',
      scoperta: null, quiz: null, stato_testo: 'da_validare' },
    { id: 'oggi', n: 4, titolo: 'Oggi', sottotitolo: 'L’ultimo mercoledì di agosto',
      narratore: 0, /* 0 = tutti e due */ video: 'media/cap4.mp4', poster: 'media/cap4.jpg', sottotitoli: 'media/cap4.vtt', durata: 15.3,
      breve: 'Ogni anno la festa patronale rievoca lo sbarco sulla spiaggia di Cornino: il paese torna al mare con la sua Madonna.',
      trascrizione: 'Ogni anno, l’ultimo mercoledì di agosto, il paese fa festa alla sua patrona. La rievocazione dello sbarco si tiene sulla spiaggia di Cornino: la Madonna torna al mare da cui è arrivata. È il giorno in cui la storia che avete ascoltato si ripete davanti a tutti.',
      voce_luogo: 'Una volta l’anno torno al mare. Vieni anche tu.',
      scoperta: null, quiz: null, stato_testo: 'da_validare' }
  ],

  /* ---------- scene del cammino (story_tour_scene, poi 39) ---------- */
  scene: [
    { id: 10, ordine: 0, slug: 'sagrato', titolo: 'Il sagrato', tipo: 'sagrato', file: 'IMG_20251107_101252_00_842.jpg', pos: [50, 96], yaw_avanti: 0, yaw_nord_pianta: 0,
      testo: 'Siamo sul belvedere di Custonaci, a picco sul golfo di Cofano. Da qui, cinque secoli fa, la gente del paese guardava il mare aspettando una nave che non arrivava. Quella nave portava un quadro.',
      descrizione_scena: 'Il sagrato: davanti a te la facciata chiara del santuario con il portale; alle spalle il belvedere sul golfo di Cofano e il mare.',
      verso: 'Entra dal portale, davanti a te.', audio: 'media/s0.mp3', durata: 9, qr: 'sagrato', nel_racconto: true },
    { id: 11, ordine: 1, slug: 'ingresso', titolo: 'L’ingresso', tipo: 'navata', file: 'IMG_20251107_101321_00_843.jpg', pos: [50, 88], yaw_avanti: 0,
      testo: 'Appena entrati, la navata si apre verso l’altare. A sinistra il battistero.',
      descrizione_scena: 'L’ingresso: la navata unica si apre davanti a te verso l’altare in fondo; a sinistra il battistero.',
      verso: 'Prosegui lungo la navata.', audio: null, durata: 0, qr: 'ingresso', nel_racconto: false },
    { id: 12, ordine: 2, slug: 'navata', titolo: 'La navata', tipo: 'navata', file: 'IMG_20251107_101358_00_844.jpg', pos: [50, 76], yaw_avanti: 0,
      testo: 'La tempesta la spinse a riva a Cala Buguto. I marinai, salvi, portarono il quadro della Madonna in processione fin quassù. Da allora questa è la sua casa, e Custonaci è il paese che la custodisce.',
      descrizione_scena: 'La navata: file di banchi ai lati, le pareti chiare, in fondo l’altare illuminato.',
      verso: 'Continua verso l’altare.', audio: 'media/s2.mp3', durata: 10, qr: 'navata', nel_racconto: true },
    { id: 13, ordine: 3, slug: 'verso-altare', titolo: 'Verso l’altare', tipo: 'navata', file: 'IMG_20251107_101421_00_845.jpg', pos: [50, 64], yaw_avanti: 0,
      testo: null, descrizione_scena: 'Metà navata: l’altare si avvicina; sulla destra la lapide che ricorda monsignor Rizzo.',
      verso: 'Ancora pochi passi.', audio: null, durata: 0, qr: 'verso-altare', nel_racconto: false },
    { id: 14, ordine: 4, slug: 'cuore-navata', titolo: 'Il cuore della navata', tipo: 'navata', file: 'IMG_20251107_101457_00_846.jpg', pos: [50, 52], yaw_avanti: 0,
      testo: null, descrizione_scena: 'Il centro della navata: da qui si vede bene la tribuna d’altare con il quadro.',
      verso: 'Sali verso il presbiterio.', audio: null, durata: 0, qr: 'cuore-navata', nel_racconto: false },
    { id: 15, ordine: 5, slug: 'presbiterio', titolo: 'Il presbiterio', tipo: 'altare', file: 'IMG_20251107_101538_00_847.jpg', pos: [50, 40], yaw_avanti: 0,
      testo: null, descrizione_scena: 'Il presbiterio, due gradini sopra la navata: a destra e a sinistra si aprono i transetti.',
      verso: 'Davanti a te l’altare maggiore.', audio: null, durata: 0, qr: 'presbiterio', nel_racconto: false },
    { id: 16, ordine: 6, slug: 'altare', titolo: 'L’altare maggiore', tipo: 'altare', file: 'IMG_20251107_101616_00_848.jpg', pos: [50, 26], yaw_avanti: 0,
      testo: 'Eccola, nella tribuna d’altare del 1756. Guardate i dettagli: il Bambino stringe tre spighe, il pane della terra. Al collo un rametto di corallo, la protezione del mare. Sul manto, coppe d’oro. Terra, mare e cielo in un solo quadro.',
      descrizione_scena: 'L’altare maggiore: davanti a te la tribuna d’altare con il quadro della Madonna; dietro, nascosto, il coro ligneo; a sinistra e a destra i due transetti.',
      verso: 'Da qui puoi deviare nei transetti, oppure tornare verso l’uscita.', audio: 'media/s6.mp3', durata: 13, qr: 'altare', nel_racconto: true,
      audiodescrizione: 'media/s6-ad.mp3', audiodescrizione_durata: 10,
      deviazioni: [{ a: 17, testo: 'Transetto sinistro' }, { a: 18, testo: 'Transetto destro · Ex Voto' }] },
    { id: 17, ordine: 100, slug: 'transetto-sinistro', titolo: 'Transetto sinistro', tipo: 'transetto', file: 'IMG_20251107_101746_00_849.jpg', pos: [18, 50], yaw_avanti: 0, da: 16,
      testo: null, descrizione_scena: 'Il transetto sinistro, più raccolto, con un altare laterale.',
      verso: 'Torna all’altare maggiore.', audio: null, durata: 0, qr: 'transetto-sinistro', nel_racconto: false },
    { id: 18, ordine: 200, slug: 'ex-voto', titolo: 'Transetto destro · Ex Voto', tipo: 'transetto', file: 'IMG_20251107_103230_00_857.jpg', pos: [82, 50], yaw_avanti: 0, da: 16,
      testo: 'Nel transetto, sotto il Crocifisso del Cinquecento, si apre la sala degli Ex Voto: argenti, tele, piccoli quadri donati da chi è tornato vivo da una tempesta. Ogni oggetto è una storia di mare che finisce bene.',
      descrizione_scena: 'Il transetto destro: in alto il Crocifisso ligneo, sotto la porta della sala degli Ex Voto con le pareti coperte di argenti e quadretti.',
      verso: 'Torna all’altare maggiore.', audio: 'media/s200.mp3', durata: 11, qr: 'ex-voto', nel_racconto: true }
  ],

  /* ---------- opere (story_opere, poi 39) + posizioni nelle scene (story_opera_scena) ---------- */
  opere: [
    { id: 1, slug: 'madonna-custonaci', titolo: 'Tribuna d’altare e quadro di Maria SS. di Custonaci', tipo: 'pala d’altare',
      autore: 'Pietro Calamela (tribuna)', datazione: '1756 · quadro XV sec.', stato: 'verificata', capolavoro: true,
      fonte_attribuzione: 'https://www.esploratrapani.it/landing/cultura/',
      breve: 'La Tribuna d’Altare custodisce il quadro di Maria SS. di Custonaci, arrivato dal mare nel Quattrocento. Il Bambino tiene tre spighe, simbolo di abbondanza; al collo un rametto di corallo, protezione regale; il manto è decorato con coppe d’oro eucaristiche.',
      curiosita: 'Le tre spighe, il corallo e le coppe d’oro: ogni dettaglio del quadro è un simbolo da leggere.',
      foto_hd: 'https://www.esploratrapani.it/landing/cultura/img/quadro.jpg', ampiezza: 38,
      dettagli: [{ x: 56, y: 62, tit: 'Le tre spighe', txt: 'Il Bambino stringe tre spighe di grano: il pane della terra, l’abbondanza dei campi.' },
                 { x: 48, y: 44, tit: 'Il corallo', txt: 'Al collo un rametto di corallo rosso: nella Sicilia del mare è protezione e segno regale.' },
                 { x: 30, y: 70, tit: 'Le coppe d’oro', txt: 'Sul manto, coppe d’oro eucaristiche: il cielo, dopo la terra e il mare.' }],
      audio: 'media/o1.mp3', durata: 16, audio_voce2: 'media/o1-v2.mp3', durata_voce2: 9,
      scene: [{ scena: 16, yaw: 0, pitch: 20, principale: true }, { scena: 15, yaw: 0, pitch: 12 }, { scena: 14, yaw: 0, pitch: 6 }] },
    { id: 2, slug: 'crocifisso-ex-voto', titolo: 'Crocifisso ligneo e sala degli Ex Voto', tipo: 'crocifisso',
      autore: 'Ignoto', datazione: 'XVI sec.', stato: 'verificata', capolavoro: true, fonte_attribuzione: null,
      breve: 'Il Crocifisso ligneo cinquecentesco introduce alla sala degli Ex Voto: argenti e dipinti donati dai fedeli per grazia ricevuta, spesso legati a miracoli in mare.',
      curiosita: null, foto_hd: null, ampiezza: 45, dettagli: [],
      audio: 'media/o2.mp3', durata: 11, audio_voce2: 'media/o2-v2.mp3', durata_voce2: 8,
      scene: [{ scena: 18, yaw: 90, pitch: 0, principale: true }] },
    { id: 3, slug: 'coro-ligneo', titolo: 'Coro ligneo', tipo: 'arredo',
      autore: null, datazione: 'XVIII sec.', stato: 'verificata', capolavoro: true, fonte_attribuzione: null,
      breve: 'Celato dietro l’altare, il coro ligneo è un capolavoro di intaglio dove i monaci si riunivano per la preghiera.',
      curiosita: null, foto_hd: null, ampiezza: 50, dettagli: [],
      audio: 'media/o3.mp3', durata: 6, audio_voce2: null, durata_voce2: 0,
      scene: [{ scena: 16, yaw: 180, pitch: 20, principale: true }] },
    { id: 4, slug: 'battistero', titolo: 'Il battistero', tipo: 'fonte battesimale',
      autore: null, datazione: null, stato: 'verificata', capolavoro: false, fonte_attribuzione: null,
      breve: 'Battistero in legno e marmo all’ingresso della chiesa.',
      curiosita: null, foto_hd: null, ampiezza: 55, dettagli: [],
      audio: null, durata: 0, audio_voce2: null, durata_voce2: 0,
      scene: [{ scena: 11, yaw: -90, pitch: 0, principale: true }] },
    { id: 5, slug: 'memoria-mons-rizzo', titolo: 'Mons. Giuseppe Rizzo', tipo: 'lapide',
      autore: null, datazione: '1870–1900', stato: 'proposta', capolavoro: false, fonte_attribuzione: null,
      breve: 'Il luogo della memoria dell’architetto che trasformò il Santuario tra il 1870 e il 1900.',
      curiosita: null, foto_hd: null, ampiezza: 50, dettagli: [], audio: null, durata: 0, audio_voce2: null, durata_voce2: 0,
      scene: [{ scena: 13, yaw: 120, pitch: -20, principale: true }] },
    { id: 6, slug: 'approdo', titolo: 'L’Approdo', tipo: 'affresco',
      autore: 'C. Righetto', datazione: null, stato: 'verificata', capolavoro: false, fonte_attribuzione: null,
      breve: 'La lunetta con l’arrivo del quadro della Madonna a Cala Buguto.',
      curiosita: null, foto_hd: null, ampiezza: 45, dettagli: [],
      audio: 'media/o6.mp3', durata: 4, audio_voce2: null, durata_voce2: 0,
      scene: [{ scena: 10, yaw: -45, pitch: 30, principale: true }] }
  ],

  /* ---------- traduzioni dei contenuti (jsonb tr): solo inglese nella demo ---------- */
  tr: {
    en: {
      luogo: { claim: 'The home of the Madonna who came from the sea', descrizione_breve: 'The Marian sanctuary overlooking the Gulf of Cofano, heart of the devotion of the Erice countryside.',
        'voce.saluto': 'I have stood here for five centuries, facing the gulf. Inside me there is a painting that came from the sea: come in, I will tell you how.',
        orari_celebrazioni: 'Weekdays 6 pm · Sundays 10:30 am and 6 pm', orari_visita: 'Every day 8:30–12:30 and 16:00–19:00',
        come_arrivare: 'In the town centre, Piazza del Santuario. AST bus Trapani–San Vito, Custonaci stop. Parking in the square and nearby streets.',
        'accessibilita.nota': 'A 12 cm step at the portal; a mobile ramp on request from the custodian. No other obstacles up to the heart of the nave; the presbytery has two steps.',
        lettura_facile: 'This is a church. It is called the Sanctuary of Custonaci. Inside there is an old painting of the Madonna. People say the painting arrived on a ship, a long time ago. Every year, in August, there is a big feast.' },
      capitoli: { perche: { titolo: 'Why it is here', sottotitolo: 'A ship, a storm, a painting', breve: 'From this belvedere, five centuries ago, the town watched the sea waiting for a ship. That ship carried the painting of the Madonna.', voce_luogo: 'Look at the sea, down there. That is where my story came from.' },
        chi: { titolo: 'Who built it', sottotitolo: 'Five centuries of building sites', breve: 'A sixteenth-century church, enlarged over the centuries: the 1756 altar tribune and the great late-nineteenth-century transformation.', voce_luogo: 'I was not born like this. They widened me, raised me, changed me. Paola tells you who and when.' },
        mare: { titolo: 'Sea stories', sottotitolo: 'The ex-votos: every object, a story that ends well', breve: 'In the transept, beneath the sixteenth-century Crucifix, the Ex Voto room gathers silver and small paintings given by those who came back alive from a storm.', voce_luogo: 'In here I keep the promises that were kept. Riccardo knows them all.' },
        oggi: { titolo: 'Today', sottotitolo: 'The last Wednesday of August', breve: 'Every year the patronal feast re-enacts the landing on Cornino beach: the town returns to the sea with its Madonna.', voce_luogo: 'Once a year I go back to the sea. Come too.' } },
      scene: { 10: { titolo: 'The churchyard', testo: 'We are on the belvedere of Custonaci, high above the Gulf of Cofano. From here, five centuries ago, the people of the town watched the sea, waiting for a ship that did not come. That ship carried a painting.', verso: 'Enter through the portal in front of you.', descrizione_scena: 'The churchyard: in front of you the pale façade of the sanctuary with the portal; behind you the belvedere over the Gulf of Cofano and the sea.' },
        11: { titolo: 'The entrance', testo: 'Just inside, the nave opens towards the altar. On the left, the baptistery.', verso: 'Walk along the nave.' },
        12: { titolo: 'The nave', testo: 'The storm drove it ashore at Cala Buguto. The sailors, safe, carried the painting of the Madonna in procession up here. Since then this has been her home, and Custonaci the town that keeps her.', verso: 'Keep going towards the altar.' },
        13: { titolo: 'Towards the altar', verso: 'A few more steps.' }, 14: { titolo: 'The heart of the nave', verso: 'Go up towards the presbytery.' }, 15: { titolo: 'The presbytery', verso: 'The high altar is in front of you.' },
        16: { titolo: 'The high altar', testo: 'Here she is, in the altar tribune of 1756. Look at the details: the Child holds three ears of wheat, the bread of the land. At her neck a sprig of coral, the protection of the sea. On the mantle, golden cups. Land, sea and sky in a single painting.', verso: 'From here you can turn into the transepts, or go back towards the exit.' },
        17: { titolo: 'Left transept', verso: 'Return to the high altar.' },
        18: { titolo: 'Right transept · Ex Voto', testo: 'In the transept, beneath the sixteenth-century Crucifix, opens the Ex Voto room: silver, canvases, small paintings given by those who came back alive from a storm. Every object is a sea story that ends well.', verso: 'Return to the high altar.' } },
      opere: { 1: { titolo: 'Altar tribune and painting of Maria SS. di Custonaci', breve: 'The altar tribune holds the painting of Maria SS. di Custonaci, which came from the sea in the fifteenth century. The Child holds three ears of wheat, a symbol of abundance; at the neck a sprig of coral, royal protection; the mantle is decorated with Eucharistic golden cups.', curiosita: 'The three ears of wheat, the coral and the golden cups: every detail of the painting is a symbol to be read.' },
        2: { titolo: 'Wooden Crucifix and Ex Voto room', breve: 'The sixteenth-century wooden Crucifix leads into the Ex Voto room: silver and paintings given by the faithful for graces received, often linked to miracles at sea.' },
        3: { titolo: 'Wooden choir', breve: 'Hidden behind the altar, the wooden choir is a masterpiece of carving where the monks gathered for prayer.' },
        4: { titolo: 'The baptistery', breve: 'Baptistery in wood and marble at the entrance of the church.' },
        6: { titolo: 'The Landing', breve: 'The lunette with the arrival of the painting of the Madonna at Cala Buguto.' } }
    }
  },

  /* pesi stimati per «Scarica la visita» (MB) */
  peso: { panorama_mb: 2.4 }
};
