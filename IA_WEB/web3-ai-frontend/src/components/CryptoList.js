import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/CryptoList.css";

const CryptoList = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fearGreedIndex, setFearGreedIndex] = useState(null);
  const [btcDominance, setBtcDominance] = useState(null);
  const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const response = await axios.get("http://localhost:8000/scrape/coingecko");

        console.log("Données reçues de l'API :", response.data);

        if (!Array.isArray(response.data.data)) {
          console.error("Erreur: response.data.data n'est pas un tableau", response.data.data);
          setLoading(false);
          return;
        }

        const crypto = response.data.data.find(coin => 
          coin.symbol.toLowerCase() === (selectedCrypto === "bitcoin" ? "btc" : "eth")
        );

        setCryptoData(crypto || null);
        setFearGreedIndex(selectedCrypto === "bitcoin" ? Number(response.data.fear_greed_index).toFixed(2) : "N/A");
        setBtcDominance(selectedCrypto === "bitcoin" ? Number(response.data.btc_dominance).toFixed(2) : "N/A");
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des données CoinGecko:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCrypto]);

  if (loading) {
    return <p>Chargement des données...</p>;
  }

  return (
    <div className="crypto-list">
      <div className="crypto-box">
        <h3 className="crypto-title">📊 CoinGecko</h3>
        <div className="crypto-buttons">
          <button onClick={() => setSelectedCrypto("bitcoin")}>BTC</button>
          <button onClick={() => setSelectedCrypto("ethereum")}>ETH</button>
        </div>
        {cryptoData ? (
          <div>
            <p>📉 Fear & Greed Index: {fearGreedIndex}</p>
            <p>⚡ BTC Dominance: {btcDominance}%</p>
            <strong>
              {cryptoData.name} ({cryptoData.symbol.toUpperCase()})
            </strong>{" "}
            - {Number(cryptoData.price).toFixed(2)} USD
            <br />
            <small>
              📈 Haut 24h: {Number(cryptoData.high_24h).toFixed(2)} USD | 📉 Bas
              24h: {Number(cryptoData.low_24h).toFixed(2)} USD
            </small>
            <br />
            <small>
              💰 Volume 24h: {Number(cryptoData.volume_24h).toFixed(2)} | 🏆 Rank:{" "}
              {cryptoData.rank}
            </small>
            <br />
            <small>
              🔄 Circulating Supply: {Number(cryptoData.circulating_supply).toFixed(2)} | 
              Max Supply: {cryptoData.max_supply ? Number(cryptoData.max_supply).toFixed(2) : "N/A"}
            </small>
            <br />
            <small>
              📊 Variations: 1h: {Number(cryptoData.price_changes["1h"]).toFixed(2)}% | 24h:{" "}
              {Number(cryptoData.price_changes["24h"]).toFixed(2)}% | 7d:{" "}
              {Number(cryptoData.price_changes["7d"]).toFixed(2)}% | 30d:{" "}
              {Number(cryptoData.price_changes["30d"]).toFixed(2)}% | 1y:{" "}
              {Number(cryptoData.price_changes["1y"]).toFixed(2)}%
            </small>
            <br />
            <small>
              📊 RSI: {Number(cryptoData.rsi).toFixed(2)} | Market Cap / Volume Ratio:{" "}
              {Number(cryptoData.market_cap_to_volume_ratio).toFixed(2)}
            </small>
            <br />
            <strong>📢 Tendance: {cryptoData.trend}</strong>
          </div>
        ) : (
          <p>Aucune donnée disponible.</p>
        )}
      </div>

      <div className="crypto-box">
        <h3 className="crypto-title">Kraken</h3>
        <p>Données Kraken à implémenter...</p>
      </div>

      <div className="crypto-box">
        <h3 className="crypto-title">Twitter</h3>
        <p>Données Twitter à implémenter...</p>
      </div>
    </div>
  );
};

export default CryptoList;
