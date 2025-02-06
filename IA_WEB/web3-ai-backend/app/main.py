from fastapi import FastAPI, HTTPException
from app.services.scraper.coingecko import get_coingecko_data
from app.services.scraper.binance import scrape_binance
from app.services.scraper.kraken import scrape_kraken
from app.services.scraper.coinbase import scrape_coinbase
from app.services.scraper.twitter import get_tweets
from app.services.database import analyze_without_storage
import uvicorn

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello, Web3 AI Backend is running!"}

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.get("/scrape")
def scrape_data():
    """
    Scrape les données de plusieurs sources et retourne un résultat combiné sans stockage.
    """
    try:
        coingecko = get_coingecko_data()
        binance = scrape_binance()
        kraken = scrape_kraken()
        coinbase = scrape_coinbase()
        twitter = get_tweets("elonmusk")  # Exemple avec Elon Musk

        data = {
            "coingecko": coingecko,
            "binance": binance,
            "kraken": kraken,
            "coinbase": coinbase,
            "twitter": twitter,
        }
        
        return analyze_without_storage(data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur lors du scraping: {str(e)}")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
