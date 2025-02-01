# **Cahier des Charges**

## **Assistant IA Web3 pour la Gestion de Portefeuilles Crypto et l'Analyse de Marché**

---

## **1. Présentation du Projet**

### **1.1 Contexte et Problématique**

L’écosystème des cryptomonnaies est en constante évolution, influencé par des facteurs tels que l’actualité économique, la régulation des États, et les tendances des réseaux sociaux. Aujourd’hui, les investisseurs crypto manquent d’outils centralisés combinant **veille d’actualités, analyse des sentiments du marché et intelligence artificielle** pour prévoir les fluctuations du marché et optimiser leur portefeuille.

L'objectif de ce projet est de créer un **assistant IA Web3** capable de :

- **Scraper et analyser les tendances crypto en temps réel** (Twitter, Telegram, Medium, YouTube, CoinTelegraph, etc.).
- **Évaluer les sentiments du marché** grâce au NLP (Natural Language Processing).
- **Utiliser le Deep Learning** pour analyser les cycles de marché et générer des prévisions.
- **Alerter les utilisateurs** sur des opportunités ou risques identifiés.
- **Offrir une plateforme Web3** permettant de suivre son portefeuille en connectant son wallet.

### **1.2 Objectifs**

- **Offrir un assistant IA Web3** capable de suivre les tendances et événements impactant le marché crypto.
- **Aider les traders et investisseurs à prendre des décisions basées sur l’analyse des données**.
- **Fournir des prévisions de prix grâce à des modèles de Machine Learning**.
- **Détecter les manipulations de marché et signaler les alertes critiques**.

---

## **2. Fonctionnalités**

### **2.1 Fonctionnalités principales**

#### **🔹 Analyse de Marché avec NLP et Scraping**

- Scraping des principales sources d’actualités crypto.
- Analyse de sentiments des publications Twitter, Telegram, Discord.
- Détection des tendances haussières ou baissières.
- Classement des sources fiables et filtrage des fake news.

#### **🔹 Deep Learning & Prédiction des Prix**

- Étude des cycles historiques du marché (Bull Run, Bear Market, Halving BTC, etc.).
- Corrélation entre actualités et fluctuations du marché.
- Prédiction des variations de prix sur la base de modèles LSTMs & Transformers.

#### **🔹 Gestion de Portefeuille Web3**

- Connexion aux wallets Web3 (MetaMask, TrustWallet, Ledger).
- Analyse des performances du portefeuille (P&L, évolution des actifs).
- Suivi des transactions et analyse des patterns d’achat/vente.

#### **🔹 Alertes & Notifications IA**

- Alertes automatiques sur les signaux de marché identifiés.
- Détection des mouvements suspects (Pump & Dump, manipulations de marché).
- Système de scoring des nouveaux projets crypto.

---

## **3. Contraintes Techniques**

### **3.1 Technologies utilisées**

- **Back-end** : Python (FastAPI, Flask), Node.js
- **IA & NLP** : TensorFlow, PyTorch, spaCy, NLTK, Transformers
- **Scraping** : BeautifulSoup, Scrapy, Selenium
- **Blockchain & Web3** : Web3.js, Ethers.js
- **Base de Données** : PostgreSQL (données historiques), MongoDB (transactions), Redis (cache)
- **Infra & Déploiement** : Kubernetes (K8s), Docker, GitHub Actions (CI/CD)

---

## **4. Schémas Visuels**

### **🔷 Architecture Microservices sous Kubernetes**
![Architecture Microservices sous Kubernetes](../img/CDC/Architecture_Microservices_sous_Kubernetes.svg)

### **🔷 Processus d’Analyse des Sentiments (NLP)**
![Processus d’Analyse des Sentiments](../img/CDC/Processus_d’Analyse_des_Sentiments_NLP.svg)
![Architecture Microservices sous Kubernetes](/img/CDC/Architecture_Microservices_sous_Kubernetes.svg)


### **🔷 Schéma d’Interaction Utilisateur-Wallet-IA**
![Schéma d’Interaction Utilisateur-Wallet-IA](../img/CDC/Schéma_d’Interaction_Utilisateur-Wallet-IA.svg)

### **🔷 Processus de Prédiction IA avec Deep Learning**
![Processus de Prédiction IA](../img/CDC/Processus_de_Prédiction_IA_avec_Deep_Learning.svg)

---

## **5. Critères de Validation**

✅ API fonctionnelle et documentée.  
✅ Modèles d’IA entraînés et validés sur des datasets historiques.  
✅ Dashboard interactif accessible aux utilisateurs Web3.  
✅ Sécurité et scalabilité validées sous Kubernetes.  
✅ Engagement des utilisateurs et feedback positif sur la plateforme.  

---

## **6. Ressources et Références**

- **[Web3.js Documentation](https://web3js.readthedocs.io/)**
- **[Binance API](https://binance-docs.github.io/apidocs/spot/en/)**
- **[CoinGecko API](https://www.coingecko.com/en/api)**
- **[Twitter API](https://developer.twitter.com/en/docs/twitter-api)**
- **[Telegram API](https://core.telegram.org/api)**
