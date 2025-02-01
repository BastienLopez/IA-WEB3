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

                                    <a className="nav-link smoothscroll" href="#item-2">Phase 2: <strong>IA & UI/UX</strong></a>

                                    <a className="nav-link smoothscroll" href="#item-3">Phase 3: <strong>Test & Beta</strong></a>

                                    <a className="nav-link smoothscroll" href="#item-4">Phase 4: <strong>Déploiement</strong></a>
                                </nav>
                            </nav>
                        </div>

                        <div className="col-lg-8 col-12">
                            <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy-example-2" tabIndex="0">
                                <div className="scrollspy-example-item" id="item-1">
                                    <h5>Scraping & NLP</h5>

                                    <p>Développement du scraping et du NLP pour capter et analyser les tendances du marché</p>
                              </div>

                                <div className="scrollspy-example-item" id="item-2">
                                    <h5>IA & UI/UX</h5>

                                    <p>Implémentation des modèles d’intelligence artificielle et mise en place de l’interface utilisateur</p>

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
                                    <h5>Test & Beta</h5>

                                    <p>Tests approfondis et lancement de la beta privée pour recueillir les retours utilisateurs</p>

                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <img src="/images/tablet-screen-contents.jpg" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="scrollspy-example-item" id="item-4">
                                    <h5>Déploiement</h5>
                                    
                                    <p>Déploiement public avec améliorations continues basées sur les feedbacks et l’évolution du marché</p>

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
                            <h6>BLABLA C COOL</h6>

                            <h2 className="mb-4">DOGGO</h2>

                            <p>This isdogoustomizeisdogoustomizeisdogoustomize with the use of Bootstrap CSS classes</p>
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
