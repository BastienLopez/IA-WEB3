from app.services.scraper.coingecko import get_coingecko_data

def test_scrape_coingecko():
    data = get_coingecko_data()
    assert isinstance(data, dict)
    assert "bitcoin" in data
    assert "usd" in data["bitcoin"]
