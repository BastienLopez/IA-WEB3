import requests
import time
from selenium import webdriver
from selenium.webdriver.common.by import By

FRONTEND_URL = "http://localhost:3000"  # Correction pour test local

def wait_for_frontend():
    """Attend que le frontend soit prêt."""
    for _ in range(10):  # 10 * 5 secondes (50 sec max)
        try:
            response = requests.get(FRONTEND_URL)
            if response.status_code == 200:
                return True
        except requests.exceptions.ConnectionError:
            time.sleep(5)
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
    assert "Web3 AI Frontend" in response.text, "Le texte attendu n'est pas affiché."
    print("✅ Le frontend affiche le texte attendu.")

def test_frontend():
    try:
        time.sleep(10)  # Attendre le démarrage complet du frontend
        driver = webdriver.Chrome()
        driver.get(FRONTEND_URL)
        time.sleep(3)
        assert "Web3 AI Frontend" in driver.title, f"Titre inattendu : {driver.title}"
        print("✅ Frontend fonctionne correctement.")
        driver.quit()
    except Exception as e:
        assert False, f"Erreur sur le frontend : {str(e)}"
