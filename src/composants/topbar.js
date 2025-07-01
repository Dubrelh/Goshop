// import '../fontawesome/css/all.min.css'
import { Link } from "react-router-dom"
// import { Compteur } from "../best"

export default function TOPBAR(){

    return(
        <div className='topbar'>
            <h3><i><b>GoShop</b></i></h3>
            <div className="link">
                <Link to="/bobo">Accueil</Link>
                <Link to="">Produits</Link>
                <Link to="">Parametre</Link>
            </div>
            <div className="but">
                <button><i className="fas fa-user"></i></button>
                <button><i className="fas fa-heart"></i></button>
                <button><i className='fas fa-bag-shopping'></i><span></span></button>
            </div>
        </div>
    )
}
