import requests

def scrape_kraken():
    url = "https://api.kraken.com/0/public/Ticker?pair=XXBTZUSD"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"Erreur API Kraken: {response.status_code}")