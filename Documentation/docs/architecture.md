---
id: architecture
title: Architecture & Technologies
---

# 🏗️ Architecture & Technologies  

## 🛠️ Choix technologiques  

L'**Assistant IA Web3** repose sur une architecture **modulaire et scalable** basée sur des microservices orchestrés avec **Kubernetes (K8s)**.  

### 📌 **Technologies principales**  

| Composant | Technologie |
|-----------|------------|
| **Backend** | Python (FastAPI) |
| **Frontend** | React / Next.js |
| **Scraping** | BeautifulSoup, Scrapy, Puppeteer |
| **NLP & IA** | spaCy, Transformers (Hugging Face), TensorFlow / PyTorch |
| **Base de données** | PostgreSQL, Redis |
| **Queue Messaging** | RabbitMQ / Kafka |
| **Orchestration** | Kubernetes (K8s), Docker |
| **CI/CD** | GitHub Actions, Terraform |
| **Hébergement** | AWS (EKS, S3, Lambda), Vercel pour le site web |

---

## ⚙️ **Architecture du projet**  

### **🧩 Vue d’ensemble**  

L’architecture est composée de **plusieurs microservices** communiquant entre eux via des API REST et des queues de messages.  

📌 **Schéma d’architecture simplifié :**  
![Schéma d’architecture simplifié](/img/Doc_Archi_1.svg)

---

### **📌 Détails des microservices**  
![Détails des microservices](/img/Doc_Archi_2.svg)

1️⃣ **API Gateway (FastAPI)**  
   - Centralise et expose les endpoints  
   - Authentifie les requêtes  
   - Redirige les requêtes vers les microservices  

2️⃣ **Microservice de Scraping**  
   - Collecte des données sur différentes plateformes  
   - Stocke les données en base de données  

3️⃣ **Microservice NLP & IA**  
   - Analyse les données via le NLP  
   - Exécute des modèles de Deep Learning pour prédire les tendances  

4️⃣ **Base de Données & Cache**  
   - **PostgreSQL** : Stockage principal des données  
   - **Redis** : Caching pour accélérer les requêtes  

5️⃣ **Orchestration & Scalabilité**  
   - Kubernetes permet de gérer la montée en charge  
   - Autoscaling des services en fonction du trafic  

---

## 🔌 **Flux de données et API**  
![Flux de données et API](/img/Doc_Archi_3.svg)

1. **Scraping & Collecte**  
   - Récupération de données à intervalles réguliers  
   - Stockage des données brutes en base  

2. **Analyse & Traitement IA**  
   - Exécution des modèles de NLP & Deep Learning  
   - Génération d’insights exploitables  

3. **Exposition des résultats**  
   - API REST pour récupérer les analyses  
   - Interface utilisateur pour afficher les résultats  

---

## 🚀 **Scalabilité & Sécurité**  

🔹 **Scalabilité**  
✅ Microservices indépendants  
✅ Kubernetes pour gérer la charge  
✅ Mise en cache des requêtes fréquentes  

🔹 **Sécurité**  
✅ Authentification via JWT / OAuth2  
✅ Chiffrement des données sensibles  
✅ Protection contre les attaques DDoS  
