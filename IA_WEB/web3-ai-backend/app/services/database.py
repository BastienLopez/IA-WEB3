from pymongo import MongoClient
import os
from app.services.scraper.coingecko import get_coingecko_data
from app.services.scraper.kraken import scrape_kraken

def analyze_without_storage(data):
    """Analyse les tendances sans stocker en base."""
    trends = {}

    # CoinGecko
    if isinstance(data.get("coingecko"), dict):
        for coin, details in data["coingecko"].items():
            trends[coin] = details.get("usd", 0)  # Utiliser 0 si USD n'existe pas

    # Kraken
    if isinstance(data.get("kraken"), dict) and "result" in data["kraken"]:
        for pair, details in data["kraken"]["result"].items():
            trends[pair] = float(details["a"][0])  # Prix d'achat

    return trends


MONGO_URI = os.getenv("MONGO_URI", "mongodb://mongo:27017/")
DB_NAME = "crypto_data"

def get_db():
    client = MongoClient(MONGO_URI)
    return client[DB_NAME]

def save_to_mongodb(data):
    """Stocke uniquement les données essentielles dans la BDD."""
    db = get_db()
    collection = db["prices"]
    collection.insert_many(data)

def analyze_without_storage(data):
    """Analyse les tendances sans stocker en base."""
    trends = {}

    # CoinGecko
    if isinstance(data.get("coingecko"), dict):
        for coin, details in data["coingecko"].items():
            trends[coin] = details.get("usd", 0)  # Utiliser 0 si USD n'existe pas

    # Kraken
    if isinstance(data.get("kraken"), dict) and "result" in data["kraken"]:
        for pair, details in data["kraken"]["result"].items():
            trends[pair] = float(details["a"][0])  # Prix d'achat

    return trends
