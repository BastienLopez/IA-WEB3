from pymongo import MongoClient
import os

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

    # Binance
    if isinstance(data.get("binance"), list):
        for coin in data["binance"]:
            symbol = coin.get("symbol", "")
            price = coin.get("price", "0")
            trends[symbol] = float(price)

    # Kraken
    if isinstance(data.get("kraken"), dict) and "result" in data["kraken"]:
        for pair, details in data["kraken"]["result"].items():
            trends[pair] = float(details["a"][0])  # Prix d'achat

    # Coinbase
    if isinstance(data.get("coinbase"), dict) and "data" in data["coinbase"]:
        base = data["coinbase"]["data"].get("base", "Unknown")
        amount = data["coinbase"]["data"].get("amount", "0")
        trends[base] = float(amount)

    return trends
