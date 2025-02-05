# 📘 Guide pour Lancer les Tests Manuellement

Ce guide explique comment exécuter les tests manuellement pour vérifier le bon fonctionnement du backend, du frontend et de la base de données MongoDB.

---

## 🚀 Prérequis
Avant d'exécuter les tests, assurez-vous d'avoir :
- **Docker et Docker Compose** installés sur votre machine
- **Python 3.11** installé
- **Node.js 18+** installé

## 🛠 Démarrer l'environnement avec Docker

Avant de lancer les tests, assurez-vous que tous les services (backend, frontend, MongoDB) tournent correctement en lançant la commande :
```bash
docker-compose up -d --build
```
Cela va démarrer :
✅ **MongoDB** (Base de données)
✅ **Backend (FastAPI)**
✅ **Frontend (React)**

Pour vérifier que tout est bien lancé, utilisez :
```bash
docker ps
```

---

## 🧪 Exécuter les Tests Manuellement

### 1️⃣ Tester le Backend
Assurez-vous que le backend tourne bien (sur `http://localhost:8000`) puis exécutez :
```bash
pytest tests/test_backend.py
```
📌 **Ce que ça teste :**
- Vérification du bon fonctionnement de l'API `/scrape`
- Vérification de l'API `/health`

---

### 2️⃣ Tester MongoDB
MongoDB doit être actif (`mongodb://localhost:27017/`). Pour tester la connexion :
```bash
pytest tests/test_mongo.py
```
📌 **Ce que ça teste :**
- Vérification que MongoDB est bien accessible
- Teste si la base de données répond correctement

---

### 3️⃣ Tester le Frontend
Le frontend doit être en cours d'exécution (`http://localhost:3000`). Pour exécuter les tests :
```bash
pytest tests/test_frontend.py
```
📌 **Ce que ça teste :**
- Vérifie que le frontend est bien accessible
- Vérifie si le texte attendu est bien affiché sur la page

---

## 📌 Vérifier les Logs en cas d'erreur
Si un test échoue, vous pouvez vérifier les logs des services avec :
```bash
docker-compose logs web3-ai-backend
docker-compose logs web3-ai-frontend
```

---

## 🔄 Arrêter les Services
Lorsque vous avez terminé les tests, vous pouvez arrêter les conteneurs avec :
```bash
docker-compose down
```
