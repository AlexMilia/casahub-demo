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
  versione_dati: '20261017d',   /* deve essere uguale a VERSIONE_PAGINA in chiesa-sim1.html: se no la pagina avvisa */
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
      { nome: 'Baia Cornino e Cala Buguto', dist: '10 min in auto', desc: 'Dove la leggenda fa sbarcare il quadro: sul fondale, a 13 metri, la statua Stella Maris (2012).', url: 'https://www.esploratrapani.it' }
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
        txt: 'A Cala Buguto, dove la leggenda fa sbarcare il quadro, dal 2012 c’è una statua sul fondale: la Stella Maris, in perlato di Sicilia, alta cinque metri, undici tonnellate, a tredici metri di profondità. Una boa rossa la segnala.' },
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

  /* ---------- traduzioni: EN, FR, ES — generate da i18n/contenuti-*.json con i18n/costruisci.js (non modificare a mano) ---------- */
  /*TR-INIZIO*/
  tr: {
   "en": {
    "luogo": {
     "claim": "The home of the Madonna who came from the sea",
     "descrizione_breve": "The Marian sanctuary on the hill of Custonaci, patroness of the town and of the Erice countryside, facing the Gulf of Cofano.",
     "descrizione": "On the hill that looks over the Gulf of Cofano, the sanctuary keeps the painting of the Nursing Madonna, which according to tradition came by sea around 1400 and for three centuries was carried on pilgrimage to Erice. Built from 1570, with the high altar of 1627 and the Gothic façade of the late nineteenth century, it has been a parish since 1909 and the Mother Church since 2000; Custonaci has been «Civitas Mariae» since 2009.",
     "orari_celebrazioni": "Monday, Wednesday and Friday 6 pm (summer 6:30 pm) · Saturday 6:30 pm (summer 7 pm) · Sunday 9:30 and 11 am (summer 10:30 am)",
     "orari_visita": "Every day 9 am–12 noon and 4–8:30 pm · Wednesday and Friday afternoon until 6 pm · Sunday 9 am–1 pm and 4–6 pm",
     "come_arrivare": "Piazza Santuario 1, at the top of the town. From Trapani (18 km): SP20 Trapani–Bonagia, then SP18 Bonagia–Custonaci. From Palermo (90 km): A29 exit Castellammare del Golfo, SS187, then SP16. AST bus Trapani–Custonaci from the terminal at Trapani railway station. Multi-storey municipal car park near the sanctuary; coaches park in via Dante Alighieri (500 m).",
     "lettura_facile": "This is a church. It is called the Sanctuary of Custonaci. Inside there is an old painting of the Madonna with the Child. People say the painting arrived on a ship, a long time ago, after a storm. For many years the painting was carried to Erice, on foot, to ask for rain. Today it no longer moves. Every year, at the end of August, there is a big feast: in the evening, on the beach, the arrival of the ship is re-enacted.",
     "epoca_costruzione": "1570–1577, high altar 1627, façade and staircase 1870–1900",
     "festa_patronale": "last Wednesday of August (four days, starting from the Sunday before)",
     "voce.saluto": "I have stood here for five centuries, on the hill that looks over the gulf. Inside me there is a painting that came from the sea: come in, I will tell you how.",
     "voce.nome": "The Sanctuary",
     "voce.ruolo": "the voice of the church",
     "accessibilita.nota": "The 2023 census of sanctuaries lists the church and the hall as accessible, with toilets. The entrance step, the ramp, the distance from the car park and the indoor route still have to be measured on site."
    },
    "capitoli": {
     "perche": {
      "titolo": "Why it is here",
      "sottotitolo": "A ship, a storm, a painting",
      "breve": "A French ship in a storm off the Egadi islands, a vow, the landing at Cala Buguto: this is how the painting came up here.",
      "voce_luogo": "Look at the sea, down there: that is where I came from. Ask the one who carried me up here.",
      "trascrizione": "A French ship is sailing back from Alexandria in Egypt towards Marseille. Off the Egadi islands the storm catches it. In the hold there is a painting of the Madonna, and the sailors make a vow: if they are saved, they will give it to the first land they touch. They touch Cala Buguto, at the foot of Mount Cofano. They would like to leave the painting there, but the local people, who fear the Saracens, carry it up to the chapel in the rock dedicated to the Conception. From that day she has been called Maria di Custonaci.",
      "scoperta.tit": "Our Lady’s Well",
      "scoperta.txt": "The painting goes up on a cart drawn by oxen. Halfway the oxen stop, worn out by thirst, and water springs from the ground: that place is still called Pozzo della Madonna, Our Lady’s Well. The same day, tradition says, a lame man who was helping to carry the painting was healed, and a young deaf-mute from Salemi shouted for joy and spoke. That shout is still repeated today, every August, in the re-enactment of the landing.",
      "scoperta.narr": "Stop for a moment: the painting goes up on the cart. Tap the «?» point.",
      "quiz.d": "Where did the ship come ashore, according to tradition?",
      "quiz.o": [
       "At Cala Buguto, at the foot of Mount Cofano",
       "In the port of Trapani",
       "At Erice"
      ]
     },
     "chi": {
      "titolo": "Who built it",
      "sottotitolo": "Five centuries of building sites",
      "breve": "From the chapel in the rock to the church of 1577, the altar of 1627, Calamela’s sculptures of 1756 and the late-nineteenth-century façade.",
      "voce_luogo": "I was not born like this: they raised me, widened me, dressed me. Every century left me a stone.",
      "trascrizione": "Before the church there was a chapel carved into the rock. In 1422 a bequest already names the Opera di Maria di Custonaci. In 1570 building begins; in 1577 the church is inaugurated, and a bell still bears that date. In 1627 the high altar is made; in 1756 Pietro Calamela carves the Abundance and the Wisdom that stand beside the painting. Then, between 1870 and 1900, Monsignor Giuseppe Rizzo remakes everything you see as you arrive: the pincer staircase, the Gothic façade with the rose window, the pebbled churchyard.",
      "scoperta.tit": "The rose window",
      "scoperta.txt": "The great rose window above the portal is made of tuff with coloured glass, from the late-nineteenth-century transformation. The walnut door below it is older, from 1842. On the left, the bell tower with four bells, the largest weighing 1,250 kilos; on the right, the clock turret of 1883.",
      "scoperta.narr": "Look above the portal. Tap the «?» point.",
      "quiz.d": "Who gave the sanctuary its present façade and staircase?",
      "quiz.o": [
       "Monsignor Giuseppe Rizzo, between 1870 and 1900",
       "Pietro Calamela",
       "Domenico La Bruna"
      ]
     },
     "viaggio": {
      "titolo": "The painting that travelled",
      "sottotitolo": "Sixty times to Erice",
      "breve": "From 1568 to 1858 the painting went to Erice sixty times, for rain, plague and earthquakes. Then a fall made it immovable.",
      "voce_luogo": "Sixty times I saw her leave and come back. Now she stays with me.",
      "trascrizione": "For almost three centuries this painting never stayed still. From 1568 to 1858 it went to Erice sixty times: for rain that would not come, for plague, for earthquakes, for locusts. The people of Erice wanted it, the people of Custonaci did not want to let it go: once they broke down the church door, once a battalion of light cavalry arrived from Palermo. In 1831 they made it a vara with five angels, and during the journey sick children were put inside. Then a fall damaged it, and the painting was declared immovable: since then it no longer leaves. A copy goes in procession.",
      "scoperta.tit": "The vara and the Macchinetta",
      "scoperta.txt": "The vara, the case with five angels designed by the priest Carlo Peraino and built by the cabinetmaker Giuseppe Loretta in 1831, is in the Museo Arte e Fede, in the rooms of the sanctuary, together with the ex-votos, a panel of 1541 from the workshop of Crescenzio and the «Macchinetta», the wood and glass frame given by emigrants in America to protect the painting.",
      "scoperta.narr": "The vara with the five angels still exists. Tap the «?» point.",
      "quiz.d": "Why was the painting carried to Erice?",
      "quiz.o": [
       "To ask for rain or for an end to plagues and earthquakes",
       "For the feast of Erice",
       "To have it restored"
      ]
     },
     "oggi": {
      "titolo": "Today",
      "sottotitolo": "The last Wednesday of August",
      "breve": "Four days of feast: the carts, the landing re-enacted at Cala Buguto with the torchlight procession, the floats of the Personaggi, the five-hour procession.",
      "voce_luogo": "Once a year I go back to the sea, in the torchlight procession. Come too.",
      "trascrizione": "The feast began in 1572, and for almost two centuries it was held on 8 December. From 1752, with the crowning, it moved to summer: the last Wednesday of August. It lasts four days. On Sunday, the Sicilian carts and the folk groups from piazza Sperone; on Monday evening, at Cala Buguto, the re-enactment of the landing: the sailing ship, the copy of the painting, the fireworks, the torchlight procession up to the sanctuary with many of the faithful barefoot. On Tuesday, the floats of the Personaggi; on Wednesday, the procession through the town, five hours long, and the fireworks for the return. Since 2009 Custonaci has been Civitas Mariae.",
      "scoperta.tit": "Stella Maris",
      "scoperta.txt": "At Cala Buguto, where legend has the painting come ashore, there has been a statue on the seabed since 2012: the Stella Maris, in Perlato di Sicilia marble, five metres tall, eleven tonnes, thirteen metres deep. A red buoy marks it.",
      "scoperta.narr": "Under that sea there is a statue. Tap the «?» point.",
      "quiz.d": "When is the patronal feast held?",
      "quiz.o": [
       "The last Wednesday of August",
       "8 December",
       "15 August"
      ]
     }
    },
    "scene": {
     "1": {
      "titolo": "From the sky",
      "testo": "From up here you can see everything: the façade with the rose window, the pincer staircase, the churchyard of pebbles drawn in rosettes; and behind, the sea the painting came from.",
      "verso": "Go down and enter through the portal.",
      "descrizione_scena": "Drone view: in front and below, the pale façade of the sanctuary with the rose window, the staircase and the churchyard; around it the houses of Custonaci; behind, on the left, the Gulf of Cofano with the mountain and the sea.",
      "trascrizione": "You are above Custonaci, with the drone. In front, the Gothic façade of the late nineteenth century, with the rose window and the walnut door; below, the pincer staircase and the churchyard of pebbles drawn in rosettes. On the left the bell tower, on the right the clock turret. Behind, the sea, the Gulf of Cofano and the mountain: that is where the story you are about to hear came from."
     },
     "2": {
      "titolo": "The entrance",
      "verso": "Walk along the nave; or go up to the choir loft, or into the Museo Arte e Fede.",
      "descrizione_scena": "Just inside the door: the central nave runs in front of you to the altar, between two rows of columns with pointed arches; behind you, the open door and the light of the churchyard; above, the choir loft.",
      "trascrizione": "You have just come in. The central nave runs to the altar, between two rows of columns with pointed arches. Above you, the choir loft with the rose window."
     },
     "3": {
      "titolo": "The nave",
      "testo": "Three naves in a Latin cross, columns with pointed arches, the frescoed vault, the floor of coloured marble from the late nineteenth century. At the far end, the altar with the painting.",
      "verso": "Keep going towards the altar.",
      "descrizione_scena": "The central nave: rows of wooden benches on both sides, columns with pointed arches, the frescoed vault; at the end, lit up, the tribune with the painting.",
      "trascrizione": "Three naves in a Latin cross: two rows of columns with pointed arches hold up the frescoed vault, the pointed windows have coloured glass, the floor is of coloured marble from the late nineteenth century. The side aisles date from the twentieth century, with decorations by Carlo Righetto. At the far end, the altar with the painting."
     },
     "4": {
      "titolo": "Towards the altar",
      "verso": "A few more steps.",
      "descrizione_scena": "Halfway up the nave: the altar comes closer; on both sides the side aisles open with their altars.",
      "trascrizione": "Here, among the pews, the returning procession stops every August. Five hours through the streets of the town, and the painting comes home."
     },
     "5": {
      "titolo": "The heart of the church",
      "verso": "Go up to the presbytery; or go to the side door or the baptistery.",
      "descrizione_scena": "The centre of the cross: right and left the side aisles with the altars; ahead, two steps up, the presbytery and the tribune with the painting.",
      "trascrizione": "You are at the centre of the cross. Right and left the side aisles open with their altars; ahead, two steps up, the presbytery and the tribune with the painting."
     },
     "6": {
      "titolo": "The presbytery",
      "verso": "Go behind the altar, into the chancel.",
      "descrizione_scena": "The presbytery: in front, the new altar of 2012 with the ambo; behind, the Baroque tribune of coloured marble with the Immaculate at the top and the painting in the niche; on both sides, the balustrades.",
      "trascrizione": "The new altar, with the ambo, dates from 2012. Behind it, the Baroque tribune of 1627: at the top the marble Immaculate, on the sides Saint Albert and Saint Julian, patrons of Erice. In the niche, the painting.",
      "audiodescrizione_testo": "You are in front of the high altar, two steps above the nave. The altar fills the whole end wall and is made of coloured marble: red, white, black. In the centre, at eye level, is the niche with the painting: a panel one metre forty high and eighty centimetres wide, with a silver frame that reflects the light of a lamp always burning in front of it. In the painting the Madonna, seated, nurses the Child; two angels hold a crown over her head. On either side of the painting, two marble female figures, Abundance and Wisdom. Higher up, in the centre, the Immaculate in white marble, and on the sides two saints in painted wood. Behind the altar, hidden, is the dark wooden choir."
     },
     "7": {
      "titolo": "The tribune and the painting",
      "testo": "Here she is, in the tribune of 1627, between Abundance and Wisdom carved by Pietro Calamela in 1756. Around her, the eighteenth-century walnut choir and the two frescoes by Domenico La Bruna.",
      "verso": "From here you can go back towards the exit.",
      "descrizione_scena": "The chancel behind the altar: in front, the tribune with the painting in the niche and the two sculptures beside it; right and left, the dark wooden choir stalls; above, the two large frescoes and the painted vault.",
      "trascrizione": "You are behind the altar, in the chancel. On the sides, the carved walnut choir of the eighteenth century; above, the two frescoes by Domenico La Bruna: the Nativity of the Virgin and the Nativity with the shepherds. In the centre, the tribune with the painting, the sculptures of Abundance and Wisdom by Pietro Calamela of 1756, the silver frame and the Lamp of Peace, lit since 2011."
     },
     "8": {
      "titolo": "The choir loft",
      "verso": "Go closer to the rose window, then up to the roof.",
      "descrizione_scena": "The choir loft above the entrance: in front, from above, the whole nave down to the painting; statues in the niches; behind you, the rose window.",
      "trascrizione": "You are in the choir loft, above the entrance. From here you can see the whole nave, down to the painting; behind you, the rose window of tuff and coloured glass."
     },
     "9": {
      "titolo": "The rose window",
      "verso": "Go up to the roof, next to the bell tower.",
      "descrizione_scena": "The rose window of tuff and coloured glass seen from inside, a few metres away; below, the nave."
     },
     "10": {
      "titolo": "The roof and the bell tower",
      "verso": "Go back to the entrance.",
      "descrizione_scena": "The roof of the sanctuary: next to it, the bell tower with its four bells; all around, the roofs of the town; in the distance, Mount Cofano.",
      "trascrizione": "You are on the roof, next to the bell tower. Four bells: the largest weighs one thousand two hundred and fifty kilos. A bell of 1577 was recast in 1794. In front of you, the town and Mount Cofano."
     },
     "11": {
      "titolo": "Museo Arte e Fede · room 1",
      "verso": "Go into the next room.",
      "descrizione_scena": "The first room of the museum: white walls, paintings, two wooden statues of saints on pedestals, ropes marking the route.",
      "trascrizione": "The Museo Arte e Fede opened in 2005 in the rooms of the sanctuary. Paintings, sculptures, ex-votos, church furnishings: everything that five centuries of devotion have left here."
     },
     "12": {
      "titolo": "Museum · room 2",
      "verso": "Go on.",
      "descrizione_scena": "The second room, with a beamed ceiling: in the middle an iron structure with glass, sacred objects on the walls."
     },
     "13": {
      "titolo": "Museum · the paintings",
      "verso": "Go on to the treasury.",
      "descrizione_scena": "A room with paintings and banners on the walls, a terracotta floor, light from the windows."
     },
     "14": {
      "titolo": "Museum · the treasury and the ex-votos",
      "testo": "The ex-votos: jewels, silver, small paintings given for a grace received. And a copy of the painting, painted on an old door.",
      "verso": "The last room: the vara.",
      "descrizione_scena": "The treasury room: lit display cases with votive jewels and silver; in the middle, in a gilded frame, a copy of the painting of the Madonna.",
      "trascrizione": "The ex-votos: jewels, silver, small paintings given for a grace received. And a copy of the painting, painted on an old door."
     },
     "15": {
      "titolo": "Museum · the vara of 1831",
      "testo": "The vara of 1831, with the five angels: sick children were placed inside it on the journeys to Erice.",
      "verso": "Go back to the entrance of the church.",
      "descrizione_scena": "The large room of the museum: in the middle, on a base, the wooden vara with the angels; around it, panels with photographs and other objects.",
      "trascrizione": "The vara of 1831, with the five angels, designed by the priest Carlo Peraino and built by the cabinetmaker Giuseppe Loretta. Sick children were placed inside it during the journeys to Erice. And the Macchinetta, the wood and glass frame given by emigrants in America."
     },
     "16": {
      "titolo": "The side door",
      "verso": "Go back to the centre of the church.",
      "descrizione_scena": "The wooden side door, closed; above it, in the lunette, the fresco of the landing; next to it a painting, a statue and the wooden confessional.",
      "trascrizione": "Above the side door, in the lunette, the fresco of the landing: the arrival of the image of Mary at Cala di Buguto."
     },
     "17": {
      "titolo": "The baptistery",
      "verso": "Go on towards the side altars.",
      "descrizione_scena": "The side aisle: the baptistery with its wooden canopy and iron railing; next to it the other side door with a fresco in the lunette; a crystal chandelier.",
      "trascrizione": "The baptistery: the marble part is by Mario Bruno and sons, from 1884; the wooden canopy is by Giacomo Miceli, from 1891."
     },
     "18": {
      "titolo": "The side altars",
      "verso": "At the end, the altar of the Crucifix.",
      "descrizione_scena": "Two side altars: one with a statue in a blue niche, the other with a large dark canvas in a gilded frame; the chequered floor.",
      "trascrizione": "The side altars, with the canvases by Giuseppe Felici and Domenico La Bruna. The artist of each painting is given in the artwork cards."
     },
     "19": {
      "titolo": "The altar of the Crucifix",
      "verso": "Go back to the centre of the church.",
      "descrizione_scena": "The altar of the Crucifix: the dark wooden Christ on the cross, the Madonna beside him, candlesticks and flowers; above, the vault frescoed in blue.",
      "trascrizione": "The altar of the Crucifix: the eighteenth-century wooden Christ on the cross and the papier-mâché Madonna."
     }
    },
    "opere": {
     "1": {
      "titolo": "Altar tribune and painting of Maria SS. di Custonaci",
      "tipo": "altarpiece",
      "autore": "Painting: unknown, school of Antonello da Messina (2002 expert report) · Tribune: 1627, marble completed in 1728 · Sculptures: Pietro Calamela, 1756",
      "datazione": "15th–16th century (painting) · 1627–1756 (tribune)",
      "breve": "The Nursing Madonna: the Virgin on a throne nurses the Child, two little angels hold the crown over her, on her mantle two-handled vases with ears of wheat. Oil on three wooden panels, 140 × 80 cm, in a silver-clad frame. In the Baroque tribune, between Abundance and Wisdom by Pietro Calamela (1756); at the top the marble Immaculate, on the sides Saint Albert and Saint Julian, patrons of Erice. In front of it the Lamp of Peace (2011) always burns.",
      "curiosita": "The original has not left the sanctuary since 1936: a copy goes in procession. It was crowned in 1752; the crowns are placed on the Madonna and the Child during the feast.",
      "trascrizione": "The Nursing Madonna: the Virgin on a throne nurses the Child, two little angels hold the crown over her, on her mantle vases with ears of wheat. Oil on three wooden panels, one metre forty by eighty. Nobody knows for certain who painted it: the expert report from the 2002 restoration links it to the school of Antonello da Messina. It was crowned in 1752.",
      "trascrizione_voce2": "We simply call her the Madonna. She came from the sea, and for three centuries we carried her to Erice on our shoulders. Today she no longer moves: a copy goes in procession.",
      "dettagli": [
       {
        "tit": "The nursing",
        "txt": "The Madonna nurses the Child: that is why she is called the Nursing Madonna."
       },
       {
        "tit": "The two angels with the crown",
        "txt": "Two little angels hold the royal crown above the Virgin’s head. The real crowns, in silver, date from 1752."
       },
       {
        "tit": "The vases with the wheat",
        "txt": "On the mantle, two-handled vases with ears of wheat: bread, the abundance of the fields."
       },
       {
        "tit": "The silver frame",
        "txt": "The wooden frame is covered with worked silver plates, a gift from the faithful."
       },
       {
        "tit": "The predella",
        "txt": "At the bottom, Saints Joachim and Anne, the parents of Mary."
       }
      ]
     },
     "2": {
      "titolo": "Wooden Christ on the cross and papier-mâché Madonna",
      "tipo": "crucifix",
      "autore": "Unknown",
      "datazione": "18th century",
      "breve": "The eighteenth-century wooden Christ on the cross with the papier-mâché Madonna, on the altar at the end of the aisle. Another crucifix, from the first half of the sixteenth century, is kept in the sacristy.",
      "trascrizione": "The wooden Christ on the cross dates from the eighteenth century; beside it, the papier-mâché Madonna. Another crucifix, from the first half of the sixteenth century, is kept in the sacristy.",
      "trascrizione_voce2": "Sailors stop in front of this Christ before they go out to sea. They always have."
     },
     "3": {
      "titolo": "Wooden choir",
      "tipo": "furnishing",
      "autore": "Unknown",
      "datazione": "18th century",
      "breve": "The eighteenth-century carved walnut choir, with rococo elements, in the chancel behind the high altar. Above the stalls, the two frescoes by Domenico La Bruna.",
      "trascrizione": "The carved walnut choir dates from the eighteenth century, with rococo elements. Above it, the two frescoes by Domenico La Bruna."
     },
     "4": {
      "titolo": "The baptistery",
      "tipo": "baptismal font",
      "autore": "Mario Bruno and sons (marble) · Giacomo Miceli (wood)",
      "datazione": "1884 · 1891",
      "breve": "The baptistery: the marble part is by Mario Bruno and sons (1884), the wooden canopy by the sculptor Giacomo Miceli (1891).",
      "trascrizione": "The baptistery: the marble part by Mario Bruno and sons, 1884; the wooden part by the sculptor Giacomo Miceli, 1891."
     },
     "5": {
      "titolo": "Mons. Giuseppe Rizzo",
      "tipo": "memorial plaque",
      "datazione": "1870–1900",
      "breve": "The place of remembrance of the monsignor who led the transformation of the sanctuary between 1870 and 1900."
     },
     "6": {
      "titolo": "The Landing",
      "tipo": "fresco",
      "breve": "The lunette above the side door with the arrival of the image of Mary at Cala di Buguto.",
      "trascrizione": "The lunette with the landing: the arrival of the painting at Cala di Buguto, painted above the side door. The artist is still to be verified."
     },
     "7": {
      "titolo": "The two Nativities by Domenico La Bruna",
      "tipo": "fresco",
      "autore": "Domenico La Bruna",
      "datazione": "first half of the 18th century",
      "breve": "The two large frescoes on either side of the choir: the Nativity of the Virgin and the Nativity with the shepherds, from the first half of the eighteenth century.",
      "curiosita": "The canvas of the Nativity with Saints Francis and Roch, in the side aisle, is attributed to the same painter.",
      "trascrizione": "The two Nativities by Domenico La Bruna, first half of the eighteenth century: the Nativity of the Virgin and the Nativity with the shepherds, on either side of the choir."
     },
     "8": {
      "titolo": "The vara of 1831",
      "tipo": "furnishing",
      "autore": "Carlo Peraino (design) · Giuseppe Loretta (cabinetmaker)",
      "datazione": "1831",
      "breve": "The wooden case with five angels in which the painting was carried to Erice. During the journeys sick children were placed inside it, in the hope of a grace. Restored in 2007."
     },
     "9": {
      "titolo": "The carrying of the painting to Erice",
      "tipo": "fresco",
      "breve": "The lunette above the other side door with the carrying of the painting to Erice: still to be photographed and verified."
     }
    },
    "narratori": {
     "1": {
      "ruolo": "the guide · voice of art",
      "bio": "Reads the stones, the dates and the styles. (Synthetic test voice.)"
     },
     "2": {
      "ruolo": "the keeper · voice of memory",
      "bio": "Tells of the people, the painting’s journeys, the feast. (Synthetic test voice.)"
     }
    },
    "campi": {
     "festa.nome": "Feast of Our Lady of Custonaci",
     "festa.edizione.tema": "Mother of Christ",
     "festa.momenti.novena.titolo": "The novena begins",
     "festa.momenti.novena.luogo": "Sanctuary",
     "festa.momenti.novena.desc": "Every evening: Rosary at 6 pm and Mass at 7 pm, until the feast day.",
     "festa.momenti.chiavi.titolo": "The keys of the town to Our Lady",
     "festa.momenti.chiavi.luogo": "Sanctuary",
     "festa.momenti.chiavi.desc": "The great candle is lit and the mayor hands the keys of Custonaci to the Virgin.",
     "festa.momenti.carretti.titolo": "Sicilian carts and folk groups",
     "festa.momenti.carretti.luogo": "From piazza Europa (Sperone) to the old town",
     "festa.momenti.carretti.desc": "The parade of painted carts and folk groups, with local sweets and wine for everyone. At 6:30 am, the pilgrimage on foot to the sanctuary.",
     "festa.momenti.sbarco.titolo": "The landing at Cala Buguto",
     "festa.momenti.sbarco.luogo": "Cala Buguto, Cornino bay",
     "festa.momenti.sbarco.desc": "A sailing ship brings the copy of the painting from the sea, among songs, prayers and fireworks; then a torchlight procession walks Our Lady up to the sanctuary, many barefoot.",
     "festa.momenti.fontane.titolo": "Dancing fountains",
     "festa.momenti.fontane.luogo": "Piazza Santuario",
     "festa.momenti.fontane.desc": "Two shows of water and light in front of the sanctuary, at 9:30 pm and midnight.",
     "festa.momenti.messa.titolo": "Solemn Mass",
     "festa.momenti.messa.luogo": "Sanctuary",
     "festa.momenti.messa.desc": "Bells and firecrackers from 7 am, then the solemn celebration.",
     "festa.momenti.processione.titolo": "The procession",
     "festa.momenti.processione.luogo": "Through the streets of the town",
     "festa.momenti.processione.desc": "Five hours through the streets of Custonaci; on its return it stops among the pews of the nave.",
     "festa.momenti.fuochi.titolo": "Closing fireworks",
     "festa.momenti.fuochi.luogo": "Contrada Tribli",
     "festa.momenti.fuochi.desc": "At midnight the fireworks close the feast.",
     "festa.storia.0.testo": "The feast is born. For almost two centuries it is held on 8 December.",
     "festa.storia.1.testo": "The painting is carried to Erice sixty times: for rain, plague, earthquakes, locusts.",
     "festa.storia.2.testo": "The painting is crowned and the feast moves to summer: the last Wednesday of August.",
     "festa.storia.3.testo": "The carrying frame with five angels: sick children rode inside it during the journeys.",
     "festa.storia.4.testo": "The painting no longer leaves the sanctuary: a copy goes in procession.",
     "festa.storia.5.testo": "Custonaci becomes «Civitas Mariae», the town of Mary.",
     "festa.storia.6.testo": "275th edition, on the theme «Mother of Christ».",
     "dove.punti.santuario.nome": "Sanctuary of Maria SS. di Custonaci",
     "dove.punti.santuario.nota": "At the top of the town, up the steps.",
     "dove.punti.parcheggio.nome": "Municipal multi-storey car park",
     "dove.punti.parcheggio.nota": "The closest to the sanctuary. The top level is free; spaces are few on feast days.",
     "dove.punti.bus.nome": "AST bus stop",
     "dove.punti.bus.nota": "Trapani–Custonaci line, from the terminal at Trapani railway station.",
     "dove.punti.pullman.nome": "Coach parking",
     "dove.punti.pullman.nota": "Tour coaches stop here; then on foot to the sanctuary.",
     "dove.punti.pozzo.nome": "Our Lady’s Well",
     "dove.punti.pozzo.nota": "Where, tradition says, the thirsty oxen stopped and water sprang up.",
     "dove.punti.cala-buguto.nome": "Cala Buguto · Cornino bay",
     "dove.punti.cala-buguto.nota": "Where the ship with the painting landed; every August the landing is re-enacted.",
     "dove.arrivare.0.come": "By car from Trapani",
     "dove.arrivare.0.testo": "SP20 Trapani–Bonagia, then SP18 Bonagia–Custonaci.",
     "dove.arrivare.1.come": "By car from Palermo",
     "dove.arrivare.1.testo": "A29 exit Castellammare del Golfo, SS187, then SP16 «Asse dei Marmi».",
     "dove.arrivare.2.come": "By bus",
     "dove.arrivare.2.testo": "AST bus Trapani–Custonaci from the terminal at Trapani railway station; get off in via Roma, a short walk from the sanctuary.",
     "dove.arrivare.3.come": "By coach",
     "dove.arrivare.3.testo": "Coaches park in via Dante Alighieri, then on foot.",
     "sostieni.obiettivo": "The Arte e Fede Museum",
     "sostieni.descrizione": "Donations help look after the vestments, the votive offerings and the 1831 carrying frame, and keep the museum open for visitors.",
     "carte.privacy.0": "You do not need to register to use the visit, and we do not ask for your name, email or phone number.",
     "carte.privacy.1": "The page uses no cookies or advertising systems. What it saves for the offline visit (panoramas, voices, your stamps) stays on your phone, and you can delete it from your browser settings.",
     "carte.privacy.2": "Anonymous statistics: to understand how the visit is used, the page counts openings, points viewed, artworks opened, language and duration. Each visit is given a random number that does not identify you and is not stored on your phone; your network address is not saved. If your browser asks not to be tracked («Do Not Track»), the statistics do not start.",
     "carte.privacy.3": "Ask the church: your question is sent to the Esplora Trapani service and to an artificial intelligence model (Claude, by Anthropic) to write the answer, using only the Sanctuary’s texts. We keep the beginning of the question, without knowing who asked it, to improve the texts. Do not write personal data in the chat.",
     "carte.privacy.4": "The map and videos come from external services (OpenStreetMap, YouTube in cookie-free mode) and load only when you reach them or tap them.",
     "carte.crediti.0": "360° photos and videos, drone footage, reel editing: Esplora Trapani · Alessandro Milia, ENAC-licensed pilot.",
     "carte.crediti.1": "Reels of the feast: Esplora Trapani (YouTube).",
     "carte.crediti.2": "Texts: from public sources (parish cittadicustonaci.it, 2023 census of sanctuaries, Catalogo generale dei beni culturali, custonaciweb.it), awaiting review by the Sanctuary.",
     "carte.crediti.3": "Plan of the Sanctuary: historical plan with the building phases.",
     "carte.crediti.4": "Voices: synthetic test voices (Piper), to be replaced with real narrators.",
     "carte.crediti.5": "Map: © OpenStreetMap contributors, with Leaflet. Panoramas: Pannellum. Animations: GSAP.",
     "carte.accessibilita.0": "Status: partially compliant. The page passes the automated WCAG 2.1 level A and AA checks (axe) on phone and computer.",
     "carte.accessibilita.1": "There is resizable text, easy reading, a spoken description of what you see, and subtitles and transcripts for all the audio.",
     "carte.accessibilita.2": "Still to do on site: measure the entrance step, the ramp, the indoor route and the distance from the car park; testing with people with visual and mobility impairments.",
     "carte.accessibilita.3": "To report an accessibility problem, write on WhatsApp to 349 062 7997.",
     "carte.narratori": "The current voices are synthetic. Real narrators will need a release for the use of their voice and image, and the transfer of rights to the texts they read.",
     "prosegui.0.desc": "The works in Perlato marble along the streets of the village, with audio guides and 360.",
     "prosegui.1.desc": "The cave village of Scurati, a living museum in summer and a living nativity scene at Christmas.",
     "prosegui.2.desc": "Where legend has the painting come ashore: on the seabed, 13 metres down, the Stella Maris statue (2012).",
     "chiedi.suggerite.0": "Who painted the Madonna?",
     "chiedi.suggerite.1": "Why was the painting carried to Erice?",
     "chiedi.suggerite.2": "When is the landing of Our Lady?",
     "chiedi.suggerite.3": "Where can I park?",
     "chiedi.suggerite.4": "Is there Mass today?",
     "chiedi.suggerite.5": "What is the vara?",
     "rete.mac-custonaci.nome": "MAC · Open-Air Museum",
     "rete.cala-buguto.nome": "Cala Buguto and Cornino bay",
     "rete.segesta.nome": "Segesta Archaeological Park",
     "rete.grotta-mangiapane.nome": "Mangiapane Cave",
     "prosegui.0.nome": "MAC — Custonaci Open-Air Museum",
     "prosegui.0.dist": "5 min on foot",
     "prosegui.1.nome": "Mangiapane Cave",
     "prosegui.1.dist": "10 min by car",
     "prosegui.2.nome": "Cornino bay and Cala Buguto",
     "prosegui.2.dist": "10 min by car"
    }
   },
   "fr": {
    "luogo": {
     "claim": "La maison de la Madone venue de la mer",
     "descrizione_breve": "Le sanctuaire marial sur la colline de Custonaci, patronne du village et de la campagne d’Erice, face au golfe de Cofano.",
     "descrizione": "Sur la colline qui regarde le golfe de Cofano, le sanctuaire garde le tableau de la Vierge allaitante (Madonna del Latte), arrivé selon la tradition par la mer vers 1400 et porté pendant trois siècles en pèlerinage jusqu’à Erice. Construit à partir de 1570, avec le maître-autel de 1627 et la façade gothique de la fin du XIXe siècle, il est paroisse depuis 1909 et église mère depuis 2000 ; Custonaci est «Civitas Mariae» depuis 2009.",
     "orari_celebrazioni": "Lundi, mercredi et vendredi 18:00 (été 18:30) · samedi 18:30 (été 19:00) · dimanche 9:30 et 11:00 (été 10:30)",
     "orari_visita": "Tous les jours 9:00–12:00 et 16:00–20:30 · mercredi et vendredi après-midi jusqu’à 18:00 · dimanche 9:00–13:00 et 16:00–18:00",
     "come_arrivare": "Piazza Santuario 1, en haut du village. Depuis Trapani (18 km) : SP20 Trapani–Bonagia, puis SP18 Bonagia–Custonaci. Depuis Palerme (90 km) : A29 sortie Castellammare del Golfo, SS187, puis SP16 «Asse dei Marmi». Bus AST Trapani–Custonaci depuis le terminus à la gare de Trapani. Parking municipal à étages près du sanctuaire ; autocars de tourisme via Dante Alighieri (500 m).",
     "lettura_facile": "Ceci est une église. Elle s’appelle Sanctuaire de Custonaci. À l’intérieur, il y a un tableau ancien de la Vierge avec l’Enfant. Les gens racontent que le tableau est arrivé sur un bateau, il y a très longtemps, après une tempête. Pendant de nombreuses années, on portait le tableau à Erice, à pied, pour demander la pluie. Aujourd’hui, il ne bouge plus. Chaque année, à la fin du mois d’août, il y a une grande fête : le soir, sur la plage, on refait l’arrivée du bateau.",
     "epoca_costruzione": "1570–1577, maître-autel 1627, façade et escalier 1870–1900",
     "festa_patronale": "dernier mercredi d’août (quatre jours à partir du dimanche précédent)",
     "voce.saluto": "Je suis ici depuis cinq siècles, sur la colline qui regarde le golfe. En moi se trouve un tableau venu de la mer : entre, je vais te raconter comment.",
     "voce.nome": "Le Sanctuaire",
     "voce.ruolo": "la voix de l’église",
     "accessibilita.nota": "Le recensement des sanctuaires de 2023 indique que l’église et la salle sont accessibles aux personnes handicapées, avec des toilettes. La marche d’entrée, la rampe, la distance depuis le parking et le parcours intérieur doivent encore être mesurés sur place."
    },
    "capitoli": {
     "perche": {
      "titolo": "Pourquoi ici",
      "sottotitolo": "Un navire, une tempête, un tableau",
      "breve": "Un navire français dans la tempête devant les Égades, un vœu, l’accostage à Cala Buguto : c’est ainsi que le tableau est arrivé jusqu’ici.",
      "voce_luogo": "Regarde la mer, là-bas : c’est de là que je suis arrivée. Demande à ceux qui m’ont portée jusqu’ici.",
      "trascrizione": "Un navire français revient d’Alexandrie d’Égypte vers Marseille. Devant les Égades, la tempête le surprend. Dans la cale se trouve un tableau de la Vierge, et les marins font un vœu : s’ils sont sauvés, ils l’offriront à la première terre qu’ils toucheront. Ils touchent Cala Buguto, au pied du mont Cofano. Ils voudraient laisser le tableau là, mais les gens du lieu, qui craignent les Sarrasins, le montent jusqu’à la chapelle creusée dans la roche, dédiée à la Conception. Depuis ce jour, elle s’appelle Marie de Custonaci.",
      "scoperta.tit": "Le Puits de la Madone",
      "scoperta.txt": "Le tableau monte sur un char tiré par des bœufs. À mi-chemin, les bœufs s’arrêtent, épuisés par la soif, et l’eau jaillit de la terre : cet endroit s’appelle encore le Puits de la Madone (Pozzo della Madonna). Le même jour, raconte la tradition, un boiteux qui aidait à porter le tableau fut guéri, et un jeune sourd-muet de Salemi cria de joie et parla. Ce cri se répète encore aujourd’hui, chaque mois d’août, dans la reconstitution du débarquement.",
      "scoperta.narr": "Arrête-toi un instant : le tableau monte sur le char. Touche le point «?».",
      "quiz.d": "Où le navire a-t-il touché terre, selon la tradition ?",
      "quiz.o": [
       "À Cala Buguto, au pied du mont Cofano",
       "Dans le port de Trapani",
       "À Erice"
      ]
     },
     "chi": {
      "titolo": "Qui l’a construite",
      "sottotitolo": "Cinq siècles de chantiers",
      "breve": "De la chapelle dans la roche à l’église de 1577, l’autel de 1627, les sculptures de Calamela de 1756 et la façade de la fin du XIXe siècle.",
      "voce_luogo": "Je ne suis pas née ainsi : on m’a élevée, agrandie, revêtue. Chaque siècle m’a laissé une pierre.",
      "trascrizione": "Avant l’église, il y avait une chapelle creusée dans la roche. En 1422, un legs mentionne déjà l’Œuvre de Marie de Custonaci. En 1570, on commence à bâtir ; en 1577, l’église est inaugurée, et une cloche porte encore cette date. En 1627 naît le maître-autel ; en 1756, Pietro Calamela sculpte l’Abondance et la Sagesse qui encadrent le tableau. Puis, entre 1870 et 1900, Mgr Giuseppe Rizzo refait tout ce que vous voyez en arrivant : l’escalier en tenaille, la façade gothique avec la rosace, le parvis de galets.",
      "scoperta.tit": "La rosace",
      "scoperta.txt": "La grande rosace au-dessus du portail est en tuf avec des vitraux colorés, et date de la transformation de la fin du XIXe siècle. La porte en noyer en dessous est plus ancienne, de 1842. À gauche, le clocher avec quatre cloches, la plus grande pèse 1.250 kilos ; à droite, la tourelle de l’horloge de 1883.",
      "scoperta.narr": "Regarde au-dessus du portail. Touche le point «?».",
      "quiz.d": "Qui a donné au sanctuaire sa façade et son escalier actuels ?",
      "quiz.o": [
       "Mgr Giuseppe Rizzo, entre 1870 et 1900",
       "Pietro Calamela",
       "Domenico La Bruna"
      ]
     },
     "viaggio": {
      "titolo": "Le tableau voyageur",
      "sottotitolo": "Soixante fois à Erice",
      "breve": "De 1568 à 1858, le tableau est allé soixante fois à Erice, pour la pluie, la peste et les tremblements de terre. Puis une chute l’a rendu inamovible.",
      "voce_luogo": "Soixante fois, je l’ai vue partir et revenir. Maintenant, elle reste avec moi.",
      "trascrizione": "Pendant près de trois siècles, ce tableau n’est pas resté immobile. De 1568 à 1858, il est allé soixante fois à Erice : pour la pluie qui ne venait pas, pour la peste, pour les tremblements de terre, pour les sauterelles. Les habitants d’Erice le voulaient, ceux de Custonaci ne voulaient pas le laisser partir : une fois, ils enfoncèrent la porte de l’église ; une autre fois, un bataillon de chevau-légers arriva de Palerme. En 1831, on lui fit une vara à cinq anges, et pendant le voyage on y faisait monter les enfants malades. Puis une chute l’endommagea, et le tableau fut déclaré inamovible : depuis, il ne sort plus. En procession, c’est une copie qui part.",
      "scoperta.tit": "La vara et la «Macchinetta»",
      "scoperta.txt": "La vara, la châsse à cinq anges imaginée par le prêtre Carlo Peraino et construite par l’ébéniste Giuseppe Loretta en 1831, se trouve au Museo Arte e Fede, dans les locaux du sanctuaire, avec les ex-voto, un panneau de 1541 de l’atelier du Crescenzio et la «Macchinetta», le cadre de bois et de verre offert par les émigrés en Amérique pour protéger le tableau.",
      "scoperta.narr": "La vara aux cinq anges existe encore. Touche le point «?».",
      "quiz.d": "Pourquoi portait-on le tableau à Erice ?",
      "quiz.o": [
       "Pour demander la pluie ou la fin des pestes et des tremblements de terre",
       "Pour la fête d’Erice",
       "Pour le restaurer"
      ]
     },
     "oggi": {
      "titolo": "Aujourd’hui",
      "sottotitolo": "Le dernier mercredi d’août",
      "breve": "Quatre jours de fête : les charrettes, le débarquement reconstitué à Cala Buguto avec la retraite aux flambeaux, les chars des Personnages, la procession de cinq heures.",
      "voce_luogo": "Une fois par an, je retourne à la mer, dans la retraite aux flambeaux. Viens, toi aussi.",
      "trascrizione": "La fête est née en 1572 et, pendant près de deux siècles, elle a eu lieu le 8 décembre. Depuis 1752, avec le couronnement, elle est passée à l’été : le dernier mercredi d’août. Elle dure quatre jours. Le dimanche, les charrettes siciliennes et les groupes folkloriques depuis la piazza Sperone ; le lundi soir, à Cala Buguto, la reconstitution du débarquement : le voilier, la copie du tableau, les feux d’artifice, la retraite aux flambeaux jusqu’au sanctuaire, avec de nombreux fidèles pieds nus. Le mardi, les chars des Personnages ; le mercredi, la procession dans le village, cinq heures, et les feux d’artifice du retour. Depuis 2009, Custonaci est Civitas Mariae.",
      "scoperta.tit": "Stella Maris",
      "scoperta.txt": "À Cala Buguto, où la légende fait débarquer le tableau, une statue repose depuis 2012 sur le fond marin : la Stella Maris, en marbre perlato de Sicile, haute de cinq mètres, onze tonnes, à treize mètres de profondeur. Une bouée rouge la signale.",
      "scoperta.narr": "Sous cette mer, il y a une statue. Touche le point «?».",
      "quiz.d": "Quand a lieu la fête patronale ?",
      "quiz.o": [
       "Le dernier mercredi d’août",
       "Le 8 décembre",
       "Le 15 août"
      ]
     }
    },
    "scene": {
     "1": {
      "titolo": "Vu du ciel",
      "testo": "D’ici, on voit tout : la façade avec la rosace, l’escalier en tenaille, le parvis de galets dessiné en rosettes ; et derrière, la mer d’où le tableau est arrivé.",
      "verso": "Descends et entre par le portail.",
      "descrizione_scena": "Vue du drone : devant et en bas, la façade claire du sanctuaire avec la rosace, l’escalier et le parvis ; autour, les maisons de Custonaci ; derrière, à gauche, le golfe de Cofano avec la montagne et la mer.",
      "trascrizione": "Tu es au-dessus de Custonaci, avec le drone. Devant, la façade gothique de la fin du XIXe siècle, avec la rosace et la porte en noyer ; en dessous, l’escalier en tenaille et le parvis de galets dessiné en rosettes. À gauche le clocher, à droite la tourelle de l’horloge. Derrière, la mer, le golfe de Cofano et la montagne : c’est de là qu’est venue l’histoire que tu vas écouter."
     },
     "2": {
      "titolo": "L’entrée",
      "verso": "Continue le long de la nef ; ou monte à la tribune des chantres, ou entre dans le Museo Arte e Fede.",
      "descrizione_scena": "Juste après la porte : la nef centrale s’étend devant toi jusqu’à l’autel, entre deux rangées de colonnes aux arcs brisés ; derrière toi, la porte ouverte et la lumière du parvis ; au-dessus, la tribune des chantres.",
      "trascrizione": "Tu viens d’entrer. La nef centrale s’étend jusqu’à l’autel, entre deux rangées de colonnes aux arcs brisés. Au-dessus de toi, la tribune des chantres avec la rosace."
     },
     "3": {
      "titolo": "La nef",
      "testo": "Trois nefs en croix latine, les colonnes aux arcs brisés, la voûte peinte à fresque, le sol de marbres colorés de la fin du XIXe siècle. Au fond, l’autel avec le tableau.",
      "verso": "Continue vers l’autel.",
      "descrizione_scena": "La nef centrale : des rangées de bancs en bois de chaque côté, des colonnes aux arcs brisés, la voûte peinte à fresque ; au fond, éclairée, la tribune avec le tableau.",
      "trascrizione": "Trois nefs en croix latine : deux rangées de colonnes aux arcs brisés soutiennent la voûte peinte à fresque, les fenêtres ogivales ont des vitraux colorés, le sol est en marbres colorés de la fin du XIXe siècle. Les nefs latérales datent du XXe siècle, avec les décorations de Carlo Righetto. Au fond, l’autel avec le tableau."
     },
     "4": {
      "titolo": "Vers l’autel",
      "verso": "Encore quelques pas.",
      "descrizione_scena": "Au milieu de la nef : l’autel se rapproche ; sur les côtés s’ouvrent les nefs latérales avec leurs autels.",
      "trascrizione": "Ici, entre les bancs, la procession du retour s’arrête chaque mois d’août. Cinq heures dans les rues du village, et le tableau rentre à la maison."
     },
     "5": {
      "titolo": "Le cœur de l’église",
      "verso": "Monte au presbytère ; ou va vers la porte latérale ou le baptistère.",
      "descrizione_scena": "Le centre de la croix : à droite et à gauche, les nefs latérales avec leurs autels ; devant, deux marches plus haut, le presbytère et la tribune avec le tableau.",
      "trascrizione": "Tu es au centre de la croix. À droite et à gauche s’ouvrent les nefs latérales avec leurs autels ; devant, deux marches plus haut, le presbytère et la tribune avec le tableau."
     },
     "6": {
      "titolo": "Le presbytère",
      "verso": "Passe derrière l’autel, dans la grande chapelle du chœur.",
      "descrizione_scena": "Le presbytère : devant, le nouvel autel de 2012 avec l’ambon ; derrière, la tribune baroque en marbres colorés avec l’Immaculée en haut et le tableau dans la niche ; sur les côtés, les balustrades.",
      "trascrizione": "Le nouvel autel, avec l’ambon, date de 2012. Derrière, la tribune baroque de 1627 : en haut, l’Immaculée en marbre, sur les côtés saint Albert et saint Julien, patrons d’Erice. Dans la niche, le tableau.",
      "audiodescrizione_testo": "Tu es devant le maître-autel, deux marches plus haut que la nef. L’autel occupe tout le mur du fond et il est en marbres colorés : rouges, blancs, noirs. Au centre, à hauteur des yeux, se trouve la niche avec le tableau : un panneau haut d’un mètre quarante et large de quatre-vingts centimètres, avec un cadre d’argent qui reflète la lumière d’une lampe toujours allumée devant. Dans le tableau, la Vierge, assise, allaite l’Enfant ; deux anges tiennent une couronne au-dessus de sa tête. De chaque côté du tableau, deux figures féminines en marbre, l’Abondance et la Sagesse. Plus haut, au centre, l’Immaculée en marbre blanc et, sur les côtés, deux saints en bois peint. Derrière l’autel, caché, se trouve le chœur en bois sombre."
     },
     "7": {
      "titolo": "La tribune et le tableau",
      "testo": "La voici, dans la tribune de 1627, entre l’Abondance et la Sagesse sculptées par Pietro Calamela en 1756. Autour, le chœur en noyer du XVIIIe siècle et les deux fresques de Domenico La Bruna.",
      "verso": "D’ici, tu peux revenir vers la sortie.",
      "descrizione_scena": "La grande chapelle derrière l’autel : devant, la tribune avec le tableau dans la niche et les deux sculptures sur les côtés ; à droite et à gauche, les stalles du chœur en bois sombre ; au-dessus, les deux grandes fresques et la voûte peinte.",
      "trascrizione": "Tu es derrière l’autel, dans la grande chapelle du chœur. Sur les côtés, le chœur en noyer sculpté du XVIIIe siècle ; au-dessus, les deux fresques de Domenico La Bruna : la Nativité de la Vierge et la Nativité avec les bergers. Au centre, la tribune avec le tableau, les sculptures de l’Abondance et de la Sagesse de Pietro Calamela de 1756, le cadre d’argent et la Lampe de la Paix, allumée depuis 2011."
     },
     "8": {
      "titolo": "La tribune des chantres",
      "verso": "Approche-toi de la rosace, puis monte sur le toit.",
      "descrizione_scena": "La tribune des chantres au-dessus de l’entrée : devant, d’en haut, toute la nef jusqu’au tableau ; les statues dans les niches ; derrière, la rosace.",
      "trascrizione": "Tu es sur la tribune des chantres, au-dessus de l’entrée. D’ici, on voit toute la nef, jusqu’au tableau ; derrière toi, la rosace en tuf et vitraux colorés."
     },
     "9": {
      "titolo": "La rosace",
      "verso": "Monte sur le toit, à côté du clocher.",
      "descrizione_scena": "La rosace en tuf et vitraux colorés vue de l’intérieur, à quelques mètres ; en dessous, la nef."
     },
     "10": {
      "titolo": "Le toit et le clocher",
      "verso": "Reviens à l’entrée.",
      "descrizione_scena": "Le toit du sanctuaire : à côté, le clocher avec les quatre cloches ; autour, les toits du village ; au loin, le mont Cofano.",
      "trascrizione": "Tu es sur le toit, à côté du clocher. Quatre cloches : la plus grande pèse mille deux cent cinquante kilos. Une cloche de 1577 a été refondue en 1794. Devant, le village et le mont Cofano."
     },
     "11": {
      "titolo": "Museo Arte e Fede · salle 1",
      "verso": "Passe dans la salle suivante.",
      "descrizione_scena": "La première salle du musée : murs blancs, tableaux, deux sculptures de saints en bois sur des piédestaux, les cordons qui délimitent le parcours.",
      "trascrizione": "Le Museo Arte e Fede est né en 2005 dans les locaux du sanctuaire. Tableaux, sculptures, ex-voto, objets liturgiques : tout ce que cinq siècles de dévotion ont laissé ici."
     },
     "12": {
      "titolo": "Musée · salle 2",
      "verso": "Continue.",
      "descrizione_scena": "La deuxième salle, au plafond à poutres : au centre, une structure en fer et en verre, des objets sacrés aux murs."
     },
     "13": {
      "titolo": "Musée · les tableaux",
      "verso": "Continue vers le trésor.",
      "descrizione_scena": "Une salle avec des tableaux et des bannières aux murs, le sol en terre cuite, la lumière des fenêtres."
     },
     "14": {
      "titolo": "Musée · le trésor et les ex-voto",
      "testo": "Les ex-voto : bijoux, pièces d’argenterie, petits tableaux offerts pour une grâce reçue. Et une copie du tableau, peinte sur une vieille porte.",
      "verso": "La dernière salle : la vara.",
      "descrizione_scena": "La salle du trésor : des vitrines éclairées avec des bijoux et des argenteries votives ; au centre, dans un cadre doré, une copie du tableau de la Vierge.",
      "trascrizione": "Les ex-voto : bijoux, pièces d’argenterie, petits tableaux offerts pour une grâce reçue. Et une copie du tableau, peinte sur une vieille porte."
     },
     "15": {
      "titolo": "Musée · la vara de 1831",
      "testo": "La vara de 1831, avec les cinq anges : on y faisait monter les enfants malades, lors des voyages vers Erice.",
      "verso": "Reviens à l’entrée de l’église.",
      "descrizione_scena": "La grande salle du musée : au centre, sur un socle, la vara en bois avec les anges ; autour, des panneaux avec des photographies et d’autres objets.",
      "trascrizione": "La vara de 1831, avec les cinq anges, imaginée par le prêtre Carlo Peraino et construite par l’ébéniste Giuseppe Loretta. On y faisait monter les enfants malades, pendant les voyages vers Erice. Et la «Macchinetta», le cadre de bois et de verre offert par les émigrés en Amérique."
     },
     "16": {
      "titolo": "La porte latérale",
      "verso": "Reviens au centre de l’église.",
      "descrizione_scena": "La porte latérale en bois, fermée ; au-dessus, dans la lunette, la fresque du débarquement ; à côté, un tableau, une statue et le confessionnal en bois.",
      "trascrizione": "Au-dessus de la porte latérale, dans la lunette, la fresque du débarquement : l’arrivée de l’image de Marie à Cala di Buguto."
     },
     "17": {
      "titolo": "Le baptistère",
      "verso": "Continue vers les autels latéraux.",
      "descrizione_scena": "La nef latérale : le baptistère avec le baldaquin en bois et la grille en fer ; à côté, l’autre porte latérale avec une fresque dans la lunette ; un lustre en cristal.",
      "trascrizione": "Le baptistère : la partie en marbre est de Mario Bruno et fils, de 1884 ; le baldaquin en bois est de Giacomo Miceli, de 1891."
     },
     "18": {
      "titolo": "Les autels latéraux",
      "verso": "Au fond, l’autel du Crucifix.",
      "descrizione_scena": "Deux autels latéraux : l’un avec une statue dans une niche bleu ciel, l’autre avec une grande toile sombre dans un cadre doré ; le sol en damier.",
      "trascrizione": "Les autels latéraux, avec les toiles de Giuseppe Felici et de Domenico La Bruna. Les auteurs de chaque tableau figurent dans les fiches des œuvres."
     },
     "19": {
      "titolo": "L’autel du Crucifix",
      "verso": "Reviens au centre de l’église.",
      "descrizione_scena": "L’autel du Crucifix : le Christ en croix en bois sombre, à côté la Vierge, des chandeliers et des fleurs ; au-dessus, la voûte peinte à fresque en bleu ciel.",
      "trascrizione": "L’autel du Crucifix : le Christ en croix en bois du XVIIIe siècle et la Vierge en papier mâché."
     }
    },
    "opere": {
     "1": {
      "titolo": "Tribune d’autel et tableau de Maria SS. di Custonaci",
      "tipo": "retable",
      "autore": "Tableau : anonyme, école d’Antonello da Messina (expertise 2002) · Tribune : 1627, marbres achevés en 1728 · Sculptures : Pietro Calamela, 1756",
      "datazione": "XVe–XVIe s. (tableau) · 1627–1756 (tribune)",
      "breve": "La Vierge allaitante (Madonna del Latte) : la Vierge en trône allaite l’Enfant, deux angelots lui tiennent la couronne, sur le manteau des vases à deux anses avec des épis de blé. Huile sur trois planches de bois, 140 × 80 cm, cadre revêtu d’argent. Dans la tribune baroque, entre l’Abondance et la Sagesse de Pietro Calamela (1756) ; en haut l’Immaculée en marbre, sur les côtés saint Albert et saint Julien, patrons d’Erice. Devant brûle toujours la Lampe de la Paix (2011).",
      "curiosita": "L’original ne sort plus du sanctuaire depuis 1936 : en procession, c’est une copie qui part. En 1752, elle fut couronnée ; les couronnes sont posées sur la Vierge et sur l’Enfant pendant la fête.",
      "trascrizione": "La Vierge allaitante : la Vierge en trône allaite l’Enfant, deux angelots lui tiennent la couronne, sur le manteau des vases d’épis. Huile sur trois planches de bois, un mètre quarante sur quatre-vingts centimètres. Qui l’a peinte, personne ne le sait avec certitude : l’expertise de la restauration de 2002 la rattache à l’école d’Antonello da Messina. En 1752, elle fut couronnée.",
      "trascrizione_voce2": "Nous, nous l’appelons simplement la Madone. Elle est arrivée de la mer et, pendant trois siècles, nous l’avons portée à Erice sur nos épaules. Aujourd’hui, elle ne bouge plus : en procession, c’est une copie qui part.",
      "dettagli": [
       {
        "tit": "L’allaitement",
        "txt": "La Vierge allaite l’Enfant : c’est pourquoi on l’appelle la Madonna del Latte, la Vierge allaitante."
       },
       {
        "tit": "Les deux anges à la couronne",
        "txt": "Deux angelots tiennent la couronne royale au-dessus de la tête de la Vierge. Les vraies couronnes, en argent, datent de 1752."
       },
       {
        "tit": "Les vases aux épis",
        "txt": "Sur le manteau, des vases à deux anses avec des épis de blé : le pain, l’abondance des champs."
       },
       {
        "tit": "Le cadre d’argent",
        "txt": "Le cadre en bois est revêtu de plaques d’argent travaillées, don des fidèles."
       },
       {
        "tit": "La prédelle",
        "txt": "En bas, saint Joachim et sainte Anne, les parents de Marie."
       }
      ]
     },
     "2": {
      "titolo": "Christ en croix en bois et Vierge en papier mâché",
      "tipo": "crucifix",
      "autore": "Anonyme",
      "datazione": "XVIIIe s.",
      "breve": "Le Christ en croix en bois du XVIIIe siècle avec la Vierge en papier mâché, sur l’autel au fond de la nef. Un autre crucifix, de la première moitié du XVIe siècle, est conservé dans la sacristie.",
      "trascrizione": "Le Christ en croix en bois date du XVIIIe siècle ; à côté, la Vierge en papier mâché. Un autre crucifix, de la première moitié du XVIe siècle, est conservé dans la sacristie.",
      "trascrizione_voce2": "C’est devant ce Christ que les marins s’arrêtent avant de prendre la mer. Depuis toujours."
     },
     "3": {
      "titolo": "Chœur en bois",
      "tipo": "mobilier",
      "autore": "Anonyme",
      "datazione": "XVIIIe s.",
      "breve": "Le chœur en noyer sculpté du XVIIIe siècle, avec des éléments de goût rococo, dans la grande chapelle derrière le maître-autel. Au-dessus des stalles, les deux fresques de Domenico La Bruna.",
      "trascrizione": "Le chœur en noyer sculpté date du XVIIIe siècle, avec des éléments de goût rococo. Au-dessus, les deux fresques de Domenico La Bruna."
     },
     "4": {
      "titolo": "Le baptistère",
      "tipo": "fonts baptismaux",
      "autore": "Mario Bruno et fils (marbre) · Giacomo Miceli (bois)",
      "datazione": "1884 · 1891",
      "breve": "Le baptistère : la partie en marbre est de Mario Bruno et fils (1884), le baldaquin en bois du sculpteur Giacomo Miceli (1891).",
      "trascrizione": "Le baptistère : partie en marbre de Mario Bruno et fils, 1884 ; partie en bois du sculpteur Giacomo Miceli, 1891."
     },
     "5": {
      "titolo": "Mgr Giuseppe Rizzo",
      "tipo": "plaque commémorative",
      "datazione": "1870–1900",
      "breve": "Le lieu de mémoire du prélat qui conduisit la transformation du sanctuaire entre 1870 et 1900."
     },
     "6": {
      "titolo": "L’Accostage",
      "tipo": "fresque",
      "breve": "La lunette au-dessus de la porte latérale avec l’arrivée de l’image de Marie à Cala di Buguto.",
      "trascrizione": "La lunette du débarquement : l’arrivée du tableau à Cala di Buguto, peinte au-dessus de la porte latérale. L’auteur reste à vérifier."
     },
     "7": {
      "titolo": "Les deux Nativités de Domenico La Bruna",
      "tipo": "fresque",
      "autore": "Domenico La Bruna",
      "datazione": "première moitié du XVIIIe s.",
      "breve": "Les deux grandes fresques de part et d’autre du chœur : la Nativité de la Vierge et la Nativité avec les bergers, de la première moitié du XVIIIe siècle.",
      "curiosita": "On attribue aussi au même peintre la toile de la Nativité avec saint François et saint Roch, dans la nef latérale.",
      "trascrizione": "Les deux Nativités de Domenico La Bruna, première moitié du XVIIIe siècle : la Nativité de la Vierge et la Nativité avec les bergers, de part et d’autre du chœur."
     },
     "8": {
      "titolo": "La vara de 1831",
      "tipo": "mobilier",
      "autore": "Carlo Peraino (idée) · Giuseppe Loretta (ébéniste)",
      "datazione": "1831",
      "breve": "La châsse en bois à cinq anges dans laquelle on portait le tableau à Erice. Pendant les voyages, on y faisait monter les enfants malades, dans l’espoir d’une grâce. Restaurée en 2007."
     },
     "9": {
      "titolo": "Le transport du tableau à Erice",
      "tipo": "fresque",
      "breve": "La lunette au-dessus de l’autre porte latérale avec le transport du tableau à Erice : à photographier et à vérifier."
     }
    },
    "narratori": {
     "1": {
      "ruolo": "la guide · voix de l’art",
      "bio": "Elle lit les pierres, les dates et les styles. (Voix de synthèse provisoire.)"
     },
     "2": {
      "ruolo": "le gardien · voix de la mémoire",
      "bio": "Il raconte les gens, les voyages du tableau, la fête. (Voix de synthèse provisoire.)"
     }
    },
    "campi": {
     "festa.nome": "Fête de Maria SS. di Custonaci",
     "festa.edizione.tema": "Mère du Christ",
     "festa.momenti.novena.titolo": "Début de la neuvaine",
     "festa.momenti.novena.luogo": "Sanctuaire",
     "festa.momenti.novena.desc": "Chaque soir, à 18 h le Rosaire et à 19 h la messe, jusqu’au jour de la fête.",
     "festa.momenti.chiavi.titolo": "Les clés de la ville remises à la Madone",
     "festa.momenti.chiavi.luogo": "Sanctuaire",
     "festa.momenti.chiavi.desc": "On allume le cierge et le maire remet à la Vierge les clés de Custonaci.",
     "festa.momenti.carretti.titolo": "Charrettes siciliennes et groupes folkloriques",
     "festa.momenti.carretti.luogo": "De la piazza Europa (Sperone) au centre historique",
     "festa.momenti.carretti.desc": "Le défilé des charrettes et des groupes folkloriques, avec des miliddi et du vin pour tous. Le matin, à 6:30, le pèlerinage à pied vers le sanctuaire.",
     "festa.momenti.sbarco.titolo": "Le débarquement à Cala Buguto",
     "festa.momenti.sbarco.luogo": "Cala Buguto, baie de Cornino",
     "festa.momenti.sbarco.desc": "Le voilier arrive de la mer avec la copie du tableau, entre chants, prières et feux d’artifice ; puis la retraite aux flambeaux accompagne la Madone jusqu’au sanctuaire, beaucoup pieds nus.",
     "festa.momenti.fontane.titolo": "Fontaines dansantes",
     "festa.momenti.fontane.luogo": "Piazza Santuario",
     "festa.momenti.fontane.desc": "Deux spectacles d’eau et de lumière devant le sanctuaire, à 21:30 et à minuit.",
     "festa.momenti.messa.titolo": "La messe solennelle",
     "festa.momenti.messa.luogo": "Sanctuaire",
     "festa.momenti.messa.desc": "Le matin, volée de cloches et pétards dès 7 h, puis la célébration solennelle.",
     "festa.momenti.processione.titolo": "La procession",
     "festa.momenti.processione.luogo": "Dans les rues du village",
     "festa.momenti.processione.desc": "Cinq heures dans les rues de Custonaci ; au retour, la procession s’arrête entre les bancs de la nef.",
     "festa.momenti.fuochi.titolo": "Les feux d’artifice du retour",
     "festa.momenti.fuochi.luogo": "Contrada Tribli",
     "festa.momenti.fuochi.desc": "À minuit, les feux d’artifice clôturent la fête.",
     "festa.storia.0.testo": "Naissance de la fête. Pendant près de deux siècles, elle est célébrée le 8 décembre.",
     "festa.storia.1.testo": "Le tableau va soixante fois à Erice : pour la pluie, la peste, les tremblements de terre, les sauterelles.",
     "festa.storia.2.testo": "Le tableau est couronné et la fête passe à l’été : le dernier mercredi d’août.",
     "festa.storia.3.testo": "La vara aux cinq anges : pendant les voyages, on y faisait monter les enfants malades.",
     "festa.storia.4.testo": "Le tableau ne sort plus du sanctuaire : en procession, c’est une copie qui part.",
     "festa.storia.5.testo": "Custonaci devient «Civitas Mariae», cité de Marie.",
     "festa.storia.6.testo": "275e édition, sur le thème «Mère du Christ».",
     "dove.punti.santuario.nome": "Sanctuaire de Maria SS. di Custonaci",
     "dove.punti.santuario.nota": "En haut du village, au sommet de l’escalier.",
     "dove.punti.parcheggio.nome": "Parking municipal à étages",
     "dove.punti.parcheggio.nota": "Le plus proche du sanctuaire. L’étage supérieur est gratuit ; les places sont rares les jours de fête.",
     "dove.punti.bus.nome": "Arrêt de bus AST",
     "dove.punti.bus.nota": "Ligne Trapani–Custonaci, depuis le terminus à la gare de Trapani.",
     "dove.punti.pullman.nome": "Stationnement des autocars de tourisme",
     "dove.punti.pullman.nota": "Les autocars de tourisme s’arrêtent ici ; ensuite, à pied jusqu’au sanctuaire.",
     "dove.punti.pozzo.nome": "Puits de la Madone",
     "dove.punti.pozzo.nota": "Là où, raconte la tradition, les bœufs assoiffés s’arrêtèrent et l’eau jaillit.",
     "dove.punti.cala-buguto.nome": "Cala Buguto · baie de Cornino",
     "dove.punti.cala-buguto.nota": "Là où arriva le navire avec le tableau ; chaque mois d’août, la reconstitution du débarquement.",
     "dove.arrivare.0.come": "En voiture depuis Trapani",
     "dove.arrivare.0.testo": "SP20 Trapani–Bonagia, puis SP18 Bonagia–Custonaci.",
     "dove.arrivare.1.come": "En voiture depuis Palerme",
     "dove.arrivare.1.testo": "A29 sortie Castellammare del Golfo, SS187, puis SP16 «Asse dei Marmi».",
     "dove.arrivare.2.come": "En bus",
     "dove.arrivare.2.testo": "Bus AST Trapani–Custonaci depuis le terminus à la gare de Trapani ; on descend via Roma, à deux pas du sanctuaire.",
     "dove.arrivare.3.come": "En autocar",
     "dove.arrivare.3.testo": "Stationnement des autocars de tourisme via Dante Alighieri, puis à pied.",
     "sostieni.obiettivo": "Le Museo Arte e Fede",
     "sostieni.descrizione": "Les dons aident à conserver les vêtements, les ex-voto et la vara de 1831, et à garder le musée ouvert pour ceux qui viennent de loin.",
     "carte.privacy.0": "Pour utiliser la visite, il n’est pas nécessaire de s’inscrire et nous ne demandons ni nom, ni e-mail, ni téléphone.",
     "carte.privacy.1": "La page n’utilise ni cookies ni systèmes publicitaires. Ce qu’elle enregistre pour la visite hors connexion (panoramas, voix, tes tampons) reste sur ton téléphone et tu peux l’effacer depuis les paramètres du navigateur.",
     "carte.privacy.2": "Statistiques anonymes : pour comprendre comment la visite est utilisée, la page compte les ouvertures, les points vus, les œuvres ouvertes, la langue et la durée. À chaque visite correspond un numéro aléatoire qui ne t’identifie pas et n’est pas conservé sur le téléphone ; ton adresse réseau n’est pas enregistrée. Si le navigateur demande à ne pas être suivi («Do Not Track»), les statistiques ne démarrent pas.",
     "carte.privacy.3": "Demande à l’église : la question est envoyée au service d’Esplora Trapani et à un modèle d’intelligence artificielle (Claude, d’Anthropic) pour rédiger la réponse, en utilisant uniquement les textes du Sanctuaire. Nous conservons le début de la question, sans savoir qui l’a posée, pour améliorer les textes. N’écris pas de données personnelles dans le chat.",
     "carte.privacy.4": "La carte et les vidéos proviennent de services externes (OpenStreetMap, YouTube en mode sans cookies) et ne s’ouvrent que lorsque tu y arrives ou que tu les touches.",
     "carte.crediti.0": "Photos et vidéos à 360°, prises de vue par drone, montage des reels : Esplora Trapani · Alessandro Milia, pilote certifié ENAC.",
     "carte.crediti.1": "Reel de la fête : Esplora Trapani (YouTube).",
     "carte.crediti.2": "Textes : issus de sources publiques (paroisse cittadicustonaci.it, recensement des sanctuaires 2023, Catalogue général des biens culturels, custonaciweb.it), en attente de relecture par le Sanctuaire.",
     "carte.crediti.3": "Plan du Sanctuaire : plan historique avec les phases de construction.",
     "carte.crediti.4": "Voix : de synthèse, provisoires (Piper), à remplacer par de vrais narrateurs.",
     "carte.crediti.5": "Carte : © OpenStreetMap contributors, avec Leaflet. Panoramas : Pannellum. Animations : GSAP.",
     "carte.accessibilita.0": "État : partiellement conforme. La page passe les contrôles automatiques WCAG 2.1 niveaux A et AA (axe) sur téléphone et ordinateur.",
     "carte.accessibilita.1": "Il y a du texte agrandissable, une version en lecture facile, une description orale de ce que l’on voit, des sous-titres et des transcriptions de tous les audios.",
     "carte.accessibilita.2": "À faire sur place : mesurer la marche d’entrée, la rampe, le parcours intérieur et la distance depuis le parking ; tester avec des personnes ayant un handicap visuel et moteur.",
     "carte.accessibilita.3": "Pour signaler un problème d’accessibilité, écris sur WhatsApp au 349 062 7997.",
     "carte.narratori": "Les voix actuelles sont des voix de synthèse. Pour de vrais narrateurs, il faut une autorisation d’utilisation de la voix et de l’image et la cession des droits sur les textes lus.",
     "prosegui.0.desc": "Les œuvres en marbre Perlato dans les rues du bourg, avec audioguides et 360.",
     "prosegui.1.desc": "Le village troglodyte de Scurati, musée vivant en été et crèche vivante à Noël.",
     "prosegui.2.desc": "Là où la légende fait débarquer le tableau : sur le fond marin, à 13 mètres, la statue Stella Maris (2012).",
     "chiedi.suggerite.0": "Qui a peint le tableau ?",
     "chiedi.suggerite.1": "Pourquoi le tableau allait-il à Erice ?",
     "chiedi.suggerite.2": "Quand a lieu le débarquement de la Madone ?",
     "chiedi.suggerite.3": "Où puis-je me garer ?",
     "chiedi.suggerite.4": "Y a-t-il une messe aujourd’hui ?",
     "chiedi.suggerite.5": "Qu’est-ce que la vara ?",
     "rete.mac-custonaci.nome": "MAC · Musée à ciel ouvert",
     "rete.cala-buguto.nome": "Cala Buguto et la baie de Cornino",
     "rete.segesta.nome": "Parc archéologique de Ségeste",
     "rete.grotta-mangiapane.nome": "Grotte Mangiapane",
     "prosegui.0.nome": "MAC — Musée à ciel ouvert de Custonaci",
     "prosegui.0.dist": "5 min à pied",
     "prosegui.1.nome": "Grotte Mangiapane",
     "prosegui.1.dist": "10 min en voiture",
     "prosegui.2.nome": "Baie de Cornino et Cala Buguto",
     "prosegui.2.dist": "10 min en voiture"
    }
   },
   "es": {
    "luogo": {
     "claim": "La casa de la Virgen llegada del mar",
     "descrizione_breve": "El santuario mariano en la colina de Custonaci, patrona del pueblo y del campo ericino, frente al golfo de Cofano.",
     "descrizione": "En la colina que mira al golfo de Cofano, el santuario custodia el cuadro de la Virgen de la Leche, llegado según la tradición por mar hacia 1400 y llevado durante tres siglos en peregrinación hasta Erice. Construido desde 1570, con el altar mayor de 1627 y la fachada gótica de finales del siglo XIX, es parroquia desde 1909 e Iglesia Madre desde 2000; Custonaci es «Civitas Mariae» desde 2009.",
     "orari_celebrazioni": "Lunes, miércoles y viernes 18:00 (verano 18:30) · sábado 18:30 (verano 19:00) · domingo 9:30 y 11:00 (verano 10:30)",
     "orari_visita": "Todos los días 9:00–12:00 y 16:00–20:30 · miércoles y viernes por la tarde hasta las 18:00 · domingo 9:00–13:00 y 16:00–18:00",
     "come_arrivare": "Piazza Santuario 1, en lo alto del pueblo. Desde Trapani (18 km): SP20 Trapani–Bonagia, luego SP18 Bonagia–Custonaci. Desde Palermo (90 km): A29 salida Castellammare del Golfo, SS187, luego SP16 «Asse dei Marmi». Autobús AST Trapani–Custonaci desde la cabecera junto a la estación de Trapani. Aparcamiento municipal de varias plantas cerca del santuario; autocares turísticos en via Dante Alighieri (500 m).",
     "lettura_facile": "Esto es una iglesia. Se llama Santuario de Custonaci. Dentro hay un cuadro antiguo de la Virgen con el Niño. La gente cuenta que el cuadro llegó en un barco, hace mucho tiempo, después de una tormenta. Durante muchos años el cuadro se llevaba a Erice, a pie, para pedir la lluvia. Hoy ya no se mueve. Cada año, a finales de agosto, hay una gran fiesta: por la noche, en la playa, se representa la llegada del barco.",
     "epoca_costruzione": "1570–1577, altar mayor 1627, fachada y escalinata 1870–1900",
     "festa_patronale": "último miércoles de agosto (cuatro días desde el domingo anterior)",
     "voce.saluto": "Estoy aquí desde hace cinco siglos, en la colina que mira al golfo. Dentro de mí hay un cuadro llegado del mar: entra, te cuento cómo.",
     "voce.nome": "El Santuario",
     "voce.ruolo": "la voz de la iglesia",
     "accessibilita.nota": "El censo de santuarios de 2023 indica que la iglesia y el salón son accesibles para personas con discapacidad, con aseos. El escalón de entrada, la rampa, la distancia desde el aparcamiento y el recorrido interior aún están por medir en el lugar."
    },
    "capitoli": {
     "perche": {
      "titolo": "Por qué está aquí",
      "sottotitolo": "Un barco, una tormenta, un cuadro",
      "breve": "Un barco francés en la tormenta frente a las Égadas, un voto, el desembarco en Cala Buguto: así llegó el cuadro hasta aquí arriba.",
      "voce_luogo": "Mira el mar, allá abajo: de allí llegué. Pregunta a quien me trajo hasta aquí arriba.",
      "trascrizione": "Un barco francés vuelve de Alejandría de Egipto hacia Marsella. Frente a las Égadas lo sorprende la tormenta. En la bodega hay un cuadro de la Virgen, y los marineros hacen un voto: si se salvan, lo donarán a la primera tierra que toquen. Tocan Cala Buguto, a los pies del monte Cofano. Quisieran dejar el cuadro allí, pero la gente del lugar, que teme a los sarracenos, lo sube a la capilla en la roca dedicada a la Concepción. Desde ese día ella se llama María de Custonaci.",
      "scoperta.tit": "El Pozo de la Virgen",
      "scoperta.txt": "El cuadro sube en un carro tirado por bueyes. A mitad de camino los bueyes se detienen, agotados por la sed, y de la tierra brota el agua: ese lugar todavía se llama Pozo de la Virgen. Ese mismo día, cuenta la tradición, un cojo que ayudaba a llevar el cuadro se curó, y un joven sordomudo de Salemi gritó de alegría y habló. Ese grito se repite todavía hoy, cada agosto, en la recreación del desembarco.",
      "scoperta.narr": "Detente un momento: el cuadro sube al carro. Toca el punto «?».",
      "quiz.d": "¿Dónde tocó tierra el barco, según la tradición?",
      "quiz.o": [
       "En Cala Buguto, a los pies del monte Cofano",
       "En el puerto de Trapani",
       "En Erice"
      ]
     },
     "chi": {
      "titolo": "Quién la construyó",
      "sottotitolo": "Cinco siglos de obras",
      "breve": "De la capilla en la roca a la iglesia de 1577, el altar de 1627, las esculturas de Calamela de 1756 y la fachada de finales del siglo XIX.",
      "voce_luogo": "No nací así: me alzaron, me ensancharon, me revistieron. Cada siglo me dejó una piedra.",
      "trascrizione": "Antes de la iglesia había una capilla excavada en la roca. En 1422 un legado ya menciona la Obra de María de Custonaci. En 1570 empieza la construcción; en 1577 se inaugura la iglesia, y una campana todavía lleva esa fecha. En 1627 nace el altar mayor; en 1756 Pietro Calamela esculpe la Abundancia y la Sabiduría que flanquean el cuadro. Después, entre 1870 y 1900, monseñor Giuseppe Rizzo rehace todo lo que veis al llegar: la escalinata en tenaza, la fachada gótica con el rosetón, el atrio de guijarros.",
      "scoperta.tit": "El rosetón",
      "scoperta.txt": "El gran rosetón sobre el portal es de toba con vidrios de colores, de la transformación de finales del siglo XIX. El portón de nogal que hay debajo es más antiguo, de 1842. A la izquierda, el campanario con cuatro campanas, la más grande pesa 1.250 kilos; a la derecha, la torrecilla del reloj de 1883.",
      "scoperta.narr": "Mira sobre el portal. Toca el punto «?».",
      "quiz.d": "¿Quién dio al santuario la fachada y la escalinata de hoy?",
      "quiz.o": [
       "Monseñor Giuseppe Rizzo, entre 1870 y 1900",
       "Pietro Calamela",
       "Domenico La Bruna"
      ]
     },
     "viaggio": {
      "titolo": "El cuadro que viajaba",
      "sottotitolo": "Sesenta veces a Erice",
      "breve": "De 1568 a 1858 el cuadro fue a Erice sesenta veces, por la lluvia, la peste y los terremotos. Después una caída hizo que ya no pudiera moverse.",
      "voce_luogo": "Sesenta veces la vi partir y volver. Ahora se queda conmigo.",
      "trascrizione": "Durante casi tres siglos este cuadro no estuvo quieto. De 1568 a 1858 fue a Erice sesenta veces: por la lluvia que no llegaba, por la peste, por los terremotos, por las langostas. Los ericinos lo querían, los de Custonaci no querían dejarlo marchar: una vez derribaron la puerta de la iglesia, otra vez llegó desde Palermo un batallón de caballería ligera. En 1831 le hicieron una vara con cinco ángeles, y dentro, durante el viaje, subían los niños enfermos. Después una caída lo dañó, y el cuadro fue declarado inamovible: desde entonces ya no sale. En procesión va una copia.",
      "scoperta.tit": "La vara y la Macchinetta",
      "scoperta.txt": "La vara, la caja con cinco ángeles ideada por el sacerdote Carlo Peraino y construida por el ebanista Giuseppe Loretta en 1831, está en el Museo Arte e Fede, en las dependencias del santuario, junto con los exvotos, una tabla de 1541 del taller de Crescenzio y la «Macchinetta», el marco de madera y vidrio regalado por los emigrantes en América para proteger el cuadro.",
      "scoperta.narr": "La vara con los cinco ángeles todavía existe. Toca el punto «?».",
      "quiz.d": "¿Por qué se llevaba el cuadro a Erice?",
      "quiz.o": [
       "Para pedir la lluvia o el fin de pestes y terremotos",
       "Para la fiesta de Erice",
       "Para restaurarlo"
      ]
     },
     "oggi": {
      "titolo": "Hoy",
      "sottotitolo": "El último miércoles de agosto",
      "breve": "Cuatro días de fiesta: las carretas, el desembarco recreado en Cala Buguto con la procesión de antorchas, las carrozas de los Personajes, la procesión de cinco horas.",
      "voce_luogo": "Una vez al año vuelvo al mar, en la procesión de antorchas. Ven tú también.",
      "trascrizione": "La fiesta nació en 1572, y durante casi dos siglos se celebró el 8 de diciembre. Desde 1752, con la coronación, pasó al verano: el último miércoles de agosto. Dura cuatro días. El domingo, las carretas sicilianos y los grupos folclóricos desde piazza Sperone; el lunes por la noche, en Cala Buguto, la recreación del desembarco: el velero, la copia del cuadro, los fuegos, la procesión de antorchas hasta el santuario con muchos fieles descalzos. El martes, las carrozas de los Personajes; el miércoles, la procesión por el pueblo, cinco horas, y los fuegos del regreso. Desde 2009 Custonaci es Civitas Mariae.",
      "scoperta.tit": "Stella Maris",
      "scoperta.txt": "En Cala Buguto, donde la leyenda hace desembarcar el cuadro, desde 2012 hay una estatua en el fondo del mar: la Stella Maris, de mármol perlato de Sicilia, de cinco metros de alto, once toneladas, a trece metros de profundidad. Una boya roja la señala.",
      "scoperta.narr": "Bajo ese mar hay una estatua. Toca el punto «?».",
      "quiz.d": "¿Cuándo se celebra la fiesta patronal?",
      "quiz.o": [
       "El último miércoles de agosto",
       "El 8 de diciembre",
       "El 15 de agosto"
      ]
     }
    },
    "scene": {
     "1": {
      "titolo": "Desde el cielo",
      "testo": "Desde aquí arriba se ve todo: la fachada con el rosetón, la escalinata en tenaza, el atrio de guijarros dibujado con rosetas; y detrás, el mar del que llegó el cuadro.",
      "verso": "Baja y entra por el portal.",
      "descrizione_scena": "Vista desde el dron: delante y abajo, la fachada clara del santuario con el rosetón, la escalinata y el atrio; alrededor, las casas de Custonaci; detrás, a la izquierda, el golfo de Cofano con la montaña y el mar.",
      "trascrizione": "Estás sobre Custonaci, con el dron. Delante, la fachada gótica de finales del siglo XIX, con el rosetón y el portón de nogal; debajo, la escalinata en tenaza y el atrio de guijarros dibujado con rosetas. A la izquierda, el campanario; a la derecha, la torrecilla del reloj. A tu espalda, el mar, el golfo de Cofano y la montaña: de allí llegó la historia que vas a escuchar."
     },
     "2": {
      "titolo": "La entrada",
      "verso": "Sigue por la nave; o sube al coro alto o entra en el Museo Arte e Fede.",
      "descrizione_scena": "Nada más cruzar el portón: la nave central se extiende ante ti hasta el altar, entre dos filas de columnas con arcos apuntados; a tu espalda, la puerta abierta y la luz del atrio; arriba, el coro alto.",
      "trascrizione": "Acabas de entrar. La nave central se extiende hasta el altar, entre dos filas de columnas con arcos apuntados. Sobre ti, el coro alto con el rosetón."
     },
     "3": {
      "titolo": "La nave",
      "testo": "Tres naves en cruz latina, las columnas con los arcos apuntados, la bóveda con frescos, el suelo de mármoles de colores de finales del siglo XIX. Al fondo, el altar con el cuadro.",
      "verso": "Continúa hacia el altar.",
      "descrizione_scena": "La nave central: filas de bancos de madera a los lados, columnas con arcos apuntados, la bóveda con frescos; al fondo, iluminada, la tribuna con el cuadro.",
      "trascrizione": "Tres naves en cruz latina: dos filas de columnas con arcos apuntados sostienen la bóveda con frescos, las ventanas ojivales tienen vidrios de colores, el suelo es de mármoles de colores de finales del siglo XIX. Las naves laterales son del siglo XX, con las decoraciones de Carlo Righetto. Al fondo, el altar con el cuadro."
     },
     "4": {
      "titolo": "Hacia el altar",
      "verso": "Unos pocos pasos más.",
      "descrizione_scena": "Mitad de la nave: el altar se acerca; a los lados se abren las naves laterales con los altares.",
      "trascrizione": "Aquí, entre los bancos, cada agosto se detiene la procesión de regreso. Cinco horas por las calles del pueblo, y el cuadro vuelve a casa."
     },
     "5": {
      "titolo": "El corazón de la iglesia",
      "verso": "Sube al presbiterio; o ve a la puerta lateral o al baptisterio.",
      "descrizione_scena": "El centro de la cruz: a derecha e izquierda, las naves laterales con los altares; delante, dos escalones más arriba, el presbiterio y la tribuna con el cuadro.",
      "trascrizione": "Estás en el centro de la cruz. A derecha e izquierda se abren las naves laterales con los altares; delante, dos escalones más arriba, el presbiterio y la tribuna con el cuadro."
     },
     "6": {
      "titolo": "El presbiterio",
      "verso": "Pasa detrás del altar, a la capilla mayor.",
      "descrizione_scena": "El presbiterio: delante, el altar nuevo de 2012 con el ambón; detrás, la tribuna barroca de mármoles de colores con la Inmaculada en lo alto y el cuadro en la hornacina; a los lados, las balaustradas.",
      "trascrizione": "El altar nuevo, con el ambón, es de 2012. Detrás, la tribuna barroca de 1627: en lo alto la Inmaculada de mármol, a los lados San Alberto y San Julián, patronos de Erice. En la hornacina, el cuadro.",
      "audiodescrizione_testo": "Estás delante del altar mayor, dos escalones más arriba que la nave. El altar ocupa toda la pared del fondo y es de mármoles de colores: rojos, blancos, negros. En el centro, a la altura de los ojos, está la hornacina con el cuadro: una tabla de un metro cuarenta de alto y ochenta de ancho, con un marco de plata que refleja la luz de una lámpara siempre encendida delante. En el cuadro, la Virgen, sentada, amamanta al Niño; dos ángeles sostienen una corona sobre su cabeza. A los lados del cuadro, dos figuras femeninas de mármol, la Abundancia y la Sabiduría. Más arriba, en el centro, la Inmaculada de mármol blanco, y a los lados dos santos de madera pintada. Detrás del altar, oculto, está el coro de madera oscura."
     },
     "7": {
      "titolo": "La tribuna y el cuadro",
      "testo": "Aquí está, en la tribuna de 1627, entre la Abundancia y la Sabiduría esculpidas por Pietro Calamela en 1756. Alrededor, el coro de nogal del siglo XVIII y los dos frescos de Domenico La Bruna.",
      "verso": "Desde aquí puedes volver hacia la salida.",
      "descrizione_scena": "La capilla mayor detrás del altar: delante, la tribuna con el cuadro en la hornacina y las dos esculturas a los lados; a derecha e izquierda, las sillas del coro de madera oscura; arriba, los dos grandes frescos y la bóveda pintada.",
      "trascrizione": "Estás detrás del altar, en la capilla mayor. A los lados, el coro de nogal tallado del siglo XVIII; arriba, los dos frescos de Domenico La Bruna: la Natividad de la Virgen y la Natividad con los pastores. En el centro, la tribuna con el cuadro, las esculturas de la Abundancia y de la Sabiduría de Pietro Calamela de 1756, el marco de plata y la Lámpara de la Paz, encendida desde 2011."
     },
     "8": {
      "titolo": "El coro alto",
      "verso": "Acércate al rosetón y luego sube al tejado.",
      "descrizione_scena": "El coro alto sobre la entrada: delante, desde arriba, toda la nave hasta el cuadro; las estatuas en las hornacinas; a tu espalda, el rosetón.",
      "trascrizione": "Estás en el coro alto, sobre la entrada. Desde aquí se ve toda la nave, hasta el cuadro; a tu espalda, el rosetón de toba y vidrios de colores."
     },
     "9": {
      "titolo": "El rosetón",
      "verso": "Sube al tejado, junto al campanario.",
      "descrizione_scena": "El rosetón de toba y vidrios de colores visto desde dentro, a pocos metros; debajo, la nave."
     },
     "10": {
      "titolo": "El tejado y el campanario",
      "verso": "Vuelve a la entrada.",
      "descrizione_scena": "El tejado del santuario: al lado, el campanario con las cuatro campanas; alrededor, los tejados del pueblo; a lo lejos, el monte Cofano.",
      "trascrizione": "Estás en el tejado, junto al campanario. Cuatro campanas: la más grande pesa mil doscientos cincuenta kilos. Una campana de 1577 fue refundida en 1794. Delante, el pueblo y el monte Cofano."
     },
     "11": {
      "titolo": "Museo Arte e Fede · sala 1",
      "verso": "Pasa a la sala siguiente.",
      "descrizione_scena": "La primera sala del museo: paredes blancas, pinturas, dos esculturas de madera de santos sobre pedestales, los cordones que delimitan el recorrido.",
      "trascrizione": "El Museo Arte e Fede nació en 2005 en las dependencias del santuario. Pinturas, esculturas, exvotos, objetos litúrgicos: todo lo que cinco siglos de devoción han dejado aquí."
     },
     "12": {
      "titolo": "Museo · sala 2",
      "verso": "Sigue adelante.",
      "descrizione_scena": "La segunda sala, con el techo de vigas: en el centro, una estructura de hierro con vidrios; objetos sagrados en las paredes."
     },
     "13": {
      "titolo": "Museo · las pinturas",
      "verso": "Sigue hacia el tesoro.",
      "descrizione_scena": "Una sala con pinturas y estandartes en las paredes, el suelo de barro cocido, la luz de las ventanas."
     },
     "14": {
      "titolo": "Museo · el tesoro y los exvotos",
      "testo": "Los exvotos: joyas, platería, cuadritos donados por una gracia recibida. Y una copia del cuadro, pintada sobre una vieja puerta.",
      "verso": "La última sala: la vara.",
      "descrizione_scena": "La sala del tesoro: vitrinas iluminadas con joyas y platería votiva; en el centro, en un marco dorado, una copia del cuadro de la Virgen.",
      "trascrizione": "Los exvotos: joyas, platería, cuadritos donados por una gracia recibida. Y una copia del cuadro, pintada sobre una vieja puerta."
     },
     "15": {
      "titolo": "Museo · la vara de 1831",
      "testo": "La vara de 1831, con los cinco ángeles: dentro subían los niños enfermos, en los viajes hacia Erice.",
      "verso": "Vuelve a la entrada de la iglesia.",
      "descrizione_scena": "La sala grande del museo: en el centro, sobre una base, la vara de madera con los ángeles; alrededor, paneles con fotografías y otros objetos.",
      "trascrizione": "La vara de 1831, con los cinco ángeles, ideada por el sacerdote Carlo Peraino y construida por el ebanista Giuseppe Loretta. Dentro subían los niños enfermos, durante los viajes hacia Erice. Y la Macchinetta, el marco de madera y vidrio regalado por los emigrantes en América."
     },
     "16": {
      "titolo": "La puerta lateral",
      "verso": "Vuelve al centro de la iglesia.",
      "descrizione_scena": "La puerta lateral de madera, cerrada; encima, en el luneto, el fresco del desembarco; al lado, una pintura, una estatua y el confesionario de madera.",
      "trascrizione": "Sobre la puerta lateral, en el luneto, el fresco del desembarco: la llegada de la imagen de María a Cala di Buguto."
     },
     "17": {
      "titolo": "El baptisterio",
      "verso": "Sigue hacia los altares laterales.",
      "descrizione_scena": "La nave lateral: el baptisterio con el baldaquino de madera y la verja de hierro; al lado, la otra puerta lateral con un fresco en el luneto; una lámpara de cristal.",
      "trascrizione": "El baptisterio: la parte de mármol es de Mario Bruno e hijos, de 1884; el baldaquino de madera es de Giacomo Miceli, de 1891."
     },
     "18": {
      "titolo": "Los altares laterales",
      "verso": "Al fondo, el altar del Crucifijo.",
      "descrizione_scena": "Dos altares laterales: uno con una estatua en una hornacina azul, el otro con un gran lienzo oscuro en marco dorado; el suelo ajedrezado.",
      "trascrizione": "Los altares laterales, con los lienzos de Giuseppe Felici y de Domenico La Bruna. Los autores de cada cuadro están en las fichas de las obras."
     },
     "19": {
      "titolo": "El altar del Crucifijo",
      "verso": "Vuelve al centro de la iglesia.",
      "descrizione_scena": "El altar del Crucifijo: el Cristo en la cruz de madera oscura, al lado la Virgen, candelabros y flores; arriba, la bóveda con frescos en azul.",
      "trascrizione": "El altar del Crucifijo: el Cristo en la cruz de madera del siglo XVIII y la Virgen de cartón piedra."
     }
    },
    "opere": {
     "1": {
      "titolo": "Tribuna del altar y cuadro de María Santísima de Custonaci",
      "tipo": "retablo",
      "autore": "Cuadro: anónimo, escuela de Antonello da Messina (peritaje de 2002) · Tribuna: 1627, mármoles completados en 1728 · Esculturas: Pietro Calamela, 1756",
      "datazione": "s. XV–XVI (cuadro) · 1627–1756 (tribuna)",
      "breve": "La Virgen de la Leche: la Virgen en el trono amamanta al Niño, dos angelitos le sostienen la corona, sobre el manto jarrones de dos asas con espigas de trigo. Óleo sobre tres tablas de madera, 140 × 80 cm, marco revestido de plata. En la tribuna barroca, entre la Abundancia y la Sabiduría de Pietro Calamela (1756); en lo alto la Inmaculada de mármol, a los lados San Alberto y San Julián, patronos de Erice. Delante arde siempre la Lámpara de la Paz (2011).",
      "curiosita": "El original ya no sale del santuario desde 1936: en procesión va una copia. En 1752 fue coronada; las coronas se colocan sobre la Virgen y el Niño durante la fiesta.",
      "trascrizione": "La Virgen de la Leche: la Virgen en el trono amamanta al Niño, dos angelitos le sostienen la corona, sobre el manto jarrones con espigas. Óleo sobre tres tablas de madera, un metro cuarenta por ochenta. Quién la pintó, nadie lo sabe con certeza: el peritaje de la restauración de 2002 la vincula a la escuela de Antonello da Messina. En 1752 fue coronada.",
      "trascrizione_voce2": "Nosotros la llamamos simplemente la Virgen. Llegó del mar, y durante tres siglos la llevamos a Erice a hombros. Hoy ya no se mueve: en procesión va una copia.",
      "dettagli": [
       {
        "tit": "La lactancia",
        "txt": "La Virgen amamanta al Niño: por eso la llaman Virgen de la Leche."
       },
       {
        "tit": "Los dos ángeles con la corona",
        "txt": "Dos angelitos sostienen la corona real sobre la cabeza de la Virgen. Las coronas verdaderas, de plata, son de 1752."
       },
       {
        "tit": "Los jarrones con las espigas",
        "txt": "Sobre el manto, jarrones de dos asas con espigas de trigo: el pan, la abundancia de los campos."
       },
       {
        "tit": "El marco de plata",
        "txt": "El marco de madera está revestido de láminas de plata labrada, regalo de los fieles."
       },
       {
        "tit": "La predela",
        "txt": "Abajo, san Joaquín y santa Ana, los padres de María."
       }
      ]
     },
     "2": {
      "titolo": "Cristo en la cruz de madera y Virgen de cartón piedra",
      "tipo": "crucifijo",
      "autore": "Anónimo",
      "datazione": "s. XVIII",
      "breve": "El Cristo en la cruz de madera del siglo XVIII con la Virgen de cartón piedra, en el altar al fondo de la nave. Otro crucifijo, de la primera mitad del siglo XVI, se conserva en la sacristía.",
      "trascrizione": "El Cristo en la cruz de madera es del siglo XVIII; al lado, la Virgen de cartón piedra. Otro crucifijo, de la primera mitad del siglo XVI, se conserva en la sacristía.",
      "trascrizione_voce2": "Ante este Cristo se detienen los marineros antes de salir al mar. Desde siempre."
     },
     "3": {
      "titolo": "Coro de madera",
      "tipo": "mobiliario",
      "autore": "Anónimo",
      "datazione": "s. XVIII",
      "breve": "El coro de nogal tallado del siglo XVIII, con elementos de gusto rococó, en la capilla mayor detrás del altar mayor. Sobre las sillas, los dos frescos de Domenico La Bruna.",
      "trascrizione": "El coro de nogal tallado es del siglo XVIII, con elementos de gusto rococó. Encima, los dos frescos de Domenico La Bruna."
     },
     "4": {
      "titolo": "El baptisterio",
      "tipo": "pila bautismal",
      "autore": "Mario Bruno e hijos (mármol) · Giacomo Miceli (madera)",
      "datazione": "1884 · 1891",
      "breve": "El baptisterio: la parte de mármol es de Mario Bruno e hijos (1884), el baldaquino de madera del escultor Giacomo Miceli (1891).",
      "trascrizione": "El baptisterio: parte de mármol de Mario Bruno e hijos, 1884; parte de madera del escultor Giacomo Miceli, 1891."
     },
     "5": {
      "titolo": "Mons. Giuseppe Rizzo",
      "tipo": "lápida",
      "datazione": "1870–1900",
      "breve": "El lugar de la memoria del monseñor que guió la transformación del santuario entre 1870 y 1900."
     },
     "6": {
      "titolo": "El Desembarco",
      "tipo": "fresco",
      "breve": "El luneto sobre la puerta lateral con la llegada de la imagen de María a Cala di Buguto.",
      "trascrizione": "El luneto con el desembarco: la llegada del cuadro a Cala di Buguto, pintado sobre la puerta lateral. El autor está por verificar."
     },
     "7": {
      "titolo": "Las dos Natividades de Domenico La Bruna",
      "tipo": "fresco",
      "autore": "Domenico La Bruna",
      "datazione": "primera mitad del s. XVIII",
      "breve": "Los dos grandes frescos a los lados del coro: la Natividad de la Virgen y la Natividad con los pastores, de la primera mitad del siglo XVIII.",
      "curiosita": "Al mismo pintor se atribuye también el lienzo de la Natividad con san Francisco y san Roque, en la nave lateral.",
      "trascrizione": "Las dos Natividades de Domenico La Bruna, primera mitad del siglo XVIII: la Natividad de la Virgen y la Natividad con los pastores, a los lados del coro."
     },
     "8": {
      "titolo": "La vara de 1831",
      "tipo": "mobiliario",
      "autore": "Carlo Peraino (idea) · Giuseppe Loretta (ebanista)",
      "datazione": "1831",
      "breve": "La caja de madera con cinco ángeles en la que se llevaba el cuadro a Erice. Durante los viajes hacían subir a los niños enfermos, con la esperanza de una gracia. Restaurada en 2007."
     },
     "9": {
      "titolo": "El traslado del cuadro a Erice",
      "tipo": "fresco",
      "breve": "El luneto sobre la otra puerta lateral con el traslado del cuadro a Erice: por fotografiar y verificar."
     }
    },
    "narratori": {
     "1": {
      "ruolo": "la guía · voz del arte",
      "bio": "Lee las piedras, las fechas y los estilos. (Voz sintética de prueba.)"
     },
     "2": {
      "ruolo": "el custodio · voz de la memoria",
      "bio": "Cuenta las personas, los viajes del cuadro, la fiesta. (Voz sintética de prueba.)"
     }
    },
    "campi": {
     "festa.nome": "Fiesta de María Santísima de Custonaci",
     "festa.edizione.tema": "Madre de Cristo",
     "festa.momenti.novena.titolo": "Empieza la novena",
     "festa.momenti.novena.luogo": "Santuario",
     "festa.momenti.novena.desc": "Cada tarde a las 18 el Rosario y a las 19 la misa, hasta el día de la fiesta.",
     "festa.momenti.chiavi.titolo": "Las llaves de la ciudad a la Virgen",
     "festa.momenti.chiavi.luogo": "Santuario",
     "festa.momenti.chiavi.desc": "Se enciende el cirio y el alcalde entrega a la Virgen las llaves de Custonaci.",
     "festa.momenti.carretti.titolo": "Carretas sicilianas y grupos folclóricos",
     "festa.momenti.carretti.luogo": "Desde piazza Europa (Sperone) hasta el casco antiguo",
     "festa.momenti.carretti.desc": "El desfile de las carretas y de los grupos folclóricos, con miliddi y vino para todos. Por la mañana, a las 6:30, la peregrinación a pie hacia el santuario.",
     "festa.momenti.sbarco.titolo": "El desembarco en Cala Buguto",
     "festa.momenti.sbarco.luogo": "Cala Buguto, bahía de Cornino",
     "festa.momenti.sbarco.desc": "Desde el mar llega el velero con la copia del cuadro, entre cantos, oraciones y fuegos; luego la procesión de antorchas acompaña a la Virgen hasta el santuario, muchos descalzos.",
     "festa.momenti.fontane.titolo": "Fuentes danzantes",
     "festa.momenti.fontane.luogo": "Piazza Santuario",
     "festa.momenti.fontane.desc": "Dos espectáculos de agua y luz delante del santuario, a las 21:30 y a medianoche.",
     "festa.momenti.messa.titolo": "La misa solemne",
     "festa.momenti.messa.luogo": "Santuario",
     "festa.momenti.messa.desc": "Por la mañana, repique de campanas y petardos desde las 7, luego la celebración solemne.",
     "festa.momenti.processione.titolo": "La procesión",
     "festa.momenti.processione.luogo": "Por las calles del pueblo",
     "festa.momenti.processione.desc": "Cinco horas por las calles de Custonaci; al regresar, la procesión se detiene entre los bancos de la nave.",
     "festa.momenti.fuochi.titolo": "Los fuegos del regreso",
     "festa.momenti.fuochi.luogo": "Contrada Tribli",
     "festa.momenti.fuochi.desc": "A medianoche los fuegos artificiales cierran la fiesta.",
     "festa.storia.0.testo": "Nace la fiesta. Durante casi dos siglos se celebra el 8 de diciembre.",
     "festa.storia.1.testo": "El cuadro va a Erice sesenta veces: por la lluvia, la peste, los terremotos, las langostas.",
     "festa.storia.2.testo": "El cuadro es coronado y la fiesta pasa al verano: el último miércoles de agosto.",
     "festa.storia.3.testo": "La vara con los cinco ángeles: durante los viajes subían en ella los niños enfermos.",
     "festa.storia.4.testo": "El cuadro ya no sale del santuario: en procesión va una copia.",
     "festa.storia.5.testo": "Custonaci se convierte en «Civitas Mariae», ciudad de María.",
     "festa.storia.6.testo": "275.ª edición, con el tema «Madre de Cristo».",
     "dove.punti.santuario.nome": "Santuario de María Santísima de Custonaci",
     "dove.punti.santuario.nota": "En lo alto del pueblo, en la escalinata.",
     "dove.punti.parcheggio.nome": "Aparcamiento municipal de varias plantas",
     "dove.punti.parcheggio.nota": "El más cercano al santuario. La planta superior es gratuita; en los días de fiesta hay pocas plazas.",
     "dove.punti.bus.nome": "Parada de autobús AST",
     "dove.punti.bus.nota": "Línea Trapani–Custonaci, desde la cabecera junto a la estación de Trapani.",
     "dove.punti.pullman.nome": "Parada de autocares turísticos",
     "dove.punti.pullman.nota": "Los autocares turísticos paran aquí; luego, a pie hasta el santuario.",
     "dove.punti.pozzo.nome": "Pozo de la Virgen",
     "dove.punti.pozzo.nota": "Donde, cuenta la tradición, los bueyes sedientos se detuvieron y brotó el agua.",
     "dove.punti.cala-buguto.nome": "Cala Buguto · bahía de Cornino",
     "dove.punti.cala-buguto.nota": "Donde llegó el barco con el cuadro; cada agosto, la recreación del desembarco.",
     "dove.arrivare.0.come": "En coche desde Trapani",
     "dove.arrivare.0.testo": "SP20 Trapani–Bonagia, luego SP18 Bonagia–Custonaci.",
     "dove.arrivare.1.come": "En coche desde Palermo",
     "dove.arrivare.1.testo": "A29 salida Castellammare del Golfo, SS187, luego SP16 «Asse dei Marmi».",
     "dove.arrivare.2.come": "En autobús",
     "dove.arrivare.2.testo": "Autobús AST Trapani–Custonaci desde la cabecera junto a la estación de Trapani; se baja en via Roma, a dos pasos del santuario.",
     "dove.arrivare.3.come": "En autocar",
     "dove.arrivare.3.testo": "Parada de los autocares turísticos en via Dante Alighieri, luego a pie.",
     "sostieni.obiettivo": "El Museo Arte e Fede",
     "sostieni.descrizione": "Los donativos ayudan a custodiar las vestiduras, los exvotos y la vara de 1831, y a mantener abierto el museo para quien viene de lejos.",
     "carte.privacy.0": "Para usar la visita no hace falta registrarse y no pedimos nombre, email ni teléfono.",
     "carte.privacy.1": "La página no usa cookies ni sistemas publicitarios. Lo que guarda para la visita sin conexión (panoramas, voces, tus sellos) se queda en tu teléfono y puedes borrarlo desde los ajustes del navegador.",
     "carte.privacy.2": "Estadísticas anónimas: para entender cómo se usa la visita, la página cuenta aperturas, puntos vistos, obras abiertas, idioma y duración. A cada visita le corresponde un número aleatorio que no te identifica y no se guarda en el teléfono; tu dirección de red no se guarda. Si el navegador pide no ser rastreado («Do Not Track»), las estadísticas no se activan.",
     "carte.privacy.3": "Pregunta a la iglesia: la pregunta se envía al servicio de Esplora Trapani y a un modelo de inteligencia artificial (Claude, de Anthropic) para redactar la respuesta, usando solo los textos del Santuario. Conservamos el inicio de la pregunta, sin saber quién la hizo, para mejorar los textos. No escribas datos personales en el chat.",
     "carte.privacy.4": "El mapa y los vídeos proceden de servicios externos (OpenStreetMap, YouTube en modo sin cookies) y solo se abren cuando llegas a ellos o los tocas.",
     "carte.crediti.0": "Fotos y vídeos 360°, tomas con dron, montaje de los reels: Esplora Trapani · Alessandro Milia, piloto habilitado ENAC.",
     "carte.crediti.1": "Reel de la fiesta: Esplora Trapani (YouTube).",
     "carte.crediti.2": "Textos: de fuentes públicas (parroquia cittadicustonaci.it, censo de santuarios 2023, Catálogo general de bienes culturales, custonaciweb.it), pendientes de revisión por parte del Santuario.",
     "carte.crediti.3": "Planta del Santuario: planimetría histórica con las fases constructivas.",
     "carte.crediti.4": "Voces: sintéticas de prueba (Piper), que se sustituirán por narradores reales.",
     "carte.crediti.5": "Mapa: © OpenStreetMap contributors, con Leaflet. Panoramas: Pannellum. Animaciones: GSAP.",
     "carte.accessibilita.0": "Estado: parcialmente conforme. La página supera los controles automáticos WCAG 2.1 nivel A y AA (axe) en teléfono y ordenador.",
     "carte.accessibilita.1": "Hay texto ampliable, lectura fácil, descripción por voz de lo que se ve, subtítulos y transcripciones de todos los audios.",
     "carte.accessibilita.2": "Pendiente en el lugar: medir el escalón de entrada, la rampa, el recorrido interior y la distancia desde el aparcamiento; prueba con personas con discapacidad visual y motora.",
     "carte.accessibilita.3": "Para señalar un problema de accesibilidad, escribe por WhatsApp al 349 062 7997.",
     "carte.narratori": "Las voces actuales son sintéticas. Para los narradores reales hacen falta la autorización para el uso de la voz y de la imagen y la cesión de los derechos sobre los textos leídos.",
     "prosegui.0.desc": "Las obras en mármol Perlato por las calles del pueblo, con audioguías y 360.",
     "prosegui.1.desc": "El pueblo rupestre de Scurati, museo viviente en verano y belén viviente en Navidad.",
     "prosegui.2.desc": "Donde la leyenda hace desembarcar el cuadro: en el fondo del mar, a 13 metros, la estatua Stella Maris (2012).",
     "chiedi.suggerite.0": "¿Quién pintó el cuadro?",
     "chiedi.suggerite.1": "¿Por qué el cuadro iba a Erice?",
     "chiedi.suggerite.2": "¿Cuándo es el desembarco de la Virgen?",
     "chiedi.suggerite.3": "¿Dónde puedo aparcar?",
     "chiedi.suggerite.4": "¿Hay misa hoy?",
     "chiedi.suggerite.5": "¿Qué es la vara?",
     "rete.mac-custonaci.nome": "MAC · Museo al Aire Libre",
     "rete.cala-buguto.nome": "Cala Buguto y la bahía de Cornino",
     "rete.segesta.nome": "Parque arqueológico de Segesta",
     "rete.grotta-mangiapane.nome": "Cueva Mangiapane",
     "prosegui.0.nome": "MAC — Museo al Aire Libre de Custonaci",
     "prosegui.0.dist": "5 min a pie",
     "prosegui.1.nome": "Cueva Mangiapane",
     "prosegui.1.dist": "10 min en coche",
     "prosegui.2.nome": "Bahía de Cornino y Cala Buguto",
     "prosegui.2.dist": "10 min en coche"
    }
   }
  },
  /*TR-FINE*/

  /* pesi stimati per «Scarica la visita» (MB) */
  peso: { panorama_mb: 1.3 }
};
