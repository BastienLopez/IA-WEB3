import requests

def scrape_binance():
    url = "https://api.binance.com/api/v3/ticker/price"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"Erreur API Binance: {response.status_code}")