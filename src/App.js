import { useState } from 'react';
import HEADER from './header';
import CATEGORIE from './composants/categories';
import BEST from './best';
import FOOTER from './footer';
import Apropos from './composants/propos';
import Menuphone from './composants/menuphone';
import './App.css';

function App() {

  const [categorie, setCategorie] = useState("Tout");

  // Fonction pour vider puis changer la catégorie
  const handleSelectCategorie = (cat) => {
    setCategorie(""); // Vide d'abord
    setTimeout(() => setCategorie(cat), 100); // Puis affiche la nouvelle catégorie
  };

  return (
    <div className="app">
      <HEADER />
      <CATEGORIE onSelectCategorie={handleSelectCategorie} />
      <BEST categorie={categorie} />
      <Apropos />
      <FOOTER />
      <Menuphone />
    </div>
  );
}

export default App;
