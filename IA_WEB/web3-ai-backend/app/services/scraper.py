import json
from playwright.sync_api import sync_playwright

def scrape_coingecko():
    """Scrape cryptocurrency data from CoinGecko."""
    url = "https://www.coingecko.com/en"
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto(url)
        coins = page.locator(".coin-list tr")
        data = []
        for coin in coins.all():
            name = coin.locator(".coin-name").inner_text()
            price = coin.locator(".price").inner_text()
            data.append({"name": name, "price": price})
        browser.close()
    return data