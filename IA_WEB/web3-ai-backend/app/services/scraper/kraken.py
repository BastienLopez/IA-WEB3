import requests
import logging

KRAKEN_API_URL = "https://api.kraken.com/0/public/Ticker?pair=XXBTZUSD"

def scrape_kraken():
    """
    Récupère le prix du BTC/USD depuis l'API publique de Kraken.
    """
    try:
        response = requests.get(KRAKEN_API_URL)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        logging.error(f"❌ Erreur API Kraken : {e}")
        return {"error": "Erreur lors du scraping Kraken"}
