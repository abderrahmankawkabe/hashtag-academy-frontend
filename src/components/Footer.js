import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css"


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* LOGO */}
        <div>
          <img src="logo.webp" alt="Logo" className="footer-logo" />
          <p>Votre Avenir Commence Ici.</p>
        </div>

        {/* LOCALISATION */}
        <div>
          <h4>Localisation</h4>
          <a
            href="https://www.google.fr/maps/place/33%C2%B058'43.5%22N+6%C2%B052'46.9%22W/@33.9788642,-6.8803318,295m/data=!3m1!1e3!4m4!3m3!8m2!3d33.97875!4d-6.8796944?entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaMapMarkerAlt /> AVENUE EL MAJD AMAL 2, BLOC B N°509 CYM 10000 Rabat, Morocco
          </a>
        </div>

        {/* CONTACT */}
        <div>
          <h4>Contact</h4>

          <a href="tel:+212620360395" className="footer-link">
            <FaPhone /> +212 6 20 36 03 95
          </a>

          <a href="mailto:contact@hashtagacademy.com" className="footer-link">
            <FaEnvelope /> hashtagacademy@gmail.com
          </a>
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h4>Réseaux Sociaux</h4>

          <a
            href="https://web.facebook.com/Hashtag.Rabat"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaFacebook /> Facebook
          </a>

          <a
            href="https://www.instagram.com/hashtag.academy2"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaInstagram /> Instagram
          </a>
        </div>

      </div>

      <p className="copyright">
        © 2026 Hash Tag Academy - Tous droits réservés
      </p>
    </footer>
  );
}

export default Footer;