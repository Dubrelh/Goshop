export default function CATEGORIE({ onSelectCategorie }) {
  // Fonction pour sélectionner la catégorie et scroller vers la section "best"
  const handleCategorieClick = (categorie) => {
    onSelectCategorie(categorie);
    const bestSection = document.getElementById("best");
    if (bestSection) {
      bestSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="categorie" id="categorie">
      <h2>Acheter par catégories</h2>
      <div className="categ">
        <button className="button c1" onClick={() => handleCategorieClick("Hommes")}>Hommes</button>
        <button className="button c2" onClick={() => handleCategorieClick("Femmes")}>Femmes</button>
        <button className="button c3" onClick={() => handleCategorieClick("Enfants")}>Enfants</button>
        <button className="button" onClick={() => handleCategorieClick("Tout")}>Tout</button>
      </div>
      <button
        className="new"
        onClick={() => handleCategorieClick("isnew")}
      >
        Découvrir les nouveautés <i className="fas fa-star"></i>
      </button>
    </div>
  );
}