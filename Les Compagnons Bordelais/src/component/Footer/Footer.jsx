import { Link } from "react-router-dom";
import logoBlanc from "../../../public/logo/logo-blanc.png";
import "./footer.scss";
import instagram from "../../../public/logo/instagram.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <img src={logoBlanc} alt="logo" className="footer-logo" />
        <p>
          Copyright &copy; 2023 Les Compagnons Bordelais. Tous droits réservés.
        </p>

        <ul className="footer-links">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/garderie">Garderie</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/rendez-vous">Rendez-vous</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Link to="https://www.instagram.com" target="_blank">
          <img
            src={instagram}
            alt="logo instgram créée par Freepik - Flaticon"
            className="footer-logo-rs"
          />
        </Link>
        <a
          href="https://www.flaticon.com/fr/icones-gratuites/instagram"
          title="instagram icônes"
          style={{ display: "none" }}
        >
          Instagram icônes créées par Freepik - Flaticon
        </a>
      </div>
    </div>
  );
}
