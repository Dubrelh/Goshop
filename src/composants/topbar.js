import '../fontawesome/css/all.min.css';
import logo from '../medias/logo.png';

export default function TOPBAR() {
    return (
        <div className='topbar'>
            <div className="topbar-left">
                <img src={logo} alt="GoShop logo" className="topbar-logo" />
                <span className="topbar-title"><b>GoShop</b></span>
            </div>
                <div className="topbar-links">
                <a href="#top">Accueil</a>
                <a href="#categorie">Catégories</a>
                <a href="#best">Best-seller</a>
                <a href="#apropos">À propos</a>
                </div>
        </div>
    );
}