
export default function CATEGORIE(){
    return(
        <div className="categorie">
            <div className="categorie-search">
                <input
                    type="text"
                    placeholder="Rechercher une catégorie..."
                    className="search-input"
                />
                <button className="search-btn">
                    <i className="fas fa-search"></i>
                </button>
            </div>
            <h2>Acheter par categories</h2>
            <div className="categ">
                <button className="button c1">Hommes</button>
                <button className="button c2">Femmes</button>
                <button className="button c3">Enfants</button>
            </div>
            <button className="new">Découvrir les nouveautés <i className="fab fa-golang"></i></button>
        </div>
    )
}