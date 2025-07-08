import logo from './medias/logo.png'

export default function FOOTER() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <div className="topbar-left">
                       <img src={logo} alt="GoShop logo" className="topbar-logo" />
                       <span className="topbar-title"><b>GoShop</b></span>
                    </div>
                    <p>
                        GoShop sélectionne pour vous les meilleurs produits du moment en partenariat avec Amazon.
                        Achetez malin, simplement et en toute sécurité.
                    </p>
                </div>
                <div className="footer-links">
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="#top">Accueil</a></li>
                        <li><a href="#categorie">Catégories</a></li>
                        <li><a href="#best">Best-seller</a></li>
                        <li><a href="#apropos">À propos</a></li>
                    </ul>
                </div>
                <div className="footer-newsletter">
                    <h4>Newsletter</h4>
                    <form>
                        <input type="email" placeholder="Votre email" />
                        <button type="submit">S'abonner</button>
                    </form>
                    <p className="footer-note">Recevez nos nouveautés et offres en avant-première !</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} GoShop. Tous droits réservés.</p>
            </div>
        </footer>
    );
}