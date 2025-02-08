import React, { useEffect, useState } from "react";
import axios from "axios";

const CryptoList = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fearGreedIndex, setFearGreedIndex] = useState(null);
  const [btcDominance, setBtcDominance] = useState(null);
  const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 5000)); // 🔹 Attente de 5s pour éviter le spam
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
        setFearGreedIndex(selectedCrypto === "bitcoin" ? response.data.fear_greed_index : "N/A");
        setBtcDominance(selectedCrypto === "bitcoin" ? response.data.btc_dominance : "N/A");
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
    <div>
      <h2>📊 Données CoinGecko</h2>
      <div>
        <button onClick={() => setSelectedCrypto("bitcoin")}>BTC</button>
        <button onClick={() => setSelectedCrypto("ethereum")}>ETH</button>
      </div>
      {cryptoData ? (
        <div>
          <p>📉 Fear & Greed Index: {fearGreedIndex}</p>
          <p>⚡ BTC Dominance: {btcDominance}%</p>
          <strong>{cryptoData.name} ({cryptoData.symbol.toUpperCase()})</strong> - {cryptoData.price} USD
          <br />
          <small>📈 Haut 24h: {cryptoData.high_24h} USD | 📉 Bas 24h: {cryptoData.low_24h} USD</small>
          <br />
          <small>💰 Volume 24h: {cryptoData.volume_24h} | 🏆 Rank: {cryptoData.rank}</small>
          <br />
          <small>🔄 Circulating Supply: {cryptoData.circulating_supply} | Max Supply: {cryptoData.max_supply}</small>
          <br />
          <small>📊 Variations: 1h: {cryptoData.price_changes["1h"]}% | 24h: {cryptoData.price_changes["24h"]}% | 7d: {cryptoData.price_changes["7d"]}% | 30d: {cryptoData.price_changes["30d"]}% | 1y: {cryptoData.price_changes["1y"]}%</small>
          <br />
          <small>📊 RSI: {cryptoData.rsi} | Market Cap / Volume Ratio: {cryptoData.market_cap_to_volume_ratio}</small>
          <br />
          <strong>📢 Tendance: {cryptoData.trend}</strong>
        </div>
      ) : (
        <p>Aucune donnée disponible.</p>
      )}
    </div>
  );
};
 
export default CryptoList;
