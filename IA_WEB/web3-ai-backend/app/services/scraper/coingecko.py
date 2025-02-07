import requests
import logging

COINGECKO_API_URL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"

def get_coingecko_data():
    """
    Récupère les prix des cryptos depuis l'API publique de CoinGecko.
    """
    try:
        response = requests.get(COINGECKO_API_URL)
        response.raise_for_status()  # Génère une erreur si le statut HTTP n'est pas 200
        return response.json()
    except requests.exceptions.RequestException as e:
        logging.error(f"❌ Erreur API CoinGecko : {e}")
        return {"error": "Erreur lors du scraping CoinGecko"}
