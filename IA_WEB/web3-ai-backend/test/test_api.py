from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_fetch_prices():
    response = client.get("/scrape")
    assert response.status_code == 200
    assert "message" in response.json()
    assert "data" in response.json()