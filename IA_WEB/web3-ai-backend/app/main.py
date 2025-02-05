from fastapi import FastAPI, HTTPException
import requests
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
    Simule un scraping de données et retourne un exemple de résultat.
    Dans la vraie implémentation, Playwright ou BeautifulSoup serait utilisé.
    """
    try:
        # Simuler une donnée scrapée
        data = {
            "crypto": "Bitcoin",
            "price": "42000 USD",
            "trend": "Bullish"
        }
        return {"data": data}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur lors du scraping: {str(e)}")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)