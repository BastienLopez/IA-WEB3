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
    """Permet d’analyser les données sans stockage en base."""
    trends = {coin["name"]: float(coin["price"].replace("$", "").replace(",", "")) for coin in data}
    return trends