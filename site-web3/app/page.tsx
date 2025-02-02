"use client";

import React from "react";
import Script from "next/script";

export default function Home() {
  return (
      <main>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              <i className="navbar-brand-icon bi-book me-2"></i>
              <span>Web3 IA</span>
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-lg-auto me-lg-4">
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#Home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#Projet">
                    Projet
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#IA">
                    IA 
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#Roadmap">
                    Roadmap 
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#DOGGO">
                    BLABLA DOGGO
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero-section d-flex justify-content-center align-items-center" id="Home">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 mb-5 pb-5 pb-lg-0 mb-lg-0">
                <h6>Web3 IA Assistant</h6>
                <h1 className="text-white mb-4">Une IA pour gérer vos crypto et analyser les marchés</h1>
              </div>
              <div className="hero-image-wrap col-lg-6 col-12 mt-3 mt-lg-0">
                <img
                  src="/images/education-online-books.png"
                  className="hero-image img-fluid"
                  alt="education online books"
                />
              </div>
            </div>
          </div>
        </section>

        <br></br><br></br><br></br><br></br><br></br>

        <section className="py-lg-5"></section>


            <section className="book-section section-padding" id="Projet">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12">
                            <img src="/images/tablet-screen-contents.jpg" className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="book-section-info">
                                <h6>Présentation du projet</h6>
                                <p>Web3 AI Assistant est une solution innovante exploitant l’intelligence artificielle pour révolutionner la gestion des actifs numériques</p>
                                <p>
                                  Grâce à une approche basée sur le <strong> Deep Learning</strong> et le <strong>NLP</strong> (Natural Language Processing), notre <strong>IA</strong> offre des insights en temps réel,
                                  permettant aux investisseurs et traders de prendre des décisions éclairées en toute simplicité
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="book-section section-padding" id="IA">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12">
                            <img src="/images/tablet-screen-contents.jpg" className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="book-section-info">
                                <h6>Pourquoi utiliser cet assistant IA ?</h6>
                                <ul className="benefits-list">
                                  <li><strong>Automatisation :</strong> Gagnez du temps grâce à l’automatisation du suivi et des recommandations personnalisées</li><br></br>
                                  <li><strong>Précision :</strong> Accédez à des analyses de marché basées sur des modèles avancés de Deep Learning</li><br></br>
                                  <li><strong>Détection des opportunités :</strong> Identifiez les meilleures occasions d’investissement en temps réel</li><br></br>
                                  <li><strong>Sécurisation :</strong> Profitez d’une infrastructure sécurisée protégeant vos données et vos actifs</li><br></br>
                                  <li><strong>Expérience utilisateur :</strong> Interface intuitive et fluide permettant une prise en main rapide</li><br></br>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section id="Roadmap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12 text-center">
                            <h6>Roadmap et avancée du projet</h6> <br></br>
                            <img src="/images/Phase.svg" className="img-fluid" alt="" />  <br></br> <br></br>
                            <h2 className="mb-5">Notre projet suit un développement structuré</h2>
                        </div>

                        <div className="col-lg-4 col-12">
                            <nav id="navbar-example3" className="h-100 flex-column align-items-stretch">
                                <nav className="nav nav-pills flex-column">
                                    <a className="nav-link smoothscroll" href="#item-1">Phase 1 : <strong>Scraping & NLP</strong></a>

                                    <a className="nav-link smoothscroll" href="#item-2">Phase 2: <strong>IA</strong></a>

                                    <a className="nav-link smoothscroll" href="#item-3">Phase 2: <strong>UI/UX</strong></a>

                                    <a className="nav-link smoothscroll" href="#item-4">Phase 3: <strong>Test & Beta</strong></a>

                                    <a className="nav-link smoothscroll" href="#item-5">Phase 4: <strong>Déploiement</strong></a>
                                </nav>
                            </nav>
                        </div>

                        <div className="col-lg-8 col-12">
                            <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy-example-2" tabIndex="0">
                                <div className="scrollspy-example-item" id="item-1">
                                    <h5>Scraping & NLP</h5>

                                    <section className="nlp-section section-padding bg-light text-dark">
                                      <div className="container">
                                        <h2 className="mb-4 text-center" style={{ fontSize: "1.5rem" }}>Scraping & NLP pour le Web3 🔍</h2>
                                        <p className="text-center" style={{ fontSize: "0.9rem" }}>
                                          Le marché crypto est fortement influencé par les réseaux sociaux et les actualités du Web3.
                                          Notre IA utilise le NLP (Natural Language Processing) pour analyser et extraire des informations
                                          pertinentes sur le marché en temps réel.
                                        </p>

                                        <h3 className="mt-5" style={{ fontSize: "1.2rem" }}>✅ Fonctionnalités clés :</h3>
                                        <ul className="list-unstyled" style={{ fontSize: "0.7rem" }}>
                                          <li className="mb-3">
                                            <h4 style={{ fontSize: "1rem" }}>🔹 Surveillance en temps réel de l’actualité crypto 📰</h4>
                                            <p style={{ fontSize: "0.8rem" }}>➜ Extraction de données depuis <strong>Twitter, Discord, Telegram, Reddit et Medium</strong>.</p>
                                            <p style={{ fontSize: "0.8rem" }}>➜ Analyse des <strong>dernières annonces, partenariats et lancements de projets</strong>.</p>
                                          </li>
                                          <li className="mb-3">
                                            <h4 style={{ fontSize: "1rem" }}>🔹 Analyse du sentiment du marché 📉📈</h4>
                                            <p style={{ fontSize: "0.8rem" }}>➜ Notre IA classe les messages en <strong>positif, négatif ou neutre</strong> pour détecter les tendances.</p>
                                            <p style={{ fontSize: "0.8rem" }}>➜ Identification des <strong>buzz autour de certains tokens et NFT</strong> avant les pump/dump.</p>
                                          </li>
                                          <li className="mb-3">
                                            <h4 style={{ fontSize: "1rem" }}>🔹 Filtrage des Fake News et Rumeurs 🚨</h4>
                                            <p style={{ fontSize: "0.8rem" }}>➜ Détection des <strong>scams, rug pulls et manipulations de marché</strong> en scannant les discussions suspectes.</p>
                                            <p style={{ fontSize: "0.8rem" }}>➜ Vérification croisée avec <strong>des sources fiables</strong> pour limiter les risques.</p>
                                          </li>
                                          <li className="mb-3">
                                            <h4 style={{ fontSize: "1rem" }}>🔹 Alertes et résumés intelligents ⚡</h4>
                                            <p style={{ fontSize: "0.8rem" }}>➜ L’IA envoie des <strong>résumés automatisés</strong> des tendances en cours.</p>
                                            <p style={{ fontSize: "0.8rem" }}>➜ Possibilité de recevoir un <strong>digest quotidien ou en temps réel</strong> sur l’évolution du marché.</p>
                                          </li>
                                        </ul>
                                      </div>
                                    </section>
                              </div>

                                <div className="scrollspy-example-item" id="item-2">
                                    <h5>IA</h5>
                                    <section className="ai-section section-padding bg-light text-dark">
                                      <div className="container">
                                        <h2 className="mb-4 text-center" style={{ fontSize: "1rem" }}>Intelligence Artificielle (IA)</h2>
                                        <p style={{ fontSize: "0.8rem" }}>Dans ce projet, l'IA est utilisée pour automatiser l'analyse des données Web3 et améliorer la prise de décision des utilisateurs.</p>
                                        <p style={{ fontSize: "0.8rem" }}>L'objectif est de développer des modèles capables d’identifier les tendances du marché, d’anticiper les mouvements des cryptos et d’envoyer des recommandations stratégiques en fonction des habitudes de trading des utilisateurs.</p>
                                        <h4 style={{ fontSize: "1rem" }}>✅ Fonctionnalités IA :</h4>
                                        <ul className="list-unstyled" style={{ fontSize: "0.8rem" }}>
                                          <li className="mb-3">
                                            <h5 style={{ fontSize: "1rem" }}>🔹 Analyse prédictive et modèles Machine Learning 📈</h5>
                                            <p style={{ fontSize: "0.8rem" }}>L’IA analysera les tendances des cryptos en combinant des modèles de prédiction de prix et des analyses on-chain.</p>
                                            <p style={{ fontSize: "0.8rem" }}>Les utilisateurs recevront des alertes sur les signaux d’achat et de vente basés sur les mouvements des whales et d’autres métriques.</p>
                                          </li>
                                        </ul>
                                      </div>
                                    </section>

                                    <div className="row">
                                        <div className="col-lg-6 col-12 mb-3">
                                            <img src="/images/portrait-mature-smiling-authoress-sitting-desk.jpg" className="scrollspy-example-item-image img-fluid" alt="" />
                                        </div>

                                        <div className="col-lg-6 col-12 mb-3">
                                            <img src="/images/businessman-sitting-by-table-cafe.jpg" className="scrollspy-example-item-image img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="scrollspy-example-item" id="item-3">
                                    <h5>UI/UX</h5>
                                    <section className="uiux-section section-padding bg-light text-dark mt-5">
                                      <div className="container">
                                        <h2 className="mb-4 text-center" style={{ fontSize: "1rem" }}>Implémentation UI/UX</h2>
                                        <p style={{ fontSize: "0.8rem" }}>L'interface utilisateur de ce projet sera pensée pour simplifier la gestion des wallets et des analyses de marché.</p>
                                        <p style={{ fontSize: "0.8rem" }}>L’objectif est d’offrir un **dashboard clair et interactif**, permettant aux utilisateurs de visualiser en un coup d'œil l'état du marché, leurs transactions et les recommandations de l’IA.</p>
                                        
                                        <h4 style={{ fontSize: "1rem" }}>✅ Fonctionnalités UI/UX :</h4>
                                        <ul className="list-unstyled" style={{ fontSize: "0.8rem" }}>
                                          <li className="mb-3">
                                            <h5 style={{ fontSize: "1rem" }}>🔹 Dashboard interactif 📊</h5>
                                            <p style={{ fontSize: "0.8rem" }}>L’interface affichera des **graphiques dynamiques**, des **indicateurs personnalisés** et un **système d’alertes intelligentes**.</p>
                                            <p style={{ fontSize: "0.8rem" }}>Chaque utilisateur pourra adapter l’affichage en fonction de ses besoins (mode clair/sombre, widgets configurables).</p>
                                          </li>
                                          <li className="mb-3">
                                            <h5 style={{ fontSize: "1rem" }}>🔹 Expérience utilisateur optimisée 🎯</h5>
                                            <p style={{ fontSize: "0.8rem" }}>Navigation fluide et rapide, avec un **système de filtres avancés** pour accéder facilement aux données pertinentes.</p>
                                            <p style={{ fontSize: "0.8rem" }}>Intégration d’un **mode simplifié** pour les débutants et d’un **mode expert** pour les traders avancés.</p>
                                          </li>
                                        </ul>
                                      </div>
                                    </section>

                                    <div className="row">
                                        <div className="col-lg-6 col-12 mb-3">
                                            <img src="/images/portrait-mature-smiling-authoress-sitting-desk.jpg" className="scrollspy-example-item-image img-fluid" alt="" />
                                        </div>

                                        <div className="col-lg-6 col-12 mb-3">
                                            <img src="/images/businessman-sitting-by-table-cafe.jpg" className="scrollspy-example-item-image img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="scrollspy-example-item" id="item-4">
                                    <h5>Test & Beta</h5>
                                    <section className="test-beta-section section-padding bg-light text-dark">
                                      <div className="container">
                                        <h2 className="mb-4 text-center" style={{ fontSize: "1rem" }}>Phase de Test & Beta</h2>
                                        <p style={{ fontSize: "0.8rem" }}>Cette phase est cruciale pour valider l'efficacité des modèles d’IA et s’assurer que l’interface utilisateur fonctionne sans bugs avant un déploiement à grande échelle.</p>
                                        <p style={{ fontSize: "0.8rem" }}>L’objectif est de tester le système en conditions réelles, de recueillir les retours des utilisateurs et d’améliorer les fonctionnalités en fonction des feedbacks.</p>
                                        
                                        <h4 style={{ fontSize: "1rem" }}>✅ Étapes de la phase de Test :</h4>
                                        <ul className="list-unstyled" style={{ fontSize: "0.8rem" }}>
                                          <li className="mb-3">
                                            <h5 style={{ fontSize: "1rem" }}>🔹 Tests unitaires et d’intégration 🛠️</h5>
                                            <p style={{ fontSize: "0.8rem" }}>Chaque module de l’IA et de l’interface est testé individuellement pour détecter d’éventuelles erreurs.</p>
                                            <p style={{ fontSize: "0.8rem" }}>Utilisation de **Jest, Cypress ou Playwright** pour automatiser les tests d’intégration et garantir la stabilité de l’application.</p>
                                          </li>
                                          <li className="mb-3">
                                            <h5 style={{ fontSize: "1rem" }}>🔹 Beta privée avec utilisateurs sélectionnés 👥</h5>
                                            <p style={{ fontSize: "0.8rem" }}>Un groupe restreint d’utilisateurs testera la plateforme en avant-première pour identifier les points forts et les axes d’amélioration.</p>
                                            <p style={{ fontSize: "0.8rem" }}>Collecte des retours via **questionnaires, sessions d’analyse comportementale et enregistrement des interactions**.</p>
                                          </li>
                                          <li className="mb-3">
                                            <h5 style={{ fontSize: "1rem" }}>🔹 Optimisation continue et corrections 🛠️</h5>
                                            <p style={{ fontSize: "0.8rem" }}>Amélioration des performances et de l’ergonomie en fonction des retours des testeurs.</p>
                                            <p style={{ fontSize: "0.8rem" }}>Correction des éventuels bugs et optimisation du modèle d’IA en **itérations successives**.</p>
                                          </li>
                                        </ul>
                                      </div>
                                    </section>

                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <img src="/images/tablet-screen-contents.jpg" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="scrollspy-example-item" id="item-5">
                                    <h5>Déploiement</h5>
                                    
                                    <section className="deployment-section section-padding bg-light text-dark">
                                      <div className="container">
                                        <h2 className="mb-4 text-center" style={{ fontSize: "1rem" }}>Phase de Déploiement</h2>
                                        <p style={{ fontSize: "0.8rem" }}>La phase de déploiement est essentielle pour assurer une mise en production stable et sécurisée du projet, permettant aux utilisateurs finaux d’accéder à toutes les fonctionnalités avec une haute disponibilité.</p>
                                        <p style={{ fontSize: "0.8rem" }}>L’objectif est d’établir une architecture robuste, d’optimiser les performances et de garantir la scalabilité de l’application.</p>
                                        
                                        <h4 style={{ fontSize: "1rem" }}>✅ Étapes de la phase de Déploiement :</h4>
                                        <ul className="list-unstyled" style={{ fontSize: "0.8rem" }}>
                                          <li className="mb-3">
                                            <h5 style={{ fontSize: "1rem" }}>🔹 Infrastructure et hébergement cloud ☁️</h5>
                                            <p style={{ fontSize: "0.8rem" }}>Mise en place d’un **hébergement sur Kubernetes, AWS, Vercel ou DigitalOcean**, selon les besoins de scalabilité.</p>
                                            <p style={{ fontSize: "0.8rem" }}>Optimisation des performances backend et mise en cache avec **Redis** pour réduire la latence.</p>
                                          </li>
                                          <li className="mb-3">
                                            <h5 style={{ fontSize: "1rem" }}>🔹 CI/CD et automatisation des déploiements 🚀</h5>
                                            <p style={{ fontSize: "0.8rem" }}>Configuration des pipelines **CI/CD avec GitHub Actions ou GitLab CI** pour un déploiement automatisé.</p>
                                            <p style={{ fontSize: "0.8rem" }}>Tests automatisés avant chaque mise en production pour garantir la stabilité du projet.</p>
                                          </li>
                                          <li className="mb-3">
                                            <h5 style={{ fontSize: "1rem" }}>🔹 Sécurisation et monitoring 🔐</h5>
                                            <p style={{ fontSize: "0.8rem" }}>Implémentation de **pare-feu, gestion des clés API et authentification OAuth2/Web3** pour la sécurité.</p>
                                            <p style={{ fontSize: "0.8rem" }}>Surveillance des logs et des performances via **Prometheus, Grafana et Elastic Stack**.</p>
                                          </li>
                                          <li className="mb-3">
                                            <h5 style={{ fontSize: "1rem" }}>🔹 Mise en ligne et feedback des utilisateurs 🌍</h5>
                                            <p style={{ fontSize: "0.8rem" }}>Déploiement progressif en **phases contrôlées (Canary Release, A/B testing)** pour tester l’adoption.</p>
                                            <p style={{ fontSize: "0.8rem" }}>Collecte des retours des utilisateurs et ajustements continus pour améliorer l’expérience.</p>
                                          </li>
                                        </ul>
                                      </div>
                                    </section>

                                    <img src="/images/portrait-mature-smiling-authoress-sitting-desk.jpg" className="scrollspy-example-item-image img-fluid mb-3" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="author-section section-padding" id="DOGGO">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12">
                            <img src="/images/portrait-mature-smiling-authoress-sitting-desk.jpg" className="author-image img-fluid" alt="" />
                        </div>
                
                        <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                            <h6>Surveillance du marché crypto</h6>
                            <br></br><br></br><br></br>
                            <h2 className="mb-4" style={{ textAlign: "center" }}>Restez informé du réseaux & Web3</h2>
                        </div>

                    </div>
                </div>
            </section>

            <section className="technologies-section py-5 bg-light text-center">
              <div className="container">
                <h2 className="mb-4">Technologies utilisées</h2>
                <div className="row justify-content-center">
                  <div className="col-md-2 col-4">
                    <img src="/images/logos/nextjs.svg" alt="Next.js" className="tech-logo img-fluid" style={{ width: "80px", height: "80px", objectFit: "contain", margin: "0 auto" }} />
                    <p>Next.js</p>
                  </div>
                  <div className="col-md-2 col-4">
                    <img src="/images/logos/react.svg" alt="React" className="tech-logo img-fluid" style={{ width: "80px", height: "80px", objectFit: "contain", margin: "0 auto" }} />
                    <p>React</p>
                  </div>
                  <div className="col-md-2 col-4">
                    <img src="/images/logos/python.svg" alt="Python" className="tech-logo img-fluid" style={{ width: "80px", height: "80px", objectFit: "contain", margin: "0 auto" }} />
                    <p>Python</p>
                  </div>
                  <div className="col-md-2 col-4">
                    <img src="/images/logos/solidity.svg" alt="Solidity" className="tech-logo img-fluid" style={{ width: "80px", height: "80px", objectFit: "contain", margin: "0 auto" }} />
                    <p>Solidity</p>
                  </div>
                  <div className="col-md-2 col-4">
                    <img src="/images/logos/nodejs.svg" alt="Node.js" className="tech-logo img-fluid" style={{ width: "80px", height: "80px", objectFit: "contain", margin: "0 auto" }} />
                    <p>Node.js</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="author-section section-padding bg-dark text-light text-center w-100 py-4" id="DOGGO">
              <div className="container">
                <ul className="navbar-nav d-flex flex-row justify-content-center">
                  <li className="nav-item mx-2">
                    <a className="nav-link text-light" href="#Home">Home</a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link text-light" href="">Documentation</a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link text-light" href="">Support</a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link text-light" href="">Terms</a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link text-light" href="">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </section>
    </main>
  );
}
