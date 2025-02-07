import logging
import uvicorn
from app.services.scraper.coingecko import get_coingecko_data, get_fear_greed_index, get_btc_dominance
from app.services.scraper.kraken import scrape_kraken
from app.services.scraper.twitter import get_tweets
from app.services.database import analyze_without_storage
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

logging.basicConfig(level=logging.INFO)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Remplacer par ["http://localhost:3000"] pour restreindre
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Hello, Web3 AI Backend is running!"}

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.get("/scrape")
def scrape_data():
    """
    Scrape les données de CoinGecko, Kraken et Twitter.
    """
    try:
        logging.info("🔍 Début du scraping...")

        # Scraping des plateformes
        coingecko = kraken = None

        try:
            coingecko = get_coingecko_data()
            logging.info("✅ Scraping CoinGecko OK")
        except Exception as e:
            logging.error("❌ Erreur CoinGecko: %s", str(e))

        try:
            kraken = scrape_kraken()
            logging.info("✅ Scraping Kraken OK")
        except Exception as e:
            logging.error("❌ Erreur Kraken: %s", str(e))

        # Scraping Twitter (Analyse du sentiment de marché)
        twitter_data = None
        try:
            twitter_data = get_tweets("elonmusk")  # Exemple avec Elon Musk
            logging.info("✅ Scraping Twitter OK")
        except Exception as e:
            logging.error("❌ Erreur Twitter: %s", str(e))

        # Création de l'objet final
        data = {
            "coingecko": coingecko,
            "kraken": kraken,
            "twitter": twitter_data,
        }

        # Analyse des tendances
        trends = analyze_without_storage(data)
        logging.info("✅ Analyse OK")

        return {
            "message": "Scraping terminé avec succès",
            "data": trends
        }

    except Exception as e:
        logging.error("❌ Erreur globale lors du scraping : %s", str(e))
        raise HTTPException(status_code=500, detail=f"Erreur lors du scraping: {str(e)}")

@app.get("/scrape/coingecko")
def scrape_coingecko_data():
    """
    Scrape les données de CoinGecko et retourne les indicateurs fondamentaux et sociaux.
    """
    try:
        data = get_coingecko_data()
        fear_greed_index = get_fear_greed_index()
        btc_dominance = get_btc_dominance()
        return {"message": "Scraping CoinGecko réussi", "data": data, "fear_greed_index": fear_greed_index, "btc_dominance": btc_dominance}
    except Exception as e:
        logging.error(f"❌ Erreur scraping CoinGecko: {str(e)}")
        raise HTTPException(status_code=500, detail="Erreur lors du scraping CoinGecko")
    
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
