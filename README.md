# Casa Hub — Panorama Indexer (backend)

Piccolo backend FastAPI che elenca i panorami 360° di un bucket Backblaze B2,
così l'editor planimetrie mostra una libreria con anteprime invece di farti
copiare gli URL a mano.

## Endpoint

- `GET /` — info servizio
- `GET /salute` — health check (contatta il bucket)
- `GET /panorami?prefix=&solo_immagini=true` — lista panorami:
  ```json
  { "ok": true, "totale": 12, "panorami": [
      {"nome":"sala.jpg","key":"villa/sala.jpg","url":"https://f003...","tipo":"immagine","dimensione":2400000}
  ]}
  ```

## Variabili d'ambiente (Railway → Variables)

| Variabile | Esempio | Dove si trova |
|---|---|---|
| `B2_KEY_ID` | `003abc...` | Backblaze → App Keys → applicationKeyId |
| `B2_APP_KEY` | `K003xyz...` | Backblaze → App Keys → applicationKey (mostrata 1 sola volta) |
| `B2_ENDPOINT` | `https://s3.eu-central-003.backblazeb2.com` | Backblaze → Bucket → Endpoint (anteponi https://s3.) |
| `B2_BUCKET` | `demoimmobiliare` | nome del bucket |
| `B2_PUBLIC_BASE` | `https://f003.backblazeb2.com/file/demoimmobiliare` | URL pubblico base dei file |
| `ALLOWED_ORIGINS` | `https://alessandromilia.it` | (opz.) domini del frontend, default `*` |

### Come creare la chiave S3 su Backblaze
1. Backblaze → **App Keys** → **Add a New Application Key**
2. Limitala al bucket `demoimmobiliare`, permessi **Read** (basta la lettura)
3. Copia `keyID` e `applicationKey` → mettili in `B2_KEY_ID` e `B2_APP_KEY`
4. L'endpoint S3 lo trovi nei dettagli del bucket (campo "Endpoint"): anteponi `https://s3.`

## Deploy su Railway
1. Nuovo progetto → deploy da questi file (o repo GitHub)
2. Imposta le Variables sopra
3. Railway espone l'URL pubblico (es. `casahub-panorama-production.up.railway.app`)
4. Verifica: apri `<url>/salute` → deve rispondere `{"ok":true,...}`

## Sicurezza
Le chiavi S3 stanno SOLO lato server (variabili Railway), mai nel frontend.
La chiave è in sola lettura e limitata al bucket dei panorami demo.
