import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:8000";

const CryptoList = () => {
    const [cryptos, setCryptos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${API_URL}/scrape`)
            .then(response => {
                setCryptos(response.data.data);
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
            <ul>
                {cryptos.map((crypto, index) => (
                    <li key={index}>
                        <strong>{crypto.name}</strong> - {crypto.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CryptoList;
