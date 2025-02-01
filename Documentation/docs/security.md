---
id: security
title: Sécurité & Gestion des Accès
---

# 🔒 Sécurité & Gestion des Accès  

La sécurité est une priorité dans l’Assistant IA Web3. Cette documentation détaille les **mesures de protection** mises en place pour assurer la confidentialité, l’intégrité et la disponibilité des données et services.

---

## 📌 **1. Authentification & Gestion des Accès**  

### 🔹 **Authentification avec JWT (JSON Web Token)**
L’API utilise **JWT** pour sécuriser l’accès aux endpoints protégés.  

✅ **Processus d’authentification :**  
1. L’utilisateur s’identifie avec ses identifiants (`email`, `mot de passe`).  
2. Un token JWT est généré et envoyé dans la réponse.  
3. Ce token est inclus dans le header `Authorization` pour chaque requête API.  

📌 **Exemple de requête avec un token JWT :**  
```http
GET /portfolio
Authorization: Bearer <JWT_TOKEN>
```

✅ **Sécurité du token :**  
- Expiration automatique (`exp` dans le payload).  
- Signature avec **HMAC SHA256** ou **RSA**.  
- Stockage sécurisé côté client (cookies HttpOnly, localStorage sécurisé).  

### 🔹 **Gestion des rôles & permissions (RBAC)**
Les utilisateurs sont assignés à des **rôles spécifiques** avec des **permissions différentes**.  

| Rôle | Permissions |
|------|------------|
| **Utilisateur** | Lire son portefeuille, consulter les analyses |
| **Admin** | Gérer les utilisateurs, accéder aux logs |
| **Service API** | Accès interne entre microservices |

📌 **Exemple de vérification de rôle dans une requête API :**  
```json
{
  "user_id": "12345",
  "role": "admin"
}
```

---

## 📌 **2. Sécurisation de l’API**  

### 🔹 **Protection contre les attaques courantes**
✅ **CSRF (Cross-Site Request Forgery)** :  
- Utilisation de **tokens CSRF** pour les requêtes sensibles.  
- Cookies avec **SameSite=Strict** et **HttpOnly**.  

✅ **CORS (Cross-Origin Resource Sharing)** :  
- Autoriser uniquement certaines origines (`whitelist`).  
- Headers sécurisés :  
  ```http
  Access-Control-Allow-Origin: https://votre-site.com
  Access-Control-Allow-Methods: GET, POST, DELETE
  ```

✅ **Rate Limiting & Brute-force Protection** :  
- Limitation des requêtes (`X requêtes / minute / IP`).  
- Bloque les tentatives excessives d’authentification.  

✅ **Protection DDoS** :  
- **WAF (Web Application Firewall)** pour bloquer les attaques.  
- Détection automatique d’anomalies avec **fail2ban**.  

---

## 📌 **3. Sécurisation des Données**  

### 🔹 **Chiffrement des données sensibles**  
✅ **Base de données** :  
- Chiffrement des mots de passe avec **bcrypt (salted hashing)**.  
- Données sensibles stockées avec **AES-256**.  

✅ **Transmission des données** :  
- 🔒 HTTPS activé (`TLS 1.2+`).  
- Interdiction des connexions non sécurisées (`HSTS`).  

✅ **Stockage sécurisé des clés API & secrets** :  
- 📌 **Utilisation de Kubernetes Secrets & AWS Secrets Manager**.  
- 📌 **Éviter de stocker des credentials en dur dans le code**.  

📌 **Exemple de stockage d’un secret dans Kubernetes** :  
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: api-secret
type: Opaque
data:
  JWT_SECRET: c2VjcmV0LXRva2VuLXRlc3Q=
```

---

## 📌 **4. Sécurité du Déploiement & Infrastructure**  

### 🔹 **Sécurisation des Conteneurs & Kubernetes**  
✅ **Images Docker sécurisées** :  
- Vérification des vulnérabilités avec **Trivy**.  
- Utilisation d’images **officielles & signées** (`docker pull --verify`).  

✅ **Sécurité Kubernetes** :  
- RBAC (Role-Based Access Control) pour limiter les permissions.  
- Pods **isolés** (`NetworkPolicy` pour restreindre la communication).  
- Activation de la **surveillance des logs** (`kubectl logs` + ELK Stack).  

📌 **Exemple de règle RBAC Kubernetes :**  
```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: default
  name: read-only-role
rules:
- apiGroups: [""]
  resources: ["pods", "services"]
  verbs: ["get", "list"]
```

---

## 📌 **5. Schéma Global de Sécurité**  
![![Schéma d’architecture simplifié](/img/Shema_Archi_Securite.svg)]

---

## 📌 **6. Prochaines Améliorations Sécurité**  
🔹 **Authentification OAuth2** pour améliorer la gestion des accès.  
🔹 **Audit de sécurité automatisé** avec Snyk et OWASP ZAP.  
🔹 **Tests de pénétration** pour renforcer la résilience du système.  
