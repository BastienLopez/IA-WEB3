from app.services.scraper.coingecko import get_coingecko_data
from app.services.scraper.kraken import scrape_kraken

def test_scrape_coingecko():
    data = get_coingecko_data()
    assert isinstance(data, dict)
    assert "bitcoin" in data
    assert "usd" in data["bitcoin"]

def test_scrape_kraken():
    data = scrape_kraken()
    assert isinstance(data, dict)
    assert "result" in data
    assert "XXBTZUSD" in data["result"]
