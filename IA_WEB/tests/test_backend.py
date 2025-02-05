import requests
import requests

def test_backend():
    # Remplace 'backend' par 'localhost' pour des tests locaux
    response = requests.get("http://localhost:8000/scrape")
    assert response.status_code == 200, "Le backend n'a pas renvoyé un statut 200."
    assert "data" in response.json(), "Le backend n'a pas renvoyé de données attendues."
    print("✅ Backend fonctionne correctement.")

def test_backend_health():
    try:
        response = requests.get("http://localhost:8000/health")
        assert response.status_code == 200
        assert response.json().get("status") == "ok"
        print("✅ Backend fonctionne correctement.")
    except Exception as e:
        assert False, f"Erreur de santé du backend : {str(e)}"