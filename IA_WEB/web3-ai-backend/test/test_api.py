from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_fetch_prices():
    response = client.get("/scrape")
    assert response.status_code == 200

    json_data = response.json()

    # ✅ Vérifie que le message est bien présent
    assert "message" in json_data
    assert json_data["message"] == "Scraping terminé avec succès"

    # ✅ Vérifie que les données sont bien retournées
    assert "data" in json_data
    assert isinstance(json_data["data"], dict)
