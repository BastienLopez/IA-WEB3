from pymongo import MongoClient

def get_db():
    client = MongoClient("mongodb://mongo:27017/")
    return client["crypto_data"]

def save_to_mongodb(data):
    db = get_db()
    collection = db["prices"]
    collection.insert_many(data)

# main.py
from fastapi import FastAPI
from app.services.scraper import scrape_coingecko
from app.services.database import save_to_mongodb

app = FastAPI()

@app.get("/scrape")
def fetch_prices():
    data = scrape_coingecko()
    save_to_mongodb(data)
    return {"message": "Scraping terminé", "data": data}