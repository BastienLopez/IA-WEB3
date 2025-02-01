---
id: installation-guide
title: Guide d’Installation
---

# 🛠️ Guide d’Installation  

Ce guide explique comment installer et exécuter l’Assistant IA Web3 en local ou sur un environnement cloud.  

---

## 📌 **1. Prérequis**  

Avant de commencer, assurez-vous d’avoir installé les éléments suivants :  

✅ **Système d’exploitation** : Linux / macOS / Windows  
✅ **Docker & Docker Compose** : [Installation Docker](https://docs.docker.com/get-docker/)  
✅ **Kubernetes (Minikube ou Kind)** : [Installation K8s](https://kubernetes.io/docs/setup/)  
✅ **Node.js & Yarn** (pour le frontend) : [Installation Node.js](https://nodejs.org/)  
✅ **Python 3.9+ & pip** (pour le backend) : [Installation Python](https://www.python.org/downloads/)  

---

## 📌 **2. Installation en local**  

### 🔹 **1. Cloner le dépôt**  
```bash
git clone https://github.com/votre-repo/assistant-ia-web3.git
cd assistant-ia-web3
```

### 🔹 **2. Configuration des variables d’environnement**  
Copiez le fichier `.env.example` et renommez-le `.env`, puis modifiez les valeurs :  
```bash
cp .env.example .env
nano .env
```
Exemple de contenu :  
```env
DATABASE_URL=postgresql://user:password@localhost:5432/assistant_ia
JWT_SECRET=your-secret-key
KAFKA_BROKER=kafka://localhost:9092
```

### 🔹 **3. Lancer la base de données (PostgreSQL & Redis)**  
```bash
docker-compose up -d database redis
```

### 🔹 **4. Installer les dépendances et démarrer le backend**  
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```
Le backend sera accessible sur `http://localhost:8000`.

### 🔹 **5. Installer les dépendances et démarrer le frontend**  
```bash
cd frontend
yarn install
yarn dev
```
L’interface utilisateur sera disponible sur `http://localhost:3000`.

---

## 📌 **3. Déploiement avec Docker & Kubernetes**  

### 🔹 **1. Construire et lancer les services Docker**  
```bash
docker-compose up --build
```
Ce qui démarre :  
✅ API Gateway (FastAPI)  
✅ Microservices (Scraping, NLP, IA)  
✅ Base de données PostgreSQL  
✅ Cache Redis  

### 🔹 **2. Déployer sur Kubernetes (Minikube)**  
```bash
kubectl apply -f k8s/
kubectl get pods
```
Vérifiez que tous les pods sont bien lancés avec `kubectl get pods`.

---

## 📌 **4. Tests & Vérifications**  

### 🔹 **Tester l’API**  
```bash
curl -X GET http://localhost:8000/market-trends
```

### 🔹 **Vérifier les logs des services**  
```bash
docker logs -f backend
```

### 🔹 **Accéder à l’interface Swagger pour l’API**  
Rendez-vous sur :  
```
http://localhost:8000/docs
```

---

## 📌 **5. Schéma de Déploiement**  
![Schéma de Déploiement](/img/Schema_Deploiement.svg)

---

## 📌 **6. Problèmes courants & Solutions**  

| Problème | Solution |
|----------|----------|
| API ne démarre pas | Vérifier `uvicorn` et les dépendances Python |
| Connexion DB échoue | Vérifier `DATABASE_URL` dans `.env` |
| Kubernetes ne démarre pas | Vérifier `kubectl get pods` et logs |
