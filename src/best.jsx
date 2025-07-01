import { Produits } from "./composants/products"

export default function BEST(){

    return(
        <div className="best">
            <h1>Nos best-seller</h1>
            <div>
              {Produits.map(Produits => 
            (
              <Product img1 = {Produits.img1} title={Produits.nom} prix = {Produits.prix} isnew={Produits.statut}/>
            )
            )}
            </div>
            <AvisClients /> 
        </div>
    )
}

// img2={img2} img3={img3} img4={img4}

let count = 0

function Increment(){
    count = count + 1
    console.log(count)
}
    
function Product (props){
  return(
    <div className='product'>
      <div className='img'>
        <img src={props.img1} alt="not found" />
        {/* <img src={props.img2} alt="not found" />
        <img src={props.img3} alt="not found" />
        <img src={props.img4} alt="not found" /> */}
      </div>
      <div className='title'>
        <h2>{props.title}</h2>
        <div>
          <h3>{props.prix} fcfa</h3>
        { props.isnew ? <span className="nouv">New</span> : null }
        </div>
        <button id='compt' onClick={Increment}>Ajouter au panier</button>
      </div>
    </div>
  )
}

const commentaires = [
  {
    nom: "Awa D.",
    texte: "Super expérience ! Livraison rapide et produits conformes. Je recommande GoShop à 100%.",
    note: 5
  },
  {
    nom: "Moussa K.",
    texte: "Site facile à utiliser, service client réactif. J'ai trouvé tout ce qu'il me fallait.",
    note: 4
  },
  {
    nom: "Fatou S.",
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