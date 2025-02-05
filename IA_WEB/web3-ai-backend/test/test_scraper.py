from app.services.scraper import scrape_coingecko

def test_scrape_coingecko():
    data = scrape_coingecko()
    assert isinstance(data, list)
    assert len(data) > 0
    assert "name" in data[0] and "price" in data[0]