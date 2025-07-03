import { Produits } from "./composants/products"

export default function BEST({ categorie = "Tout" }) {

  // Filtre les produits selon la catégorie sélectionnée
  let produitsFiltres = Produits;
  if (categorie === "isnew") {
    produitsFiltres = Produits.filter(prod => prod.statut === "isnew");
  } else if (categorie !== "Tout" && categorie !== "") {
    produitsFiltres = Produits.filter(prod => prod.categorie === categorie);
  } else if (categorie === "") {
    produitsFiltres = [];
  }

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
          <h3>{props.prix} €</h3>
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
    nom: "Sophie L.",
    texte: "Grâce à GoShop, j’ai trouvé des produits Amazon de qualité à des prix imbattables. L’achat est simple et rapide !",
    note: 5
  },
  {
    nom: "Arnaud T.",
    texte: "Sélection variée et offres exclusives : parfait pour faire de bonnes affaires sur Amazon via GoShop.",
    note: 4
  },
  {
    nom: "Fatou N.",
    texte: "J’adore la présentation claire des produits et les liens directs vers Amazon. Je recommande à tous les acheteurs malins !",
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