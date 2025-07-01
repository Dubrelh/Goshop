
import { Link } from "react-router-dom";

export default function FOOTER() {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h4>Liens rapides</h4>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/produits">Produits</Link></li>
                    <li><Link to="/parametre">Paramètres</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Aide & Support</h4>
                <ul>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/aide">Centre d'aide</Link></li>
                    <li><Link to="/livraison">Livraison</Link></li>
                    <li><Link to="/retours">Retours</Link></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>À propos</h4>
                <ul>
                    <li><Link to="/about">Notre histoire</Link></li>
                    <li><Link to="/team">Équipe</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </div>
            <div className="footer-section newsletter">
                <h4>Abonnez-vous à la newsletter</h4>
                <form>
                    <input type="email" placeholder="Votre email" />
                    <button type="submit">S'abonner</button>
                </form>
                <p>Recevez nos offres et nouveautés en avant-première !</p>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} GoShop. Tous droits réservés.</p>
            </div>
        </footer>
    );
}