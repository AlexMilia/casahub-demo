"""
Casa Hub — Panorama Indexer
Backend FastAPI che elenca i panorami 360° di un bucket Backblaze B2 (S3-compatibile),
così l'editor planimetrie può mostrarli in una libreria con anteprima, senza copia-incolla di URL.

Deploy: Railway (org sincere-curiosity). Variabili d'ambiente richieste:
  B2_KEY_ID        -> applicationKeyId  (chiave S3 di Backblaze)
  B2_APP_KEY       -> applicationKey
  B2_ENDPOINT      -> es. https://s3.eu-central-003.backblazeb2.com
  B2_BUCKET        -> es. demoimmobiliare
  B2_PUBLIC_BASE   -> es. https://f003.backblazeb2.com/file/demoimmobiliare  (per costruire gli URL pubblici)
  ALLOWED_ORIGINS  -> opzionale, lista separata da virgola dei domini frontend (default *)
"""
import os
import boto3
from botocore.config import Config
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Casa Hub Panorama Indexer", version="1.0")

origins = os.getenv("ALLOWED_ORIGINS", "*")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[o.strip() for o in origins.split(",")] if origins != "*" else ["*"],
    allow_credentials=False,
    allow_methods=["GET"],
    allow_headers=["*"],
)

# estensioni considerate "immagini panorama"
IMG_EXT = (".jpg", ".jpeg", ".png", ".webp")
# estensioni video (360 video) — le segnaliamo a parte
VID_EXT = (".mp4", ".webm", ".mov")


def _client():
    key_id = os.getenv("B2_KEY_ID")
    app_key = os.getenv("B2_APP_KEY")
    endpoint = os.getenv("B2_ENDPOINT")
    if not (key_id and app_key and endpoint):
        raise HTTPException(500, "Backend non configurato: mancano B2_KEY_ID / B2_APP_KEY / B2_ENDPOINT")
    return boto3.client(
        "s3",
        endpoint_url=endpoint,
        aws_access_key_id=key_id,
        aws_secret_access_key=app_key,
        config=Config(signature_version="s3v4"),
    )


def _public_url(key: str) -> str:
    base = os.getenv("B2_PUBLIC_BASE", "").rstrip("/")
    return f"{base}/{key}" if base else key


@app.get("/")
def root():
    return {"ok": True, "service": "casahub-panorama-indexer"}


@app.get("/salute")
def salute():
    """Health check: prova a contattare il bucket e conta gli oggetti."""
    try:
        c = _client()
        bucket = os.getenv("B2_BUCKET")
        resp = c.list_objects_v2(Bucket=bucket, MaxKeys=1)
        return {"ok": True, "bucket": bucket, "raggiungibile": True, "ha_oggetti": resp.get("KeyCount", 0) > 0}
    except HTTPException:
        raise
    except Exception as e:
        return {"ok": False, "errore": str(e)}


@app.get("/panorami")
def panorami(
    prefix: str = Query("", description="Filtra per cartella/prefisso, es. 'villa-pegno/'"),
    solo_immagini: bool = Query(True, description="Se true esclude i video"),
):
    """
    Restituisce la lista dei panorami nel bucket.
    Ogni voce: { nome, key, url, tipo, dimensione }
    """
    try:
        c = _client()
        bucket = os.getenv("B2_BUCKET")
        items = []
        token = None
        while True:
            kwargs = {"Bucket": bucket, "Prefix": prefix, "MaxKeys": 1000}
            if token:
                kwargs["ContinuationToken"] = token
            resp = c.list_objects_v2(**kwargs)
            for obj in resp.get("Contents", []):
                key = obj["Key"]
                low = key.lower()
                if low.endswith("/"):
                    continue
                is_img = low.endswith(IMG_EXT)
                is_vid = low.endswith(VID_EXT)
                if not is_img and not is_vid:
                    continue
                if solo_immagini and not is_img:
                    continue
                # nome leggibile: ultimo segmento senza estensione
                nome = key.split("/")[-1]
                items.append({
                    "nome": nome,
                    "key": key,
                    "url": _public_url(key),
                    "tipo": "video" if is_vid else "immagine",
                    "dimensione": obj.get("Size", 0),
                })
            if resp.get("IsTruncated"):
                token = resp.get("NextContinuationToken")
            else:
                break
        # ordina per nome
        items.sort(key=lambda x: x["nome"].lower())
        return {"ok": True, "bucket": bucket, "totale": len(items), "panorami": items}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(500, f"Errore lettura bucket: {e}")
