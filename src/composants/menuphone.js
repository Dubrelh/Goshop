import React from "react";
import "../fontawesome/css/all.min.css";

export default function Menuphone() {
  return (
    <nav className="bottom-nav">
      <a href="#top" title="Accueil">
        <i className="fas fa-home"></i>
        <span>Accueil</span>
      </a>
      <a href="#categorie" title="Catégories">
        <i className="fas fa-th-large"></i>
        <span>Catégories</span>
      </a>
      <a href="#best" title="Best-seller">
        <i className="fab fa-product-hunt"></i>
        <span>Produits</span>
      </a>
      <a href="#apropos" title="À propos">
        <i className="fas fa-info-circle"></i>
        <span>À propos</span>
      </a>
    </nav>
  );
}