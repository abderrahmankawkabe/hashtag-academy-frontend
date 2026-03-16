import { useState } from "react";
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const texte = `
📩 Nouveau message depuis le site

Nom : ${name}
Email : ${email}

Message :
${message}
`;

    const numeroWhatsApp = "212620360395";

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texte)}`;

    window.open(url, "_blank");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-section-default">

      <div className="contact-card">

        <h2>Une question ? Parlons de votre projet 🚀</h2>

        <p className="contact-subtitle">
          Notre équipe est à votre écoute pour vous accompagner et répondre à toutes vos questions.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">

          <input
            type="text"
            placeholder="Votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
          />

          <input
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />

          <textarea
            placeholder="Votre message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="5"
          ></textarea>

          <button type="submit" className="whatsapp-button">
            <FaWhatsapp /> Envoyer sur WhatsApp
          </button>

        </form>

        {/* CONTACT INFO */}

        <div className="contact-info">

          <h3>Contact rapide</h3>

          <p><FaPhone /> Appelez-nous directement</p>
          <p className="contact-highlight">+212 6 20 36 03 95</p>

          <p><FaEnvelope /> Envoyez-nous un email</p>
          <p className="contact-highlight">contact@hashtagacademy.com</p>

        </div>

        {/* SOCIAL */}

        <div className="contact-social">

          <h3>Restons connectés</h3>

          <p className="social-subtitle">
            Découvrez nos actualités et formations sur nos réseaux.
          </p>

          <div className="social-links">

            <a
              href="https://www.facebook.com/Hashtag.Rabat"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link facebook"
            >
              <FaFacebook /> Facebook
            </a>

            <a
              href="https://www.instagram.com/hashtag.academy2"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link instagram"
            >
              <FaInstagram /> Instagram
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;