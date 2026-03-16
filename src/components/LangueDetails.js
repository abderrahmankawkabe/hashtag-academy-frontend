import { useParams, Link } from "react-router-dom";
import "./LangueDetails.css";


const langues = {
  francais: {
    titre: "Formation Professionnelle en Français",
    description:
      "Notre programme de français est conçu pour développer vos compétences linguistiques dans un contexte académique et professionnel. Nous vous préparons à réussir dans vos études, votre carrière et vos projets internationaux.",
    image: "/langues_imgs/francais.webp"
  },
  english: {
    titre: "Formation Professionnelle en Anglais",
    description:
      "Maîtrisez l’anglais professionnel et académique grâce à une formation complète adaptée aux exigences du marché international et aux standards des entreprises modernes.",
    image: "/langues_imgs/english.webp"
  },
  espagnol: {
    titre: "Formation Professionnelle en Espagnol",
    description:
      "Développez vos compétences en espagnol pour travailler, étudier ou évoluer dans un environnement international avec assurance et professionnalisme.",
    image: "/langues_imgs/espagnol.webp"
  },
  allemand: {
    titre: "Formation Professionnelle en Allemand",
    description:
      "Préparez-vous à intégrer le marché germanophone grâce à une formation solide en communication professionnelle et académique.",
    image: "/langues_imgs/allemand.webp"
  },
  italien: {
    titre: "Formation Professionnelle en Italien",
    description:
      "Apprenez l’italien dans un cadre structuré et professionnel pour booster vos opportunités académiques et commerciales.",
    image: "/langues_imgs/italien.webp"
  },
};

function LangueDetails() {
  const { nom } = useParams();
  const langue = langues[nom];

  if (!langue) {
    return (
      <section className="my-section-default">
        <div className="langue-card">
          <h2>Langue non disponible</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="langue-section">
      <div className="langue-image">
        <img src={langue.image} alt={langue.titre} />
      </div>
      <div className="langue-container">

        <div className="langue-text">

          <h2>{langue.titre}</h2>

          <p>{langue.description}</p>

          <h3>Niveaux Disponibles (CECRL)</h3>
          <ul>
            <li>A1 – Débutant</li>
            <li>A2 – Élémentaire</li>
            <li>B1 – Intermédiaire</li>
            <li>B2 – Avancé</li>
            <li>C1 – Professionnel</li>
          </ul>

          <h3>Opportunités</h3>
          <ul>
            <li>Études à l’international</li>
            <li>Carrière dans des entreprises multinationales</li>
            <li>Amélioration des compétences professionnelles</li>
            <li>Préparation aux certifications officielles</li>
          </ul>

          <p className="certif">
            À la fin de la formation, vous recevrez un certificat reconnu.
          </p>

          <div className="buttons">
            <Link to={`/test/${nom}`}>
              <button>Passer le test de niveau</button>
            </Link>

            <Link to="/#reservation">
              <button className="btn-secondary">
                Réserver maintenant
              </button>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

export default LangueDetails;