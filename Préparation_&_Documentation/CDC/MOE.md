
# **MOE – Maîtrise d'Œuvre**

## **📌 Plan Technique & Architecture**

Ce document décrit l'architecture technique et les choix de conception pour le projet **Assistant IA Web3**.

---

## **🔧 Technologies Utilisées**

### **🖥 Back-end**
- **Langage** : Python (FastAPI, Flask)
- **IA & NLP** : TensorFlow, PyTorch, spaCy, NLTK, Transformers
- **Scraping** : BeautifulSoup, Scrapy, Selenium

### **🌐 Front-end**
- **Framework** : React (Next.js)
- **UI/UX** : TailwindCSS, Chakra UI

### **🛠 Blockchain & Web3**
- **Librairies** : Web3.js, Ethers.js
- **Compatibilité Wallets** : MetaMask, TrustWallet, Ledger

### **📂 Base de Données**
- **MongoDB** : Transactions blockchain
- **PostgreSQL** : Données historiques et utilisateurs
- **Redis** : Cache pour accélérer les requêtes

### **☁️ Infrastructure & Déploiement**
- **Orchestration** : Kubernetes (K8s)
- **CI/CD** : GitHub Actions
- **Cloud** : AWS / GCP

---

## **🗺 Architecture Microservices**
![Architecture Microservices](.img/MOA_MOE/Architecture_Microservices.svg)
---

## **🔒 Sécurité & Scalabilité**

- **Authentification OAuth/JWT** pour sécuriser l'accès utilisateur
- **Chiffrement des données sensibles** pour protéger les wallets
- **Monitoring & Scaling automatique** sous Kubernetes

---

## **📌 Déploiement & CI/CD**
![Déploiement & CI/CD](.img/MOA_MOE/CI_CD.svg)
---

## **📎 Conclusion**

Le projet repose sur une **architecture modulaire et scalable** optimisée pour la gestion des données de marché et l’analyse crypto. Le déploiement automatisé garantit une maintenance et une évolution rapide du produit.
```
