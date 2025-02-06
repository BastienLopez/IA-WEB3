import requests

def scrape_coinbase():
    url = "https://api.coinbase.com/v2/prices/BTC-USD/spot"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"Erreur API Coinbase: {response.status_code}")