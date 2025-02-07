from fastapi import FastAPI, HTTPException
import logging
from app.services.scraper.coingecko import get_coingecko_data
from app.services.scraper.kraken import scrape_kraken
from app.services.scraper.twitter import get_tweets
from app.services.database import analyze_without_storage
import uvicorn

app = FastAPI()

logging.basicConfig(level=logging.INFO) 

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

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
