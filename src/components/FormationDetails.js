import { useParams, Link } from "react-router-dom";
import formationsData from "./formationsData";
import "./FormationDetails.css";
import { Helmet } from "react-helmet";

function FormationDetails() {
  const { nom } = useParams();
  const formation = formationsData[nom];

  const title = formation
    ? `${formation.title} | Hashtag Academy`
    : "Formation | Hashtag Academy";

  const description = formation
    ? formation.definition
    : "Découvrez nos formations professionnelles.";

  if (!formation) {
    return (
      <section className="formation-not-found">
        <h2>Formation non trouvée</h2>
      </section>
    );
  }


  return (

    <section className="formation-details">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={formation?.image} />
      </Helmet>

      {/* HERO */}
      <div className="formation-hero">
        <img src={formation.image} alt={formation.title} />

        <div className="formation-hero-overlay">

          {formation.badge && (
            <span>
              {formation.badge}
            </span>
          )}

          <h1 className="formation-title">{formation.title}</h1>

          <div className="hero-meta">
            {formation.duration && <span>⏳ {formation.duration}</span>}
            {formation.level && <span>🎓 {formation.level}</span>}
          </div>

        </div>
      </div>

      {/* CONTENT */}
      <div className="formation-container">

        <div className="formation-section">
          <h2>Présentation</h2>
          <p>{formation.definition}</p>
        </div>

        {formation.whyLearn?.length > 0 && (
          <div className="formation-section">
            <h2>Pourquoi choisir cette formation ?</h2>
            <ul>
              {formation.whyLearn.map((item, index) => (
                <li key={index}>✔ {item}</li>
              ))}
            </ul>
          </div>
        )}

        {formation.program?.length > 0 && (
          <div className="formation-section">
            <h2>Programme Professionnel</h2>
            <ul>
              {formation.program.map((item, index) => (
                <li key={index}>✔ {item}</li>
              ))}
            </ul>
          </div>
        )}

        {formation.careers?.length > 0 && (
          <div className="formation-section">
            <h2>Débouchés & Opportunités</h2>
            <ul>
              {formation.careers.map((item, index) => (
                <li key={index}>✔ {item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* MARKETING BLOCK */}
        <div className="formation-marketing-box">
          <h3>🎓 Pourquoi choisir Hashtag Academy ?</h3>

          <div className="marketing-grid">
            <div className="marketing-card">
              <h4>Encadrement Expert</h4>
              <p>Formateurs qualifiés avec expérience terrain.</p>
            </div>

            <div className="marketing-card">
              <h4>Stage Garanti</h4>
              <p>Expérience professionnelle réelle incluse.</p>
            </div>

            <div className="marketing-card">
              <h4>Insertion Professionnelle</h4>
              <p>Accompagnement vers l’emploi.</p>
            </div>

            <div className="marketing-card">
              <h4>Certificat Reconnu</h4>
              <p>Valorisez immédiatement votre CV.</p>
            </div>
          </div>

          <p className="formation-highlight">
            ⚡ Les places sont limitées — Inscrivez-vous maintenant !
          </p>

          <Link to="/#reservation" state={{ formation: formation.title || nom }} >
            <button className="cta-btn">
              🎓 Réserver ma place maintenant 🎓
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default FormationDetails;