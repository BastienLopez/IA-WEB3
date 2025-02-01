// app/page.tsx
"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.querySelectorAll(".fade-in").forEach((el) => {
      el.classList.add("visible");
    });
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero fade-in">
        <div className="container">
          <h1>Web3 AI Assistant</h1>
          <p className="subtitle">
            Une IA révolutionnaire pour gérer vos portefeuilles crypto et analyser les marchés.
          </p>
          <div className="actions">
            <button className="cta-primary">Essayez la démo</button>
            <button className="cta-secondary">En savoir plus</button>
          </div>
        </div>
      </section>

      {/* Présentation du projet */}
      <section className="project-presentation fade-in">
        <div className="container project-layout">
          <div className="project-text">
            <h2 className="section-title">Présentation du projet</h2>
            <p>
              Web3 AI Assistant est une solution innovante exploitant l’intelligence artificielle pour révolutionner la gestion des actifs numériques.
              Grâce à une approche basée sur le Deep Learning et le NLP (Natural Language Processing), notre IA offre des insights en temps réel,
              permettant aux investisseurs et traders de prendre des décisions éclairées en toute simplicité.
            </p>
          </div>
          <div className="project-image">
            <img src="/project-presentation.png" alt="Présentation du projet" className="presentation-img" />
          </div>
        </div>
      </section>

      {/* Pourquoi utiliser cet assistant IA ? */}
      <section className="why-use fade-in">
        <div className="container project-layout reverse">
          <div className="project-image">
            <img src="/why-use.png" alt="Pourquoi utiliser cet assistant IA ?" className="why-use-img" />
          </div>
          <div className="project-text">
            <h2 className="section-title">Pourquoi utiliser cet assistant IA ?</h2>
            <ul className="benefits-list">
              <li><strong>Automatisation :</strong> Gagnez du temps grâce à l’automatisation du suivi et des recommandations personnalisées.</li>
              <li><strong>Précision :</strong> Accédez à des analyses de marché basées sur des modèles avancés de Deep Learning.</li>
              <li><strong>Détection des opportunités :</strong> Identifiez les meilleures occasions d’investissement en temps réel.</li>
              <li><strong>Sécurisation :</strong> Profitez d’une infrastructure sécurisée protégeant vos données et vos actifs.</li>
              <li><strong>Expérience utilisateur :</strong> Interface intuitive et fluide permettant une prise en main rapide.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="roadmap fade-in">
        <div className="container">
          <h2 className="section-title">Roadmap et avancée du projet</h2>
          <p>Notre projet suit un développement structuré.</p>
          <div className="roadmap-grid">
            <div className="roadmap-item">
              <strong>Phase 1 :</strong>
              <p>Développement du scraping et du NLP pour capter et analyser les tendances du marché.</p>
            </div>
            <div className="roadmap-item">
              <strong>Phase 2 :</strong>
              <p>Implémentation des modèles d’intelligence artificielle et mise en place de l’interface utilisateur.</p>
            </div>
            <div className="roadmap-item">
              <strong>Phase 3 :</strong>
              <p>Tests approfondis et lancement de la beta privée pour recueillir les retours utilisateurs.</p>
            </div>
            <div className="roadmap-item">
              <strong>Phase 4 :</strong>
              <p>Déploiement public avec améliorations continues basées sur les feedbacks et l’évolution du marché.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer fade-in">
        <div className="container">
          <p>&copy; 2025 Web3 AI Assistant - Tous droits réservés</p>
        </div>
      </footer>
    </main>
  );
}
