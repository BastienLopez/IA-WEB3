---
id: api-documentation
title: API Documentation
---

# 📡 Documentation API  

L'**API REST** de l’Assistant IA Web3 permet aux utilisateurs de récupérer des **analyses de marché**, des **prédictions basées sur l’IA**, et des **informations sur leur portefeuille crypto**.  

## 🚀 **Base URL**  

```
https://api.assistant-ia-web3.com/v1
```

---

## 📌 **Endpoints disponibles**  

### 🟢 **1. Récupérer les tendances du marché**  

```http
GET /market-trends
```

📄 **Description** : Retourne les tendances actuelles du marché basées sur le scraping et l’analyse NLP.  

✅ **Réponse JSON :**  
```json
{
  "timestamp": "2025-02-01T12:00:00Z",
  "trends": [
    {
      "crypto": "Bitcoin",
      "sentiment": "Bullish",
      "confidence": 85
    },
    {
      "crypto": "Ethereum",
      "sentiment": "Neutral",
      "confidence": 60
    }
  ]
}
```

---

### 🟢 **2. Obtenir une prédiction de prix IA**  

```http
GET /predict-price?crypto=BTC
```

📄 **Description** : Fournit une prédiction du prix futur d’une cryptomonnaie à l’aide du modèle de Deep Learning.  

✅ **Réponse JSON :**  
```json
{
  "crypto": "Bitcoin",
  "current_price": 42000,
  "predicted_price": 45000,
  "confidence": 90,
  "timeframe": "7 jours"
}
```

---

### 🟢 **3. Récupérer l’historique d’analyse d’un actif**  

```http
GET /history?crypto=ETH
```

📄 **Description** : Retourne l’historique des tendances et prédictions d’une cryptomonnaie.  

✅ **Réponse JSON :**  
```json
{
  "crypto": "Ethereum",
  "history": [
    {
      "date": "2025-01-25",
      "sentiment": "Bearish",
      "predicted_price": 2900
    },
    {
      "date": "2025-01-26",
      "sentiment": "Neutral",
      "predicted_price": 3000
    }
  ]
}
```

---

### 🟢 **4. Ajouter un portefeuille utilisateur**  

```http
POST /portfolio
```

📄 **Description** : Ajoute un portefeuille crypto pour permettre un suivi personnalisé.  

📥 **Body JSON (exemple) :**  
```json
{
  "user_id": "12345",
  "wallet_address": "0xAbC123...",
  "cryptos": ["BTC", "ETH", "SOL"]
}
```

✅ **Réponse JSON :**  
```json
{
  "message": "Portefeuille ajouté avec succès",
  "portfolio_id": "67890"
}
```

---

### 🟢 **5. Récupérer l’état d’un portefeuille**  

```http
GET /portfolio/67890
```

📄 **Description** : Récupère les informations d’un portefeuille crypto enregistré.  

✅ **Réponse JSON :**  
```json
{
  "portfolio_id": "67890",
  "wallet_address": "0xAbC123...",
  "assets": [
    {
      "crypto": "Bitcoin",
      "quantity": 0.5,
      "current_value": 21000
    },
    {
      "crypto": "Ethereum",
      "quantity": 2,
      "current_value": 6000
    }
  ]
}
```

---

## 🔌 **Architecture des appels API**  
![Architecture des appels API](/img/Architecture_appels_API.svg)
---

## 🔑 **Authentification & Sécurité**  

Tous les endpoints nécessitant des actions utilisateur sont protégés par un **Jeton JWT**.  

📌 **Ajout du token dans les requêtes** :  

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### 🔒 **Gestion des permissions**  
| Endpoint | Authentification requise |
|----------|--------------------------|
| `/market-trends` | ❌ Non |
| `/predict-price` | ❌ Non |
| `/history` | ❌ Non |
| `/portfolio` (POST) | ✅ Oui |
| `/portfolio/{id}` (GET) | ✅ Oui |

---

## 📌 **Erreurs & Codes de retour**  

| Code | Description |
|------|------------|
| `200 OK` | Succès de la requête |
| `400 Bad Request` | Paramètre manquant ou invalide |
| `401 Unauthorized` | Token d’authentification manquant ou invalide |
| `404 Not Found` | Ressource introuvable |
| `500 Internal Server Error` | Erreur serveur |
