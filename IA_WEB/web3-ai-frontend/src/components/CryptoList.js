import React, { useEffect, useState } from "react";
import axios from "axios";

const CryptoList = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/scrape")
      .then(response => {
        setCryptoData(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des données:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Chargement des données...</p>;
  }

  return (
    <div>
      <h2>📊 Prix des Cryptos</h2>
      {cryptoData ? (
        <ul>
          {Object.entries(cryptoData).map(([key, value]) => (
            <li key={key}><strong>{key}:</strong> {value} USD</li>
          ))}
        </ul>
      ) : (
        <p>Impossible de récupérer les données.</p>
      )}
    </div>
  );
};

export default CryptoList;
