from app.services.scraper.coingecko import get_coingecko_data
from app.services.scraper.kraken import scrape_kraken

def test_scrape_coingecko():
    data = get_coingecko_data()
    assert isinstance(data, list)  # On attend une liste d'objets cryptos
    assert len(data) > 0  # Vérifie qu'il y a bien des cryptos retournées
    assert isinstance(data[0], dict)  # Chaque élément doit être un dictionnaire
    assert "name" in data[0]  # Vérifie qu'il y a bien un nom
    assert "price" in data[0]  # Vérifie que le prix est présent
    assert "market_cap" in data[0]  # Vérifie que la capitalisation est présente
    assert "volume_24h" in data[0]  # Vérifie que le volume des échanges est présent
    assert "trend" in data[0]  # Vérifie que la tendance est bien calculée
def test_scrape_kraken():
    data = scrape_kraken()
    assert isinstance(data, dict)
    assert "result" in data
    assert "XXBTZUSD" in data["result"]
