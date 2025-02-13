### coingecko.py
import requests
import numpy as np

COINGECKO_API_URL = "https://api.coingecko.com/api/v3/coins/markets"
FEAR_GREED_INDEX_API = "https://api.alternative.me/fng/"
BTC_DOMINANCE_API = "https://api.coingecko.com/api/v3/global"

def calculate_rsi(prices, period=14):
    """Calcule le RSI (Relative Strength Index)"""
    deltas = np.diff(prices)
    seed = deltas[:period]
    gain = np.where(seed > 0, seed, 0).sum() / period
    loss = -np.where(seed < 0, seed, 0).sum() / period
    
    rs = gain / loss if loss != 0 else 0
    rsi = 100 - (100 / (1 + rs))
    return round(rsi, 2)

def get_coingecko_data():
    params = {
        "vs_currency": "usd",
        "ids": "bitcoin,ethereum",
        "order": "market_cap_desc",
        "per_page": 2,
        "page": 1,
        "sparkline": True,
        "price_change_percentage": "1h,24h,7d,30d,1y"
    }
    try:
        response = requests.get(COINGECKO_API_URL, params=params)
        response.raise_for_status()
        data = response.json()

        result = []
        for coin in data:
            price_changes = {
                "1h": coin.get("price_change_percentage_1h_in_currency", 0),
                "24h": coin.get("price_change_percentage_24h_in_currency", 0),
                "7d": coin.get("price_change_percentage_7d_in_currency", 0),
                "30d": coin.get("price_change_percentage_30d_in_currency", 0),
                "1y": coin.get("price_change_percentage_1y_in_currency", 0)
            }

            trend = "Stable"
            if all(pct > 0 for pct in price_changes.values()):
                trend = "Uptrend"
            elif all(pct < 0 for pct in price_changes.values()):
                trend = "Downtrend"

            # RSI Calculation
            sparkline_prices = coin.get("sparkline_in_7d", {}).get("price", [])
            rsi = calculate_rsi(sparkline_prices[-14:]) if len(sparkline_prices) >= 14 else "N/A"

            result.append({
                "name": coin["name"],
                "symbol": coin["symbol"].upper(),
                "price": coin["current_price"],
                "high_24h": coin["high_24h"],
                "low_24h": coin["low_24h"],
                "volume_24h": coin["total_volume"],
                "market_cap": coin["market_cap"],
                "rank": coin["market_cap_rank"],
                "circulating_supply": coin["circulating_supply"],
                "max_supply": coin["max_supply"],
                "price_changes": price_changes,
                "trend": trend,
                "rsi": rsi,
                "market_cap_to_volume_ratio": round(coin["market_cap"] / coin["total_volume"], 2)
            })
        return result
    except requests.exceptions.RequestException as e:
        return {"error": f"Erreur API CoinGecko: {str(e)}"}

def get_fear_greed_index():
    try:
        response = requests.get(FEAR_GREED_INDEX_API)
        response.raise_for_status()
        data = response.json()
        return data["data"][0]["value"]
    except requests.exceptions.RequestException as e:
        return "N/A"

def get_btc_dominance():
    try:
        response = requests.get(BTC_DOMINANCE_API)
        response.raise_for_status()
        data = response.json()
        return data["data"]["market_cap_percentage"]["btc"]
    except requests.exceptions.RequestException as e:
        return "N/A"