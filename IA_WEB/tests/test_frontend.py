import requests
import time

FRONTEND_URL = "http://frontend:3000"

def wait_for_frontend():
    """Attend que le frontend soit prêt."""
    for _ in range(10):  # Essaye pendant 10 * 3 secondes (30 sec max)
        try:
            response = requests.get(FRONTEND_URL)
            if response.status_code == 200:
                return True
        except requests.exceptions.ConnectionError:
            time.sleep(3)
    return False

def test_frontend_status():
    """Teste si le frontend répond avec un statut 200."""
    assert wait_for_frontend(), "Le frontend n'est pas disponible."
    response = requests.get(FRONTEND_URL)
    assert response.status_code == 200, "Le frontend ne répond pas avec un statut 200."
    print("✅ Le frontend est accessible avec un statut 200.")

def test_frontend_content():
    """Teste si le texte attendu est dans le frontend."""
    response = requests.get(FRONTEND_URL)
    assert "Web3 AI Crypto Dashboard" in response.text, "Le texte attendu n'est pas affiché."
    print("✅ Le frontend affiche le texte attendu.")
