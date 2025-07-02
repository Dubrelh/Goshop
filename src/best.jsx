import { Produits } from "./composants/products"

export default function BEST({ categorie = "Tout" }) {

  // Filtre les produits selon la catégorie sélectionnée
  const produitsFiltres = categorie === "Tout"
    ? Produits
    : Produits.filter(prod => prod.categorie === categorie);

    return(
      <div className="best" id="best">
      <h1>Nos produits</h1>
      <div>
        {produitsFiltres.map(prod => (
          <Product
            key={prod.id}
            image={prod.image}
            nom={prod.nom}
            prix={prod.prix}
            statut={prod.statut}
            description={prod.description}
            lien_affiliation={prod.lien_affiliation}
          />
        ))}
      </div>
      <AvisClients />
    </div>
    )
}
    

function Product(props) {
  return (
    <div className='product'>
      <div className='img'>
        <img src={props.image} alt={props.nom} />
      </div>
      <div className='title'>
        <h2>{props.nom}</h2>
        <div>
          <h3>{props.prix} fcfa</h3>
          {props.statut === "isnew" && <span className="nouv">New</span>}
        </div>
        <p>{props.description}</p>
        <a href={props.lien_affiliation} target="_blank" rel="noopener noreferrer">
          <button>Acheter sur Amazon</button>
        </a>
      </div>
    </div>
  );
}



const commentaires = [
  {
    nom: "Mark Z.",
    texte: "Super expérience ! Livraison rapide et produits conformes. Je recommande GoShop à 100%.",
    note: 5
  },
  {
    nom: "Elon M.",
    texte: "Site facile à utiliser, service client réactif. J'ai trouvé tout ce qu'il me fallait.",
    note: 4
  },
  {
    nom: "Kemeni F.",
    texte: "Très satisfaite de ma commande. Les prix sont abordables et la qualité au rendez-vous.",
    note: 5
  }
];

function AvisClients() {
  return (
    <div className="avis-clients">
      <h2>Avis de nos clients</h2>
      <div className="avis-list">
        {commentaires.map((c, i) => (
          <div className="avis-card" key={i}>
            <strong>{c.nom}</strong>
            <div className="avis-stars">
              {"★".repeat(c.note)}{"☆".repeat(5 - c.note)}
            </div>
            <p>"{c.texte}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}