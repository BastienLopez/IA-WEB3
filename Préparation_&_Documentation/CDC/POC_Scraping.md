Voici les trois documents **POC** en **Markdown**, avec les **schémas Mermaid.js** inclus :

---

## 📄 **POC – Scraping**

# **POC – Scraping des Données Crypto**

## **🎯 Objectif du POC**
Vérifier la faisabilité de l'extraction de données crypto en temps réel à partir de **Twitter, Medium, CoinTelegraph** et autres sources pertinentes.

## **📌 Technologies Utilisées**
- **Python** : Langage principal pour le scraping
- **BeautifulSoup** : Extraction des données HTML
- **Scrapy** : Automatisation du scraping
- **Selenium** : Scraping dynamique si nécessaire (JavaScript)
- **Twitter API, Medium API, CoinTelegraph Scraper** : Récupération des données

## **🔄 Processus de Scraping**
  ![Processus de Scraping](.img/POC/Processus_Scraping.svg)

## **📊 Résultats Attendus**
✅ Extraction réussie des **tweets crypto** (hashtags, comptes influents)  
✅ Récupération des articles Medium et CoinTelegraph  
✅ Stockage des données pour analyse NLP  

## **🛠 Outils & Références**
- 📘 [BeautifulSoup Guide Scraping](https://www.crummy.com/software/BeautifulSoup/)
- 📘 [Twitter API Docs](https://developer.twitter.com/en/docs)
- 📘 [Scrapy Documentation](https://docs.scrapy.org/en/latest/)

## **💡 Améliorations & Validation**

- **Tests de validation** → Vérifier la qualité des données après extraction et l’évaluation des modèles IA.
- **Optimisation des modèles** → Tester plusieurs hyperparamètres pour LSTM et NLP.
- **Automatisation** → Prévoir un script ou un workflow pour exécuter le scraping + NLP en continu.

