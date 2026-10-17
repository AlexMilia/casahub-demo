/* ============================================================
   CHIESA · Santuario di Maria SS. di Custonaci — dati della simulazione 2 (16 ott 2026)
   Specchio delle tabelle dell'Atlante POI (story_poi, story_tour_scene, story_opere,
   story_opera_scena) + i campi nuovi della tavola di regia.
   VERO: i 18 panorami interni (7 nov 2025) e i 3 panorami del drone (11 mag 2026), la pianta
   (vista dal drone), le riprese dei reel (DJI Avata 360, maggio e agosto 2026), i testi del
   dossier «Custonaci · materiali» (fonti pubbliche: parrocchia, censimento santuari 2023,
   catalogo beni culturali). DA VALIDARE con il parroco: i testi (stato_testo 'da_validare').
   DI PROVA: i due narratori (voci sintetiche Piper), l'accessibilità (nessuna misura sul posto),
   la posizione dei dettagli sul quadro.
   Numerazione: fila principale 0..6; deviazioni a centinaia in ordine di incontro.
   ============================================================ */
var CHIESA = {
  versione: 'sim2',
  versione_dati: '20261017c',   /* deve essere uguale a VERSIONE_PAGINA in chiesa-sim1.html: se no la pagina avvisa */
  luogo: {
    id: 39, slug: 'santuario-madonna-custonaci',
    nome: 'Santuario di Maria SS. di Custonaci',
    comune: 'Custonaci', categoria: 'chiesa',
    lat: 38.0776, lng: 12.6747,
    claim: 'La casa della Madonna arrivata dal mare',
    descrizione_breve: 'Il santuario mariano sulla collina di Custonaci, patrona del paese e dell’agro ericino, di fronte al golfo di Cofano.',
    descrizione: 'Sulla collina che guarda il golfo di Cofano, il santuario custodisce il quadro della Madonna del Latte, giunto secondo la tradizione via mare intorno al 1400 e portato per tre secoli in pellegrinaggio fino a Erice. Costruito dal 1570, con l’altare maggiore del 1627 e la facciata gotica di fine Ottocento, è parrocchia dal 1909 e Chiesa Madre dal 2000; Custonaci è «Civitas Mariae» dal 2009.',
    epoca_costruzione: '1570–1577, altare maggiore 1627, facciata e scalinata 1870–1900',
    patrono: 'Maria SS. di Custonaci',
    festa_patronale: 'ultimo mercoledì di agosto (quattro giorni dalla domenica precedente)',
    /* media */
    pano_lq: true,                          /* in pano/lq/ le versioni leggere (2048 px) che si aprono subito */
    media_base: ['pano/', 'https://media.esploratrapani.it/Santuario-Madonna-Custonaci/', 'https://f003.backblazeb2.com/file/Santuario-Madonna-Custonaci/'],
    site_plan: 'pano/pianta.jpg',           /* la pianta vera (fasi 1575–1851, 1900, 1968), facciata in basso; i pin del museo sono da confermare */
    foto_portale: null,                     /* la soglia usa la facciata vista dal drone */
    yaw_facciata: 0, pitch_facciata: -22,   /* nella scena 0 (drone), dove si guarda per vedere la facciata */
    pianta_strati: null,                     /* le fasi sono già disegnate nella pianta: rosso 1575–1851, blu 1900, verde 1968 */
    voce: { nome: 'Il Santuario', ruolo: 'la voce della chiesa', sigla: 'S',
      saluto: 'Sono qui da cinque secoli, sulla collina che guarda il golfo. Dentro di me c’è un quadro arrivato dal mare: entra, ti racconto come.' },
    /* orari e contatti — trovati sul web: messe da cittadicustonaci.it, apertura dalla scheda Google Maps del santuario (ott 2026) */
    orari_celebrazioni: 'Lunedì, mercoledì e venerdì 18:00 (estate 18:30) · sabato 18:30 (estate 19:00) · domenica 9:30 e 11:00 (estate 10:30)',
    orari_visita: 'Tutti i giorni 9:00–12:00 e 16:00–20:30 · mercoledì e venerdì pomeriggio fino alle 18:00 · domenica 9:00–13:00 e 16:00–18:00',
    /* calendario che la pagina legge per dire «aperto adesso», «c'è la messa», «fra 10 minuti la messa».
       giorni: 0 domenica … 6 sabato. Ora di Roma, qualunque sia il fuso del telefono. Per provarlo: ?ora=2026-10-18T10:45 */
    calendario: {
      fonte_apertura: 'Google Maps, scheda del santuario', fonte_messe: 'cittadicustonaci.it · Celebrazioni eucaristiche', verificato: '2026-10-17',
      estate: { da: '06-01', a: '09-30' },          /* orario estivo delle messe: giugno–settembre */
      durata_messa: 45, apre_prima_messa: 15,      /* minuti: la chiesa è aperta da 15 minuti prima a fine messa */
      apertura: {
        1: ['09:00-12:00', '16:00-20:30'], 2: ['09:00-12:00', '16:00-20:30'], 3: ['09:00-12:00', '16:00-18:00'],
        4: ['09:00-12:00', '16:00-20:30'], 5: ['09:00-12:00', '16:00-18:00'], 6: ['09:00-12:00', '16:00-20:30'],
        0: ['09:00-13:00', '16:00-18:00']
      },
      messe: {
        inverno: { 1: ['18:00'], 3: ['18:00'], 5: ['18:00'], 6: ['18:30'], 0: ['09:30', '11:00'] },
        estate:  { 1: ['18:30'], 3: ['18:30'], 5: ['18:30'], 6: ['19:00'], 0: ['10:30'] }
      },
      festa: { nome: 'Festa di Maria SS. di Custonaci', giorni_prima: 3 },   /* ultimo mercoledì di agosto e i tre giorni prima: orari speciali */
      eccezioni: {}   /* es. '2026-12-24': { apertura: ['09:00-12:00','22:00-01:00'], messe: ['23:30'], nota: 'Messa della notte' } */
    },
    contatti: { whatsapp: '3490627997', telefono: '0923 971113', mail: 'info@santuariocustonaci.it' },
    /* ---------- OFFERTE E SOSTEGNO — ESEMPIO: obiettivo, cifre e modalità li decide la Chiesa (poi dal cruscotto) ---------- */
    sostieni: {
      attivo: true, esempio: true,
      obiettivo: 'Il Museo Arte e Fede', obiettivo_en: 'The Arte e Fede Museum',
      descrizione: 'Le offerte aiutano a custodire le vesti, gli ex voto e la vara del 1831, e a tenere aperto il museo per chi viene da lontano.',
      descrizione_en: 'Donations help look after the vestments, the votive offerings and the 1831 carrying frame, and keep the museum open for visitors.',
      traguardo: 8000, raccolti: 2350,
      intestatario: null, iban: null, paypal: null, satispay: null   /* si riempiono dal cruscotto quando la Chiesa sceglie */
    },
    /* ---------- IL PASSAPORTO DEI LUOGHI: la rete di Esplora Trapani ---------- */
    rete: [
      { id: 'santuario-madonna-custonaci', nome: 'Santuario di Maria SS. di Custonaci', comune: 'Custonaci', stato: 'attivo' },
      { id: 'mac-custonaci', nome: 'MAC · Museo a Cielo Aperto', comune: 'Custonaci', stato: 'attivo', url: 'https://www.alessandromilia.it/project/mac/' },
      { id: 'grotta-mangiapane', nome: 'Grotta Mangiapane', comune: 'Custonaci', stato: 'in_arrivo' },
      { id: 'cala-buguto', nome: 'Cala Buguto e la baia di Cornino', comune: 'Custonaci', stato: 'in_arrivo' },
      { id: 'erice', nome: 'Erice', comune: 'Erice', stato: 'in_arrivo' },
      { id: 'segesta', nome: 'Parco archeologico di Segesta', comune: 'Calatafimi-Segesta', stato: 'in_arrivo' }
    ],
    /* ---------- LE CARTE IN REGOLA — BOZZA da rivedere con la Chiesa e il Comune prima del lancio ---------- */
    carte: {
      bozza: true,
      titolare: 'Esplora Trapani · Alessandro Milia',
      contatto: 'WhatsApp 349 062 7997',
      privacy: [
        'Per usare la visita non serve registrarsi e non chiediamo nome, email o telefono.',
        'La pagina non usa cookie né sistemi pubblicitari. Quello che salva per la visita senza rete (panorami, voci, i tuoi timbri) resta sul tuo telefono e lo puoi cancellare dalle impostazioni del browser.',
        'Statistiche anonime: per capire come viene usata la visita la pagina conta aperture, punti visti, opere aperte, lingua e durata. A ogni visita corrisponde un numero casuale che non ti identifica e non viene conservato sul telefono; il tuo indirizzo di rete non viene salvato. Se il browser chiede di non essere tracciato («Do Not Track»), le statistiche non partono.',
        'Chiedi alla chiesa: la domanda viene inviata al servizio di Esplora Trapani e a un modello di intelligenza artificiale (Claude, di Anthropic) per scrivere la risposta, usando solo i testi del Santuario. Conserviamo l’inizio della domanda, senza sapere chi l’ha fatta, per migliorare i testi. Non scrivere dati personali nella chat.',
        'Mappa e video vengono da servizi esterni (OpenStreetMap, YouTube in modalità senza cookie) e si aprono solo quando ci arrivi o li tocchi.'
      ],
      crediti: [
        'Foto e video a 360°, riprese con il drone, montaggio dei reel: Esplora Trapani · Alessandro Milia, pilota abilitato ENAC.',
        'Reel della festa: Esplora Trapani (YouTube).',
        'Testi: da fonti pubbliche (parrocchia cittadicustonaci.it, censimento dei santuari 2023, Catalogo generale dei beni culturali, custonaciweb.it), in attesa di revisione del Santuario.',
        'Pianta del Santuario: planimetria storica con le fasi costruttive.',
        'Voci: sintetiche di prova (Piper), da sostituire con narratori veri.',
        'Mappa: © OpenStreetMap contributors, con Leaflet. Panorami: Pannellum. Animazioni: GSAP.'
      ],
      accessibilita: [
        'Stato: parzialmente conforme. La pagina supera i controlli automatici WCAG 2.1 livello A e AA (axe) su telefono e computer.',
        'Ci sono testo ingrandibile, lettura facile, descrizione a voce di ciò che si vede, sottotitoli e trascrizioni di tutti gli audio.',
        'Da fare sul posto: misurare gradino d’ingresso, rampa, percorso interno e distanza dal parcheggio; prova con persone con disabilità visiva e motoria.',
        'Per segnalare un problema di accessibilità scrivi su WhatsApp al 349 062 7997.'
      ],
      narratori: 'Le voci attuali sono sintetiche. Per i narratori veri servono la liberatoria per l’uso della voce e dell’immagine e la cessione dei diritti sui testi letti.'
    },
    /* ---------- LA FESTA (ultimo mercoledì di agosto) ----------
       Le date si calcolano da sole ogni anno. Gli orari sono quelli del programma 2026 (275ª edizione,
       fonte custonaciweb.it): per l'anno nuovo restano come guida finché non esce il programma ufficiale. */
    festa: {
      nome: 'Festa di Maria SS. di Custonaci', nome_en: 'Feast of Our Lady of Custonaci',
      reel: { youtube: 'AP5k_qGSROM', titolo: 'Festa per la Santissima Madonna di Custonaci', autore: 'Esplora Trapani' },
      edizione: { anno: 2026, numero: 275, tema: 'Madre di Cristo' },
      fonte_programma: { nome: 'Programma 2026 · custonaciweb.it', url: 'https://custonaciweb.it/events/festa-madonna-custonaci-2026-programma/' },
      inizio_novena: -9,   /* giorni prima dell'ultimo mercoledì di agosto */
      momenti: [   /* giorno = giorni rispetto al mercoledì della festa · durata in minuti */
        { id: 'novena', giorno: -9, ora: '18:00', durata: 90, titolo: 'Comincia la novena', titolo_en: 'The novena begins', luogo: 'Santuario', punto: 'santuario',
          desc: 'Ogni sera alle 18 il Rosario e alle 19 la messa, fino al giorno della festa.', desc_en: 'Every evening: Rosary at 6 pm and Mass at 7 pm, until the feast day.' },
        { id: 'chiavi', giorno: -4, ora: '19:00', durata: 90, titolo: 'Le chiavi della città alla Madonna', titolo_en: 'The keys of the town to Our Lady', luogo: 'Santuario', punto: 'santuario',
          desc: 'Si accende il cero e il sindaco consegna alla Vergine le chiavi di Custonaci.', desc_en: 'The great candle is lit and the mayor hands the keys of Custonaci to the Virgin.' },
        { id: 'carretti', giorno: -3, ora: '20:30', durata: 120, titolo: 'Carretti siciliani e gruppi folk', titolo_en: 'Sicilian carts and folk groups', luogo: 'Da piazza Europa (Sperone) al centro storico', punto: null,
          desc: 'La sfilata dei carretti e dei gruppi folkloristici, con miliddi e vino per tutti. Al mattino, alle 6:30, il pellegrinaggio a piedi verso il santuario.', desc_en: 'The parade of painted carts and folk groups, with local sweets and wine for everyone. At 6:30 am, the pilgrimage on foot to the sanctuary.' },
        { id: 'sbarco', giorno: -2, ora: '19:00', durata: 180, clou: true, titolo: 'Lo sbarco a Cala Buguto', titolo_en: 'The landing at Cala Buguto', luogo: 'Cala Buguto, baia di Cornino', punto: 'cala-buguto',
          desc: 'Dal mare arriva il veliero con la copia del quadro, tra canti, preghiere e fuochi; poi la fiaccolata accompagna la Madonna fino al santuario, molti a piedi scalzi.', desc_en: 'A sailing ship brings the copy of the painting from the sea, among songs, prayers and fireworks; then a torchlight procession walks Our Lady up to the sanctuary, many barefoot.' },
        { id: 'fontane', giorno: -1, ora: '21:30', durata: 150, titolo: 'Fontane danzanti', titolo_en: 'Dancing fountains', luogo: 'Piazza Santuario', punto: 'santuario',
          desc: 'Due spettacoli di acqua e luce davanti al santuario, alle 21:30 e a mezzanotte.', desc_en: 'Two shows of water and light in front of the sanctuary, at 9:30 pm and midnight.' },
        { id: 'messa', giorno: 0, ora: '11:00', durata: 90, titolo: 'La messa solenne', titolo_en: 'Solemn Mass', luogo: 'Santuario', punto: 'santuario',
          desc: 'Al mattino scampanio e mortaretti dalle 7, poi la celebrazione solenne.', desc_en: 'Bells and firecrackers from 7 am, then the solemn celebration.' },
        { id: 'processione', giorno: 0, ora: '18:30', durata: 300, clou: true, titolo: 'La processione', titolo_en: 'The procession', luogo: 'Per le vie del paese', punto: 'santuario',
          desc: 'Cinque ore per le vie di Custonaci; al rientro la processione si ferma tra i banchi della navata.', desc_en: 'Five hours through the streets of Custonaci; on its return it stops among the pews of the nave.' },
        { id: 'fuochi', giorno: 0, ora: '24:00', durata: 30, titolo: 'I fuochi del rientro', titolo_en: 'Closing fireworks', luogo: 'Contrada Tribli', punto: null,
          desc: 'A mezzanotte i giochi pirotecnici chiudono la festa.', desc_en: 'At midnight the fireworks close the feast.' }
      ],
      storia: [   /* dai testi del racconto (capitoli 3 e 4) e dalla curiosità del quadro */
        { anno: '1572', testo: 'Nasce la festa. Per quasi due secoli si celebra l’8 dicembre.', testo_en: 'The feast is born. For almost two centuries it is held on 8 December.' },
        { anno: '1568–1858', testo: 'Il quadro va a Erice sessanta volte: per la pioggia, la peste, i terremoti, le cavallette.', testo_en: 'The painting is carried to Erice sixty times: for rain, plague, earthquakes, locusts.' },
        { anno: '1752', testo: 'Il quadro viene incoronato e la festa passa all’estate: l’ultimo mercoledì di agosto.', testo_en: 'The painting is crowned and the feast moves to summer: the last Wednesday of August.' },
        { anno: '1831', testo: 'La vara con i cinque angeli: durante i viaggi vi salivano i bambini malati.', testo_en: 'The carrying frame with five angels: sick children rode inside it during the journeys.' },
        { anno: '1936', testo: 'Il quadro non esce più dal santuario: in processione va una copia.', testo_en: 'The painting no longer leaves the sanctuary: a copy goes in procession.' },
        { anno: '2009', testo: 'Custonaci diventa «Civitas Mariae», città di Maria.', testo_en: 'Custonaci becomes «Civitas Mariae», the town of Mary.' },
        { anno: '2026', testo: '275ª edizione, sul tema «Madre di Cristo».', testo_en: '275th edition, on the theme «Mother of Christ».' }
      ]
    },
    /* ---------- DOVE SIAMO: punti sulla mappa (coordinate da Google Maps) ---------- */
    dove: {
      punti: [
        { id: 'santuario', tipo: 'santuario', nome: 'Santuario di Maria SS. di Custonaci', indirizzo: 'Piazza Santuario 1', lat: 38.0783517, lng: 12.6758666,
          nota: 'In cima al paese, sulla scalinata.', nota_en: 'At the top of the town, up the steps.' },
        { id: 'parcheggio', tipo: 'parcheggio', nome: 'Parcheggio comunale multipiano', nome_en: 'Municipal multi-storey car park', indirizzo: 'Via Padre Francesco Randazzo', lat: 38.0774467, lng: 12.6755834,
          nota: 'Il più vicino al santuario. Il piano superiore è gratuito; i posti sono pochi nei giorni di festa.', nota_en: 'The closest to the sanctuary. The top level is free; spaces are few on feast days.' },
        { id: 'bus', tipo: 'bus', nome: 'Fermata autobus AST', nome_en: 'AST bus stop', indirizzo: 'Via Roma 13', lat: 38.0778072, lng: 12.6761463,
          nota: 'Linea Trapani–Custonaci, dal capolinea alla stazione di Trapani.', nota_en: 'Trapani–Custonaci line, from the terminal at Trapani railway station.' },
        { id: 'pullman', tipo: 'parcheggio', nome: 'Sosta pullman turistici', nome_en: 'Coach parking', indirizzo: 'Via Dante Alighieri', lat: 38.0796689, lng: 12.6744886,
          nota: 'I bus turistici si fermano qui; poi a piedi fino al santuario.', nota_en: 'Tour coaches stop here; then on foot to the sanctuary.' },
        { id: 'pozzo', tipo: 'storia', nome: 'Pozzo della Madonna', nome_en: 'Our Lady’s Well', indirizzo: 'Via Scurati 32', lat: 38.0755833, lng: 12.6745359,
          nota: 'Dove, racconta la tradizione, i buoi assetati si fermarono e sgorgò l’acqua.', nota_en: 'Where, tradition says, the thirsty oxen stopped and water sprang up.' },
        { id: 'cala-buguto', tipo: 'storia', nome: 'Cala Buguto · baia di Cornino', nome_en: 'Cala Buguto · Cornino bay', indirizzo: 'Baia di Cornino', lat: 38.0926406, lng: 12.6619939,
          nota: 'Dove arrivò la nave con il quadro; ogni agosto la rievocazione dello sbarco.', nota_en: 'Where the ship with the painting landed; every August the landing is re-enacted.' }
      ],
      arrivare: [
        { come: 'In auto da Trapani', come_en: 'By car from Trapani', km: 18, testo: 'SP20 Trapani–Bonagia, poi SP18 Bonagia–Custonaci.', testo_en: 'SP20 Trapani–Bonagia, then SP18 Bonagia–Custonaci.' },
        { come: 'In auto da Palermo', come_en: 'By car from Palermo', km: 90, testo: 'A29 uscita Castellammare del Golfo, SS187, poi SP16 «Asse dei Marmi».', testo_en: 'A29 exit Castellammare del Golfo, SS187, then SP16 «Asse dei Marmi».' },
        { come: 'In autobus', come_en: 'By bus', testo: 'Autobus AST Trapani–Custonaci dal capolinea alla stazione di Trapani; si scende in via Roma, a due passi dal santuario.', testo_en: 'AST bus Trapani–Custonaci from the terminal at Trapani railway station; get off in via Roma, a short walk from the sanctuary.' },
        { come: 'In pullman', come_en: 'By coach', testo: 'Sosta dei bus turistici in via Dante Alighieri, poi a piedi.', testo_en: 'Coaches park in via Dante Alighieri, then on foot.' }
      ]
    },
    /* «Chiedi alla chiesa»: risponde ASK Trapani solo con i testi di questa pagina (dati/kb.js → kb/<slug>.json sul server) */
    chiedi: {
      api: 'https://ask-trapani-api-production.up.railway.app/chiesa/chiedi',
      suggerite: {
        it: ['Chi ha dipinto il quadro?', 'Perché il quadro andava a Erice?', 'Quando è lo sbarco della Madonna?', 'Dove posso parcheggiare?', 'C’è la messa oggi?', 'Cos’è la vara?'],
        en: ['Who painted the Madonna?', 'Why was the painting carried to Erice?', 'When is the landing of Our Lady?', 'Where can I park?', 'Is there Mass today?', 'What is the vara?']
      }
    },
    come_arrivare: 'Piazza Santuario 1, in cima al paese. Da Trapani (18 km): SP20 Trapani–Bonagia, poi SP18 Bonagia–Custonaci. Da Palermo (90 km): A29 uscita Castellammare del Golfo, SS187, poi SP16 «Asse dei Marmi». Bus AST Trapani–Custonaci dal capolinea alla stazione di Trapani. Parcheggio multipiano comunale vicino al santuario; bus turistici in via Dante Alighieri (500 m).',
    sostieni_url: null, sostieni_obiettivo: null,
    prosegui: [
      { nome: 'MAC — Museo a Cielo Aperto di Custonaci', dist: '5 min a piedi', desc: 'Le opere in marmo Perlato tra le vie del borgo, con audioguide e 360.', url: 'https://www.alessandromilia.it/project/mac/' },
      { nome: 'Grotta Mangiapane', dist: '10 min in auto', desc: 'Il borgo rupestre di Scurati, museo vivente d’estate e presepe vivente a Natale.', url: 'https://www.esploratrapani.it' },
      { nome: 'Baia Cornino e Cala Bukutu', dist: '10 min in auto', desc: 'Dove la leggenda fa sbarcare il quadro: sul fondale, a 13 metri, la statua Stella Maris (2012).', url: 'https://www.esploratrapani.it' }
    ],
    /* accessibilità — DA RILEVARE SUL POSTO (nessuna misura; il censimento 2023 la dice accessibile con servizi igienici) */
    accessibilita: {
      verificata: false,
      gradino_ingresso_cm: null, rampa: null, bagno_accessibile: true, sedute: true,
      metri_da_parcheggio: null,
      percorso_accessibile: [[50.2, 95.9], [50.2, 87.5], [50.2, 78.9], [50.2, 68.2], [50.2, 49.5]],
      nota: 'Il censimento dei santuari 2023 indica chiesa e salone accessibili ai disabili, con servizi igienici. Gradino d’ingresso, rampa, distanza dal parcheggio e percorso interno sono ancora da misurare sul posto.'
    },
    lettura_facile: 'Questa è una chiesa. Si chiama Santuario di Custonaci. Dentro c’è un quadro antico della Madonna con il Bambino. La gente racconta che il quadro è arrivato con una nave, tanto tempo fa, dopo una tempesta. Per molti anni il quadro veniva portato a Erice, a piedi, per chiedere la pioggia. Oggi non si muove più. Ogni anno, alla fine di agosto, c’è una grande festa: la sera, in spiaggia, si rifà l’arrivo della nave.'
  },

  /* ---------- narratori (story_narratori) — VOCI DI PROVA: nomi, foto e bio dei narratori veri da scegliere ---------- */
  narratori: [
    { id: 1, nome: 'Paola', ruolo: 'la guida · voce dell’arte', sigla: 'P', bio: 'Legge le pietre, le date e gli stili. (Voce sintetica di prova.)', voce_demo: 'paola' },
    { id: 2, nome: 'Riccardo', ruolo: 'il custode · voce della memoria', sigla: 'R', bio: 'Racconta le persone, i viaggi del quadro, la festa. (Voce sintetica di prova.)', voce_demo: 'riccardo' }
  ],

  /* ---------- racconto (Atto I): i quattro reel ---------- */
  capitoli: [
    { id: 'perche', n: 1, titolo: 'Perché è qui', sottotitolo: 'Una nave, una tempesta, un quadro',
      narratore: 2, video: 'media/cap1.mp4', poster: 'media/cap1.jpg', sottotitoli: 'media/cap1.vtt', durata: 31.0,
      breve: 'Una nave francese nella tempesta davanti alle Egadi, un voto, l’approdo a Cala Buguto: così il quadro è arrivato quassù.',
      trascrizione: 'Una nave francese torna da Alessandria d’Egitto verso Marsiglia. Davanti alle Egadi la tempesta la prende. Nella stiva c’è un quadro della Madonna, e i marinai fanno un voto: se si salvano, lo doneranno alla prima terra che toccano. Toccano Cala Buguto, ai piedi di monte Cofano. Vorrebbero lasciare il quadro lì, ma la gente del posto, che teme i saraceni, lo porta su, alla cappella nella roccia dedicata alla Concezione. Da quel giorno lei si chiama Maria di Custonaci.',
      voce_luogo: 'Guarda il mare, laggiù: da lì sono arrivata. Chiedi a chi mi ha portata quassù.',
      scoperta: { t: 16.5, tit: 'Il Pozzo della Madonna', narr: 'Fermati un attimo: il quadro sale sul carro. Tocca il punto «?».',
        txt: 'Il quadro sale su un carro tirato dai buoi. A metà strada i buoi si fermano, sfiniti dalla sete, e dalla terra sgorga l’acqua: quel posto si chiama ancora Pozzo della Madonna. Lo stesso giorno, racconta la tradizione, uno zoppo che aiutava a portare il quadro guarì, e un giovane sordomuto di Salemi gridò di gioia e parlò. Quel grido si ripete ancora oggi, ogni agosto, nella rievocazione dello sbarco.' },
      quiz: { d: 'Dove toccò terra la nave, secondo la tradizione?', o: ['A Cala Buguto, ai piedi di monte Cofano', 'Nel porto di Trapani', 'A Erice'], ok: 0 },
      stato_testo: 'da_validare' },
    { id: 'chi', n: 2, titolo: 'Chi l’ha costruita', sottotitolo: 'Cinque secoli di cantieri',
      narratore: 1, video: 'media/cap2.mp4', poster: 'media/cap2.jpg', sottotitoli: 'media/cap2.vtt', durata: 39.2,
      breve: 'Dalla cappella nella roccia alla chiesa del 1577, l’altare del 1627, le sculture di Calamela del 1756 e la facciata di fine Ottocento.',
      trascrizione: 'Prima della chiesa c’era una cappella scavata nella roccia. Nel 1422 un lascito nomina già l’Opera di Maria di Custonaci. Nel 1570 si comincia a costruire; nel 1577 la chiesa è inaugurata, e una campana porta ancora quella data. Nel 1627 nasce l’altare maggiore; nel 1756 Pietro Calamela scolpisce l’Abbondanza e la Sapienza che affiancano il quadro. Poi, tra il 1870 e il 1900, monsignor Giuseppe Rizzo rifà tutto quello che vedete arrivando: la scalinata a tenaglia, la facciata gotica con il rosone, il sagrato di ciottoli.',
      voce_luogo: 'Non sono nata così: mi hanno alzata, allargata, rivestita. Ogni secolo mi ha lasciato una pietra.',
      scoperta: { t: 24.3, tit: 'Il rosone', narr: 'Guarda sopra il portale. Tocca il punto «?».',
        txt: 'Il grande rosone sopra il portale è di tufo con vetri colorati, della trasformazione di fine Ottocento. Il portone di noce sotto di lui è più vecchio, del 1842. A sinistra il campanile con quattro campane, la più grande pesa 1.250 chili; a destra la torretta dell’orologio del 1883.' },
      quiz: { d: 'Chi diede al santuario la facciata e la scalinata di oggi?', o: ['Monsignor Giuseppe Rizzo, tra il 1870 e il 1900', 'Pietro Calamela', 'Domenico La Bruna'], ok: 0 },
      stato_testo: 'da_validare' },
    { id: 'viaggio', n: 3, titolo: 'Il quadro che viaggiava', sottotitolo: 'Sessanta volte a Erice',
      narratore: 2, video: 'media/cap3.mp4', poster: 'media/cap3.jpg', sottotitoli: 'media/cap3.vtt', durata: 42.0,
      breve: 'Dal 1568 al 1858 il quadro andò a Erice sessanta volte, per la pioggia, la peste e i terremoti. Poi una caduta lo rese inamovibile.',
      trascrizione: 'Per quasi tre secoli questo quadro non è stato fermo. Dal 1568 al 1858 è andato a Erice sessanta volte: per la pioggia che non veniva, per la peste, per i terremoti, per le cavallette. Gli ericini lo volevano, i custonacesi non volevano lasciarlo andare: una volta sfondarono la porta della chiesa, una volta da Palermo arrivò un battaglione di cavalleggeri. Nel 1831 gli fecero una vara con cinque angeli, e dentro, durante il viaggio, salivano i bambini malati. Poi una caduta lo danneggiò, e il quadro fu dichiarato inamovibile: da allora non esce più. In processione va una copia.',
      voce_luogo: 'Sessanta volte l’ho vista partire e tornare. Adesso resta con me.',
      scoperta: { t: 22.9, tit: 'La vara e la Macchinetta', narr: 'La vara con i cinque angeli esiste ancora. Tocca il punto «?».',
        txt: 'La vara, la cassa con cinque angeli ideata dal sacerdote Carlo Peraino e costruita dall’ebanista Giuseppe Loretta nel 1831, è nel Museo Arte e Fede, nei locali del santuario, insieme agli ex voto, a una tavola del 1541 della bottega del Crescenzio e alla «Macchinetta», la cornice di legno e vetro regalata dagli emigrati in America per proteggere il quadro.' },
      quiz: { d: 'Perché il quadro veniva portato a Erice?', o: ['Per chiedere la pioggia o la fine di pesti e terremoti', 'Per la festa di Erice', 'Per restaurarlo'], ok: 0 },
      stato_testo: 'da_validare' },
    { id: 'oggi', n: 4, titolo: 'Oggi', sottotitolo: 'L’ultimo mercoledì di agosto',
      narratore: 0, /* 0 = tutti e due */ video: 'media/cap4.mp4', poster: 'media/cap4.jpg', sottotitoli: 'media/cap4.vtt', durata: 41.5,
      breve: 'Quattro giorni di festa: i carretti, lo sbarco rievocato a Cala Buguto con la fiaccolata, i carri dei Personaggi, la processione di cinque ore.',
      trascrizione: 'La festa è nata nel 1572, e per quasi due secoli si è fatta l’8 dicembre. Dal 1752, con l’incoronazione, è passata all’estate: l’ultimo mercoledì di agosto. Dura quattro giorni. La domenica i carretti siciliani e i gruppi folk da piazza Sperone; il lunedì sera, a Cala Buguto, la rievocazione dello sbarco: il veliero, la copia del quadro, i fuochi, la fiaccolata fino al santuario con tanti fedeli a piedi scalzi. Il martedì i carri dei Personaggi; il mercoledì la processione per il paese, cinque ore, e i fuochi del rientro. Dal 2009 Custonaci è Civitas Mariae.',
      voce_luogo: 'Una volta l’anno torno al mare, nella fiaccolata. Vieni anche tu.',
      scoperta: { t: 13.2, tit: 'Stella Maris', narr: 'Sotto quel mare c’è una statua. Tocca il punto «?».',
        txt: 'A Cala Bukutu, dove la leggenda fa sbarcare il quadro, dal 2012 c’è una statua sul fondale: la Stella Maris, in perlato di Sicilia, alta cinque metri, undici tonnellate, a tredici metri di profondità. Una boa rossa la segnala.' },
      quiz: { d: 'Quando si tiene la festa patronale?', o: ['L’ultimo mercoledì di agosto', 'L’8 dicembre', 'Il 15 agosto'], ok: 0 },
      stato_testo: 'da_validare' }
  ],

  /* ---------- scene del cammino (story_tour_scene) — abbinamento file↔scena fatto guardando i panorami ---------- */
  scene: [
    { id: 1, ordine: 0, slug: 'dal-cielo', titolo: 'Dal cielo', tipo: 'sagrato', file: 'DJI_20260511172410_0081_D.jpg', pos: [50.2, 95.9], yaw_avanti: 0, pitch_avanti: -18, yaw_nord_pianta: 0,
      testo: 'Da quassù si vede tutto: la facciata con il rosone, la scalinata a tenaglia, il sagrato di ciottoli disegnato a rosette; e dietro, il mare da cui il quadro è arrivato.',
      trascrizione: 'Sei sopra Custonaci, con il drone. Davanti la facciata gotica di fine Ottocento, con il rosone e il portone di noce; sotto, la scalinata a tenaglia e il sagrato di ciottoli disegnato a rosette. A sinistra il campanile, a destra la torretta dell’orologio. Alle spalle il mare, il golfo di Cofano e la montagna: da lì è arrivata la storia che stai per ascoltare.', descrizione_scena: 'Vista dal drone: davanti e in basso la facciata chiara del santuario con il rosone, la scalinata e il sagrato; intorno le case di Custonaci; dietro, a sinistra, il golfo di Cofano con la montagna e il mare.',
      verso: 'Scendi ed entra dal portale.', audio: 'media/s_dal-cielo.mp3', durata: 19.29, qr: 'dal-cielo', nel_racconto: true },
    { id: 2, ordine: 1, slug: 'ingresso', titolo: 'L’ingresso', tipo: 'navata', file: 'IMG_20251107_101252_00_842.jpg', pos: [50.2, 87.5], yaw_avanti: 0,
      testo: null,
      trascrizione: 'Sei appena entrato. La navata centrale corre fino all’altare, tra due file di colonne con archi acuti. Sopra di te, la cantoria con il rosone.', descrizione_scena: 'Appena dentro il portone: la navata centrale corre davanti a te fino all’altare, tra due file di colonne con archi acuti; alle spalle, la porta aperta e la luce del sagrato; sopra, la cantoria.',
      verso: 'Prosegui lungo la navata; oppure sali alla cantoria o entra nel Museo Arte e Fede.', audio: 'media/s_ingresso.mp3', durata: 7.91, qr: 'ingresso', nel_racconto: false,
      deviazioni: [{ a: 8, testo: 'La cantoria' }, { a: 11, testo: 'Museo Arte e Fede' }] },
    { id: 3, ordine: 2, slug: 'navata', titolo: 'La navata', tipo: 'navata', file: 'IMG_20251107_101321_00_843.jpg', pos: [50.2, 78.9], yaw_avanti: 0,
      testo: 'Tre navate a croce latina, le colonne con gli archi acuti, la volta affrescata, il pavimento di marmi colorati di fine Ottocento. In fondo, l’altare con il quadro.',
      trascrizione: 'Tre navate a croce latina: due file di colonne con archi acuti reggono la volta affrescata, le finestre ogivali hanno vetri colorati, il pavimento è di marmi colorati di fine Ottocento. Le navate laterali sono del Novecento, con le decorazioni di Carlo Righetto. In fondo, l’altare con il quadro.', descrizione_scena: 'La navata centrale: file di banchi di legno ai lati, colonne con archi acuti, la volta affrescata; in fondo, illuminata, la tribuna con il quadro.',
      verso: 'Continua verso l’altare.', audio: 'media/s_navata.mp3', durata: 15.87, qr: 'navata', nel_racconto: true },
    { id: 4, ordine: 3, slug: 'verso-altare', titolo: 'Verso l’altare', tipo: 'navata', file: 'IMG_20251107_101358_00_844.jpg', pos: [50.2, 68.2], yaw_avanti: 0,
      testo: null, trascrizione: 'Qui, tra i banchi, ogni agosto si ferma la processione di ritorno. Cinque ore per le vie del paese, e il quadro torna a casa.', descrizione_scena: 'Metà navata: l’altare si avvicina; ai lati si aprono le navate laterali con gli altari.',
      verso: 'Ancora pochi passi.', audio: 'media/s_verso-altare.mp3', durata: 6.99, qr: 'verso-altare', nel_racconto: false },
    { id: 5, ordine: 4, slug: 'crociera', titolo: 'Il cuore della chiesa', tipo: 'navata', file: 'IMG_20251107_101421_00_845.jpg', pos: [50.2, 49.5], yaw_avanti: 0,
      testo: null, trascrizione: 'Sei al centro della croce. A destra e a sinistra si aprono le navate laterali con gli altari; davanti, due gradini più in alto, il presbiterio e la tribuna con il quadro.', descrizione_scena: 'Il centro della croce: a destra e a sinistra le navate laterali con gli altari; davanti, due gradini più in alto, il presbiterio e la tribuna con il quadro.',
      verso: 'Sali al presbiterio; oppure vai alla porta laterale o al battistero.', audio: 'media/s_crociera.mp3', durata: 9.56, qr: 'crociera', nel_racconto: false,
      deviazioni: [{ a: 16, testo: 'La porta laterale' }, { a: 17, testo: 'Il battistero' }] },
    { id: 6, ordine: 5, slug: 'presbiterio', titolo: 'Il presbiterio', tipo: 'altare', file: 'IMG_20251107_101457_00_846.jpg', pos: [50.2, 27.3], yaw_avanti: 0,
      testo: null, trascrizione: 'L’altare nuovo, con l’ambone, è del 2012. Dietro, la tribuna barocca del 1627: in alto l’Immacolata di marmo, ai lati Sant’Alberto e San Giuliano, patroni di Erice. Nella nicchia, il quadro.', descrizione_scena: 'Il presbiterio: davanti l’altare nuovo del 2012 con l’ambone; dietro, la tribuna barocca di marmi colorati con l’Immacolata in alto e il quadro nella nicchia; ai lati, le balaustre.',
      verso: 'Passa dietro l’altare, nel cappellone.', audio: 'media/s_presbiterio.mp3', durata: 12.19, qr: 'presbiterio', nel_racconto: false,
      audiodescrizione: 'media/ad_altare.mp3', audiodescrizione_testo: 'Sei davanti all’altare maggiore, due gradini più in alto della navata. L’altare occupa tutta la parete di fondo ed è di marmi colorati: rossi, bianchi, neri. Al centro, all’altezza degli occhi, c’è la nicchia con il quadro: una tavola alta un metro e quaranta e larga ottanta, con una cornice d’argento che riflette la luce di una lampada sempre accesa davanti. Nel quadro la Madonna, seduta, allatta il Bambino; due angeli le tengono una corona sopra la testa. Ai lati del quadro due figure femminili di marmo, l’Abbondanza e la Sapienza. Più in alto, al centro, l’Immacolata di marmo bianco, e ai lati due santi di legno dipinto. Dietro l’altare, nascosto, c’è il coro di legno scuro.', audiodescrizione_durata: 35.89 },
    { id: 7, ordine: 6, slug: 'altare', titolo: 'La tribuna e il quadro', tipo: 'altare', file: 'IMG_20251107_101538_00_847.jpg', pos: [50.2, 18.2], yaw_avanti: 0,
      testo: 'Eccola, nella tribuna del 1627, tra l’Abbondanza e la Sapienza scolpite da Pietro Calamela nel 1756. Intorno, il coro di noce del Settecento e i due affreschi di Domenico La Bruna.',
      trascrizione: 'Sei dietro l’altare, nel cappellone. Ai lati il coro di noce intagliato del Settecento; sopra, i due affreschi di Domenico La Bruna: la Natività della Vergine e la Natività con i pastori. Al centro la tribuna con il quadro, le sculture dell’Abbondanza e della Sapienza di Pietro Calamela del 1756, la cornice d’argento e la Lampada della Pace, accesa dal 2011.', descrizione_scena: 'Il cappellone dietro l’altare: davanti la tribuna con il quadro nella nicchia e le due sculture ai lati; a destra e a sinistra gli stalli del coro di legno scuro; sopra, i due grandi affreschi e la volta dipinta.',
      verso: 'Da qui puoi tornare verso l’uscita.', audio: 'media/s_altare.mp3', durata: 20.4, qr: 'altare', nel_racconto: true },

    /* deviazione 100: dall'ingresso, su per la cantoria fino al tetto */
    { id: 8, ordine: 100, slug: 'cantoria', titolo: 'La cantoria', tipo: 'cantoria', file: 'IMG_20251107_103230_00_857.jpg', pos: [43.5, 89.3], yaw_avanti: 0, da: 2,
      testo: null, trascrizione: 'Sei sulla cantoria, sopra l’ingresso. Da qui la navata si vede tutta, fino al quadro; alle spalle il rosone di tufo e vetri colorati.', descrizione_scena: 'La cantoria sopra l’ingresso: davanti, dall’alto, tutta la navata fino al quadro; le statue nelle nicchie; alle spalle il rosone.',
      verso: 'Avvicinati al rosone, poi sali sul tetto.', audio: 'media/s_cantoria.mp3', durata: 7.85, qr: 'cantoria', nel_racconto: false,
      deviazioni: [{ a: 9, testo: 'Il rosone' }] },
    { id: 9, ordine: 101, slug: 'rosone', titolo: 'Il rosone', tipo: 'cantoria', file: 'IMG_20251107_103324_00_858.jpg', pos: [56.9, 89.3], yaw_avanti: -84, yaw_nord_pianta: -96, da: 2,
      testo: null, descrizione_scena: 'Il rosone di tufo e vetri colorati visto da dentro, a pochi metri; sotto, la navata.',
      verso: 'Sali sul tetto, accanto al campanile.', audio: null, durata: 0, qr: 'rosone', nel_racconto: false,
      deviazioni: [{ a: 10, testo: 'Il tetto e il campanile' }] },
    { id: 10, ordine: 102, slug: 'tetto', titolo: 'Il tetto e il campanile', tipo: 'esterno', file: 'IMG_20251107_103707_00_860.jpg', pos: [20.5, 95.2], yaw_avanti: -25, da: 2,
      testo: null, trascrizione: 'Sei sul tetto, accanto al campanile. Quattro campane: la più grande pesa milleduecentocinquanta chili. Una campana del 1577 fu rifusa nel 1794. Davanti, il paese e il monte Cofano.', descrizione_scena: 'Il tetto del santuario: accanto, il campanile con le quattro campane; intorno i tetti del paese; in lontananza il monte Cofano.',
      verso: 'Torna all’ingresso.', audio: 'media/s_tetto.mp3', durata: 13.45, qr: 'tetto', nel_racconto: false },

    /* deviazione 200: dall'ingresso, il Museo Arte e Fede (cinque ambienti) */
    { id: 11, ordine: 200, slug: 'museo', titolo: 'Museo Arte e Fede · sala 1', tipo: 'museo', file: 'IMG_20251107_102242_00_852.jpg', pos: [70.7, 40.9], yaw_avanti: 0, da: 2,
      testo: null, trascrizione: 'Il Museo Arte e Fede è nato nel 2005 nei locali del santuario. Dipinti, sculture, ex voto, suppellettili: tutto quello che cinque secoli di devozione hanno lasciato qui.', descrizione_scena: 'La prima sala del museo: pareti bianche, dipinti, due sculture lignee di santi su piedistalli, le corde che delimitano il percorso.',
      verso: 'Passa nella sala successiva.', audio: 'media/s_museo.mp3', durata: 10.55, qr: 'museo', nel_racconto: false,
      deviazioni: [{ a: 12, testo: 'Sala 2' }] },
    { id: 12, ordine: 201, slug: 'museo-2', titolo: 'Museo · sala 2', tipo: 'museo', file: 'IMG_20251107_102312_00_853.jpg', pos: [72.1, 34.5], yaw_avanti: 0, da: 2,
      testo: null, descrizione_scena: 'La seconda sala, con il soffitto di travi: al centro una struttura di ferro con vetri, oggetti sacri alle pareti.',
      verso: 'Prosegui.', audio: null, durata: 0, qr: 'museo-2', nel_racconto: false,
      deviazioni: [{ a: 13, testo: 'I dipinti' }] },
    { id: 13, ordine: 202, slug: 'museo-dipinti', titolo: 'Museo · i dipinti', tipo: 'museo', file: 'IMG_20251107_102341_00_854.jpg', pos: [72.8, 28.6], yaw_avanti: 0, da: 2,
      testo: null, descrizione_scena: 'Una sala con dipinti e stendardi alle pareti, il pavimento di cotto, la luce dalle finestre.',
      verso: 'Prosegui verso il tesoro.', audio: null, durata: 0, qr: 'museo-dipinti', nel_racconto: false,
      deviazioni: [{ a: 14, testo: 'Il tesoro e gli ex voto' }] },
    { id: 14, ordine: 203, slug: 'museo-tesoro', titolo: 'Museo · il tesoro e gli ex voto', tipo: 'museo', file: 'IMG_20251107_102432_00_855.jpg', pos: [83.5, 45.9], yaw_avanti: 0, da: 2,
      testo: 'Gli ex voto: gioielli, argenti, quadretti donati per una grazia ricevuta. E una copia del quadro, dipinta su una vecchia porta.',
      trascrizione: 'Gli ex voto: gioielli, argenti, quadretti donati per una grazia ricevuta. E una copia del quadro, dipinta su una vecchia porta.', descrizione_scena: 'La sala del tesoro: vetrine illuminate con gioielli e argenti votivi; al centro, in una cornice dorata, una copia del quadro della Madonna.',
      verso: 'L’ultima sala: la vara.', audio: 'media/s_museo-tesoro.mp3', durata: 7.1, qr: 'museo-tesoro', nel_racconto: false,
      deviazioni: [{ a: 15, testo: 'La vara del 1831' }] },
    { id: 15, ordine: 204, slug: 'museo-vara', titolo: 'Museo · la vara del 1831', tipo: 'museo', file: 'IMG_20251107_102508_00_856.jpg', pos: [83.5, 51.8], yaw_avanti: 0, da: 2,
      testo: 'La vara del 1831, con i cinque angeli: dentro salivano i bambini malati, nei viaggi verso Erice.',
      trascrizione: 'La vara del 1831, con i cinque angeli, ideata dal sacerdote Carlo Peraino e costruita dall’ebanista Giuseppe Loretta. Dentro salivano i bambini malati, durante i viaggi verso Erice. E la Macchinetta, la cornice di legno e vetro regalata dagli emigrati in America.', descrizione_scena: 'La sala grande del museo: al centro, su un basamento, la vara di legno con gli angeli; intorno pannelli con fotografie e altri oggetti.',
      verso: 'Torna all’ingresso della chiesa.', audio: 'media/s_museo-vara.mp3', durata: 16.24, qr: 'museo-vara', nel_racconto: true },

    /* deviazione 300: dal cuore della chiesa, la porta laterale con l'affresco dello sbarco */
    { id: 16, ordine: 300, slug: 'porta-laterale', titolo: 'La porta laterale', tipo: 'navata', file: 'IMG_20251107_101909_00_850.jpg', pos: [27.9, 55.9], yaw_avanti: -100, da: 5,
      testo: null, trascrizione: 'Sopra la porta laterale, nella lunetta, l’affresco dello sbarco: l’arrivo dell’immagine di Maria a Cala di Buguto.', descrizione_scena: 'La porta laterale di legno, chiusa; sopra, nella lunetta, l’affresco dello sbarco; accanto un dipinto, una statua e il confessionale di legno.',
      verso: 'Torna al centro della chiesa.', audio: 'media/s_porta-laterale.mp3', durata: 6.57, qr: 'porta-laterale', nel_racconto: false },

    /* deviazione 400: dal cuore della chiesa, la navata laterale con il battistero */
    { id: 17, ordine: 400, slug: 'battistero', titolo: 'Il battistero', tipo: 'navata', file: 'IMG_20251107_101746_00_849.jpg', pos: [27.9, 63.6], yaw_avanti: -4, yaw_nord_pianta: 180, da: 5,
      testo: null, trascrizione: 'Il battistero: la parte in marmo è di Mario Bruno e figli, del 1884; il baldacchino di legno è di Giacomo Miceli, del 1891.', descrizione_scena: 'La navata laterale: il battistero con il baldacchino di legno e la recinzione di ferro; accanto l’altra porta laterale con un affresco nella lunetta; un lampadario di cristallo.',
      verso: 'Prosegui verso gli altari laterali.', audio: 'media/s_battistero.mp3', durata: 9.09, qr: 'battistero', nel_racconto: false,
      deviazioni: [{ a: 18, testo: 'Gli altari laterali' }] },
    { id: 18, ordine: 401, slug: 'altari-laterali', titolo: 'Gli altari laterali', tipo: 'navata', file: 'IMG_20251107_101616_00_848.jpg', pos: [27.9, 44.5], yaw_avanti: 4, da: 5,
      testo: null, trascrizione: 'Gli altari laterali, con le tele di Giuseppe Felici e di Domenico La Bruna. Gli autori di ogni quadro sono nelle schede delle opere.', descrizione_scena: 'Due altari laterali: uno con una statua in una nicchia azzurra, l’altro con una grande tela scura in cornice dorata; il pavimento a scacchi.',
      verso: 'In fondo, l’altare del Crocifisso.', audio: 'media/s_altari-laterali.mp3', durata: 6.95, qr: 'altari-laterali', nel_racconto: false,
      deviazioni: [{ a: 19, testo: 'L’altare del Crocifisso' }] },
    { id: 19, ordine: 402, slug: 'crocifisso', titolo: 'L’altare del Crocifisso', tipo: 'navata', file: 'IMG_20251107_101949_00_851.jpg', pos: [72.5, 44.5], yaw_avanti: -104, yaw_nord_pianta: 104, da: 5,
      testo: null, trascrizione: 'L’altare del Crocifisso: il Cristo in croce ligneo del Settecento e la Madonna di cartapesta.', descrizione_scena: 'L’altare del Crocifisso: il Cristo in croce di legno scuro, accanto la Madonna, candelieri e fiori; sopra, la volta affrescata di azzurro.',
      verso: 'Torna al centro della chiesa.', audio: 'media/s_crocifisso.mp3', durata: 5.33, qr: 'crocifisso', nel_racconto: false }
  ],

  /* ---------- opere (story_opere) + posizioni nelle scene (story_opera_scena): yaw/pitch letti sui panorami ---------- */
  opere: [
    { id: 1, slug: 'madonna-custonaci', titolo: 'Tribuna d’altare e quadro di Maria SS. di Custonaci', tipo: 'pala d’altare',
      autore: 'Quadro: ignoto, scuola di Antonello da Messina (perizia 2002) · Tribuna: 1627, marmi completati nel 1728 · Sculture: Pietro Calamela, 1756', datazione: 'XV–XVI sec. (quadro) · 1627–1756 (tribuna)', stato: 'verificata', capolavoro: true,
      fonte_attribuzione: 'https://www.cittadicustonaci.it/il-quadro',
      breve: 'La Madonna del Latte: la Vergine in trono allatta il Bambino, due angioletti le reggono la corona, sul manto vasi a doppia ansa con spighe di grano. Olio su tre tavole di legno, 140 × 80 cm, cornice rivestita d’argento. Nella tribuna barocca, tra l’Abbondanza e la Sapienza di Pietro Calamela (1756); in alto l’Immacolata di marmo, ai lati Sant’Alberto e San Giuliano, patroni di Erice. Davanti brucia sempre la Lampada della Pace (2011).',
      curiosita: 'L’originale non esce più dal santuario dal 1936: in processione va una copia. Nel 1752 fu incoronata; le corone vengono poste sulla Madonna e sul Bambino durante la festa.',
      foto_hd: 'https://www.esploratrapani.it/landing/cultura/img/quadro.jpg', ampiezza: 38,
      dettagli: [{ x: 50, y: 48, tit: 'L’allattamento', txt: 'La Madonna allatta il Bambino: per questo la chiamano Madonna del Latte.' },
                 { x: 50, y: 18, tit: 'I due angeli con la corona', txt: 'Due angioletti reggono la corona reale sopra il capo della Vergine. Le corone vere, d’argento, sono del 1752.' },
                 { x: 28, y: 66, tit: 'I vasi con le spighe', txt: 'Sul manto, vasi a doppia ansa con spighe di grano: il pane, l’abbondanza dei campi.' },
                 { x: 8, y: 40, tit: 'La cornice d’argento', txt: 'La cornice di legno è rivestita di lastre d’argento lavorate, dono dei fedeli.' },
                 { x: 50, y: 92, tit: 'La predella', txt: 'In basso, i santi Gioacchino e Anna, i genitori di Maria.' }],
      dettagli_nota: 'posizione dei dettagli da sistemare sulla foto HD',
      audio: 'media/o1.mp3', trascrizione: 'La Madonna del Latte: la Vergine in trono allatta il Bambino, due angioletti le reggono la corona, sul manto vasi di spighe. Olio su tre tavole di legno, un metro e quaranta per ottanta. Chi l’ha dipinta nessuno lo sa con certezza: la perizia del restauro del 2002 lo lega alla scuola di Antonello da Messina. Nel 1752 fu incoronata.', trascrizione_voce2: 'Noi la chiamiamo semplicemente la Madonna. È arrivata dal mare, e per tre secoli l’abbiamo portata a Erice sulle spalle. Oggi non si muove più: in processione va una copia.', durata: 18.44, audio_voce2: 'media/o1-v2.mp3', durata_voce2: 10.1,
      scene: [{ scena: 7, yaw: 0, pitch: 10, principale: true }, { scena: 6, yaw: 0, pitch: 8 }, { scena: 5, yaw: 0, pitch: 5 }] },
    { id: 2, slug: 'crocifisso-ligneo', titolo: 'Cristo in croce ligneo e Madonna di cartapesta', tipo: 'crocifisso',
      autore: 'Ignoto', datazione: 'XVIII sec.', stato: 'verificata', capolavoro: false, fonte_attribuzione: 'https://www.cittadicustonaci.it/santuario-mariano',
      breve: 'Il Cristo in croce ligneo del Settecento con la Madonna di cartapesta, sull’altare in fondo alla navata. Un altro crocifisso, della prima metà del Cinquecento, è conservato in sacrestia.',
      curiosita: null, foto_hd: null, ampiezza: 40, dettagli: [],
      audio: 'media/o2.mp3', trascrizione: 'Il Cristo in croce ligneo è del Settecento; accanto, la Madonna di cartapesta. Un altro crocifisso, della prima metà del Cinquecento, è conservato in sacrestia.', trascrizione_voce2: 'Davanti a questo Cristo si fermano i marinai prima di uscire in mare. Da sempre.', durata: 9.04, audio_voce2: 'media/o2-v2.mp3', durata_voce2: 4.73,
      scene: [{ scena: 19, yaw: -104, pitch: 8, principale: true }] },
    { id: 3, slug: 'coro-ligneo', titolo: 'Coro ligneo', tipo: 'arredo',
      autore: 'Ignoto', datazione: 'XVIII sec.', stato: 'verificata', capolavoro: true, fonte_attribuzione: 'https://www.cittadicustonaci.it/santuario-mariano',
      breve: 'Il coro in noce intagliato del Settecento, con elementi di gusto rococò, nel cappellone dietro l’altare maggiore. Sopra gli stalli, i due affreschi di Domenico La Bruna.',
      curiosita: null, foto_hd: null, ampiezza: 60, dettagli: [],
      audio: 'media/o3.mp3', trascrizione: 'Il coro in noce intagliato è del Settecento, con elementi di gusto rococò. Sopra, i due affreschi di Domenico La Bruna.', durata: 6.65, audio_voce2: null, durata_voce2: 0,
      scene: [{ scena: 7, yaw: -62, pitch: -2, principale: true }, { scena: 7, yaw: 62, pitch: -2 }] },
    { id: 4, slug: 'battistero', titolo: 'Il battistero', tipo: 'fonte battesimale',
      autore: 'Mario Bruno e figli (marmo) · Giacomo Miceli (legno)', datazione: '1884 · 1891', stato: 'verificata', capolavoro: false, fonte_attribuzione: 'https://www.cittadicustonaci.it/santuario-mariano',
      breve: 'Il battistero: la parte in marmo è di Mario Bruno e figli (1884), il baldacchino di legno dello scultore Giacomo Miceli (1891).',
      curiosita: null, foto_hd: null, ampiezza: 45, dettagli: [],
      audio: 'media/o4.mp3', trascrizione: 'Il battistero: parte in marmo di Mario Bruno e figli, 1884; parte in legno dello scultore Giacomo Miceli, 1891.', durata: 8.16, audio_voce2: null, durata_voce2: 0,
      scene: [{ scena: 17, yaw: -4, pitch: 0, principale: true }] },
    { id: 5, slug: 'memoria-mons-rizzo', titolo: 'Mons. Giuseppe Rizzo', tipo: 'lapide',
      autore: null, datazione: '1870–1900', stato: 'proposta', capolavoro: false, fonte_attribuzione: null,
      breve: 'Il luogo della memoria del monsignore che guidò la trasformazione del santuario tra il 1870 e il 1900.',
      curiosita: null, foto_hd: null, ampiezza: 50, dettagli: [], audio: null, durata: 0, audio_voce2: null, durata_voce2: 0,
      scene: [{ scena: 4, yaw: 120, pitch: -20, principale: true }] },
    { id: 6, slug: 'approdo', titolo: 'L’Approdo', tipo: 'affresco',
      autore: null, datazione: null, stato: 'verificata', capolavoro: false, fonte_attribuzione: 'https://www.cittadicustonaci.it/santuario-mariano',
      breve: 'La lunetta sopra la porta laterale con l’arrivo dell’immagine di Maria a Cala di Buguto.',
      curiosita: null, foto_hd: null, ampiezza: 40, dettagli: [],
      audio: 'media/o6.mp3', trascrizione: 'La lunetta con lo sbarco: l’arrivo del quadro a Cala di Buguto, dipinto sopra la porta laterale. L’autore è da verificare.', durata: 7.14, audio_voce2: null, durata_voce2: 0,
      scene: [{ scena: 16, yaw: -101, pitch: 24, principale: true }] },
    { id: 7, slug: 'nativita-la-bruna', titolo: 'Le due Natività di Domenico La Bruna', tipo: 'affresco',
      autore: 'Domenico La Bruna', datazione: 'prima metà del XVIII sec.', stato: 'verificata', capolavoro: true, fonte_attribuzione: 'https://www.cittadicustonaci.it/santuario-mariano',
      breve: 'I due grandi affreschi ai lati del coro: la Natività della Vergine e la Natività con i pastori, della prima metà del Settecento.',
      curiosita: 'Allo stesso pittore è attribuita anche la tela della Natività con i santi Francesco e Rocco, nella navata laterale.',
      foto_hd: null, ampiezza: 42, dettagli: [],
      audio: 'media/o7.mp3', trascrizione: 'Le due Natività di Domenico La Bruna, prima metà del Settecento: la Natività della Vergine e la Natività con i pastori, ai lati del coro.', durata: 7.83, audio_voce2: null, durata_voce2: 0,
      scene: [{ scena: 7, yaw: -61, pitch: 28, principale: true }, { scena: 7, yaw: 55, pitch: 28 }] },
    { id: 8, slug: 'vara-1831', titolo: 'La vara del 1831', tipo: 'arredo',
      autore: 'Carlo Peraino (idea) · Giuseppe Loretta (ebanista)', datazione: '1831', stato: 'verificata', capolavoro: false, fonte_attribuzione: 'https://www.cittadicustonaci.it/museo-arte-e-fede',
      breve: 'La cassa di legno con cinque angeli con cui il quadro veniva portato a Erice. Durante i viaggi vi facevano salire i bambini malati, nella speranza di una grazia. Restaurata nel 2007.',
      curiosita: null, foto_hd: null, ampiezza: 46, dettagli: [],
      audio: null, durata: 0, audio_voce2: null, durata_voce2: 0,
      scene: [{ scena: 15, yaw: 0, pitch: -4, principale: true }] },
    { id: 9, slug: 'trasporto-erice', titolo: 'Il trasporto del quadro a Erice', tipo: 'affresco',
      autore: null, datazione: null, stato: 'da_completare', capolavoro: false, fonte_attribuzione: null,
      breve: 'La lunetta sopra l’altra porta laterale con il trasporto del quadro a Erice: da fotografare e verificare.',
      curiosita: null, foto_hd: null, ampiezza: 40, dettagli: [], audio: null, durata: 0, audio_voce2: null, durata_voce2: 0,
      scene: [{ scena: 17, yaw: 65, pitch: 24, principale: true }] }
  ],

  /* ---------- traduzioni (jsonb tr): inglese; FR ed ES solo interfaccia ---------- */
  tr: {
    en: {
      luogo: { claim: 'The home of the Madonna who came from the sea', descrizione_breve: 'The Marian sanctuary on the hill of Custonaci, patroness of the town and of the Erice countryside, facing the Gulf of Cofano.',
        'voce.saluto': 'I have stood here for five centuries, on the hill that looks over the gulf. Inside me there is a painting that came from the sea: come in, I will tell you how.',
        orari_celebrazioni: 'Monday, Wednesday and Friday 6 pm (summer 6:30 pm) · Saturday 6:30 pm (summer 7 pm) · Sunday 9:30 and 11 am (summer 10:30 am)',
        orari_visita: 'Every day 9 am–12 noon and 4–8:30 pm · Wednesday and Friday afternoon until 6 pm · Sunday 9 am–1 pm and 4–6 pm',
        come_arrivare: 'Piazza Santuario 1, at the top of the town. From Trapani (18 km): SP20 Trapani–Bonagia, then SP18 Bonagia–Custonaci. From Palermo (90 km): A29 exit Castellammare del Golfo, SS187, then SP16. AST bus Trapani–Custonaci from the terminal at Trapani railway station. Multi-storey municipal car park near the sanctuary; coaches park in via Dante Alighieri (500 m).',
        'accessibilita.nota': 'The 2023 census of sanctuaries lists the church and the hall as accessible, with toilets. The entrance step, the ramp, the distance from the car park and the indoor route still have to be measured on site.',
        lettura_facile: 'This is a church. It is called the Sanctuary of Custonaci. Inside there is an old painting of the Madonna with the Child. People say the painting arrived on a ship, a long time ago, after a storm. For many years the painting was carried to Erice, on foot, to ask for rain. Today it no longer moves. Every year, at the end of August, there is a big feast: in the evening, on the beach, the arrival of the ship is re-enacted.' },
      capitoli: { perche: { titolo: 'Why it is here', sottotitolo: 'A ship, a storm, a painting', breve: 'A French ship in a storm off the Egadi islands, a vow, the landing at Cala Buguto: this is how the painting came up here.', voce_luogo: 'Look at the sea, down there: that is where I came from. Ask the one who carried me up here.' },
        chi: { titolo: 'Who built it', sottotitolo: 'Five centuries of building sites', breve: 'From the chapel in the rock to the church of 1577, the altar of 1627, Calamela’s sculptures of 1756 and the late-nineteenth-century façade.', voce_luogo: 'I was not born like this: they raised me, widened me, dressed me. Every century left me a stone.' },
        viaggio: { titolo: 'The painting that travelled', sottotitolo: 'Sixty times to Erice', breve: 'From 1568 to 1858 the painting went to Erice sixty times, for rain, plague and earthquakes. Then a fall made it immovable.', voce_luogo: 'Sixty times I saw her leave and come back. Now she stays with me.' },
        oggi: { titolo: 'Today', sottotitolo: 'The last Wednesday of August', breve: 'Four days of feast: the carts, the landing re-enacted at Cala Buguto with the torchlight procession, the floats of the Personaggi, the five-hour procession.', voce_luogo: 'Once a year I go back to the sea, in the torchlight procession. Come too.' } },
      scene: { 1: { titolo: 'From the sky', testo: 'From up here you can see everything: the façade with the rose window, the pincer staircase, the churchyard of pebbles drawn in rosettes; and behind, the sea the painting came from.', verso: 'Go down and enter through the portal.', descrizione_scena: 'Drone view: in front and below, the pale façade of the sanctuary with the rose window, the staircase and the churchyard; around it the houses of Custonaci; behind, on the left, the Gulf of Cofano with the mountain and the sea.' },
        2: { titolo: 'The entrance', verso: 'Walk along the nave; or go up to the choir loft, or into the Museo Arte e Fede.', descrizione_scena: 'Just inside the door: the central nave runs in front of you to the altar, between two rows of columns with pointed arches; behind you, the open door and the light of the churchyard; above, the choir loft.' },
        3: { titolo: 'The nave', testo: 'Three naves in a Latin cross, columns with pointed arches, the frescoed vault, the floor of coloured marble from the late nineteenth century. At the far end, the altar with the painting.', verso: 'Keep going towards the altar.', descrizione_scena: 'The central nave: rows of wooden benches on both sides, columns with pointed arches, the frescoed vault; at the end, lit up, the tribune with the painting.' },
        4: { titolo: 'Towards the altar', verso: 'A few more steps.', descrizione_scena: 'Halfway up the nave: the altar comes closer; on both sides the side aisles open with their altars.' },
        5: { titolo: 'The heart of the church', verso: 'Go up to the presbytery; or go to the side door or the baptistery.', descrizione_scena: 'The centre of the cross: right and left the side aisles with the altars; ahead, two steps up, the presbytery and the tribune with the painting.' },
        6: { titolo: 'The presbytery', verso: 'Go behind the altar, into the chancel.', descrizione_scena: 'The presbytery: in front, the new altar of 2012 with the ambo; behind, the Baroque tribune of coloured marble with the Immaculate at the top and the painting in the niche; on both sides, the balustrades.' },
        7: { titolo: 'The tribune and the painting', testo: 'Here she is, in the tribune of 1627, between Abundance and Wisdom carved by Pietro Calamela in 1756. Around her, the eighteenth-century walnut choir and the two frescoes by Domenico La Bruna.', verso: 'From here you can go back towards the exit.', descrizione_scena: 'The chancel behind the altar: in front, the tribune with the painting in the niche and the two sculptures beside it; right and left, the dark wooden choir stalls; above, the two large frescoes and the painted vault.' },
        8: { titolo: 'The choir loft', verso: 'Go closer to the rose window, then up to the roof.', descrizione_scena: 'The choir loft above the entrance: in front, from above, the whole nave down to the painting; statues in the niches; behind you, the rose window.' },
        9: { titolo: 'The rose window', verso: 'Go up to the roof, next to the bell tower.', descrizione_scena: 'The rose window of tuff and coloured glass seen from inside, a few metres away; below, the nave.' },
        10: { titolo: 'The roof and the bell tower', verso: 'Go back to the entrance.', descrizione_scena: 'The roof of the sanctuary: next to it, the bell tower with its four bells; all around, the roofs of the town; in the distance, Mount Cofano.' },
        11: { titolo: 'Museo Arte e Fede · room 1', verso: 'Go into the next room.', descrizione_scena: 'The first room of the museum: white walls, paintings, two wooden statues of saints on pedestals, ropes marking the route.' },
        12: { titolo: 'Museum · room 2', verso: 'Go on.', descrizione_scena: 'The second room, with a beamed ceiling: in the middle an iron structure with glass, sacred objects on the walls.' },
        13: { titolo: 'Museum · the paintings', verso: 'Go on to the treasury.', descrizione_scena: 'A room with paintings and banners on the walls, a terracotta floor, light from the windows.' },
        14: { titolo: 'Museum · the treasury and the ex-votos', testo: 'The ex-votos: jewels, silver, small paintings given for a grace received. And a copy of the painting, painted on an old door.', verso: 'The last room: the vara.', descrizione_scena: 'The treasury room: lit display cases with votive jewels and silver; in the middle, in a gilded frame, a copy of the painting of the Madonna.' },
        15: { titolo: 'Museum · the vara of 1831', testo: 'The vara of 1831, with the five angels: sick children were placed inside it on the journeys to Erice.', verso: 'Go back to the entrance of the church.', descrizione_scena: 'The large room of the museum: in the middle, on a base, the wooden vara with the angels; around it, panels with photographs and other objects.' },
        16: { titolo: 'The side door', verso: 'Go back to the centre of the church.', descrizione_scena: 'The wooden side door, closed; above it, in the lunette, the fresco of the landing; next to it a painting, a statue and the wooden confessional.' },
        17: { titolo: 'The baptistery', verso: 'Go on towards the side altars.', descrizione_scena: 'The side aisle: the baptistery with its wooden canopy and iron railing; next to it the other side door with a fresco in the lunette; a crystal chandelier.' },
        18: { titolo: 'The side altars', verso: 'At the end, the altar of the Crucifix.', descrizione_scena: 'Two side altars: one with a statue in a blue niche, the other with a large dark canvas in a gilded frame; the chequered floor.' },
        19: { titolo: 'The altar of the Crucifix', verso: 'Go back to the centre of the church.', descrizione_scena: 'The altar of the Crucifix: the dark wooden Christ on the cross, the Madonna beside him, candlesticks and flowers; above, the vault frescoed in blue.' } },
      opere: { 1: { titolo: 'Altar tribune and painting of Maria SS. di Custonaci', breve: 'The Nursing Madonna: the Virgin on a throne nurses the Child, two little angels hold the crown over her, on her mantle two-handled vases with ears of wheat. Oil on three wooden panels, 140 × 80 cm, in a silver-clad frame. In the Baroque tribune, between Abundance and Wisdom by Pietro Calamela (1756); at the top the marble Immaculate, on the sides Saint Albert and Saint Julian, patrons of Erice. In front of it the Lamp of Peace (2011) always burns.', curiosita: 'The original has not left the sanctuary since 1936: a copy goes in procession. It was crowned in 1752; the crowns are placed on the Madonna and the Child during the feast.' },
        2: { titolo: 'Wooden Christ on the cross and papier-mâché Madonna', breve: 'The eighteenth-century wooden Christ on the cross with the papier-mâché Madonna, on the altar at the end of the aisle. Another crucifix, from the first half of the sixteenth century, is kept in the sacristy.' },
        3: { titolo: 'Wooden choir', breve: 'The eighteenth-century carved walnut choir, with rococo elements, in the chancel behind the high altar. Above the stalls, the two frescoes by Domenico La Bruna.' },
        4: { titolo: 'The baptistery', breve: 'The baptistery: the marble part is by Mario Bruno and sons (1884), the wooden canopy by the sculptor Giacomo Miceli (1891).' },
        6: { titolo: 'The Landing', breve: 'The lunette above the side door with the arrival of the image of Mary at Cala di Buguto.' },
        7: { titolo: 'The two Nativities by Domenico La Bruna', breve: 'The two large frescoes on either side of the choir: the Nativity of the Virgin and the Nativity with the shepherds, from the first half of the eighteenth century.', curiosita: 'The canvas of the Nativity with Saints Francis and Roch, in the side aisle, is attributed to the same painter.' },
        8: { titolo: 'The vara of 1831', breve: 'The wooden case with five angels in which the painting was carried to Erice. During the journeys sick children were placed inside it, in the hope of a grace. Restored in 2007.' } }
    }
  },

  /* pesi stimati per «Scarica la visita» (MB) */
  peso: { panorama_mb: 1.3 }
};
