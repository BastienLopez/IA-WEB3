import requests

def test_backend():
    # Remplace 'backend' par 'localhost' pour des tests locaux
    response = requests.get("http://localhost:8000/scrape")
    assert response.status_code == 200, "Le backend n'a pas renvoyé un statut 200."
    assert "data" in response.json(), "Le backend n'a pas renvoyé de données attendues."
    print("✅ Backend fonctionne correctement.")
