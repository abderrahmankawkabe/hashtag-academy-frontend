import { Link } from "react-router-dom";
import "./Langues.css";



function Langues() {

  const langues = [
    {
      name: "Français",
      image: "/langues_card_imgs/francais.webp",
      description: "Formation complète pour tous les niveaux.",
      link: "francais"
    },
    {
      name: "English",
      image: "/langues_card_imgs/english.webp",
      description: "Maîtrisez l’anglais professionnel.",
      link: "english"
    },
    {
      name: "Espagnol",
      image: "/langues_card_imgs/espagnol.webp",
      description: "Développez vos compétences linguistiques.",
      link: "espagnol"
    },
    {
      name: "Allemand",
      image: "/langues_card_imgs/allemand.webp",
      description: "Préparez-vous au marché germanophone.",
      link: "allemand"
    },
    {
      name: "Italien",
      image: "/langues_card_imgs/italien.webp",
      description: "Apprenez l’italien dans un cadre professionnel.",
      link: "italien"
    }
  ];

  return (

    <div className="my-container">

      <div className="my-formations-grid">

        {langues.map((langue, index) => (

          <Link key={index} to={`/langues/${langue.link}`} className="formation-card" >

            <img src={langue.image} alt={langue.name} />

            <h3>{langue.name}</h3>

            <p>{langue.description}</p>

          </Link>

        ))}

      </div>

    </div>

  );
}

export default Langues;