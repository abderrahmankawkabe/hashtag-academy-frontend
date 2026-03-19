import Slider from "./Slider";
import Apropos from "./Apropos";
import FormationsList from "./FormationsList";
import Langues from "./Langues";
import Reservation from "./Reservation";
import Contact from "./Contact";
import "./Home.css";
import { Helmet } from "react-helmet";

function Home() {

  return (
    <div>
      <Helmet>
        <title>Hashtag Academy - Formation professionnelle au Maroc</title>

        <meta
          name="description"
          content="Centre de formation à Rabat. Informatique, gestion, marketing et langues. Inscription rapide."
        />

        <meta
          name="keywords"
          content="formation Rabat, centre formation Maroc, formation informatique Rabat, formation marketing Rabat, formation comptabilité Maroc"
        />
      </Helmet>

      <section id="accueil">
        <Slider />
      </section>

      <section id="apropos">
        <Apropos />
      </section>

      {/* FORMATIONS */}
      <section id="formations">

        <h2 className="section-title">Nos Formations</h2>

        <FormationsList />

      </section>

      {/* LANGUES */}
      <section id="langues">
        <h2 className="section-title">Nos Langues</h2>
        <Langues />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      {/* RESERVATION */}
      <section id="reservation">
        <Reservation />
      </section>

    </div>
  );
}

export default Home;