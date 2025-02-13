from pymongo import MongoClient

def test_mongo_connection():
    try:
        client = MongoClient("mongodb://localhost:27017/")
        client.server_info()  # Vérifie la connexion
        print("✅ MongoDB fonctionne correctement.")
    except Exception as e:
        assert False, f"MongoDB non disponible : {str(e)}"
