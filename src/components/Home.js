import Slider from "./Slider";
import Apropos from "./Apropos";
import FormationsList from "./FormationsList";
import Langues from "./Langues";
import Reservation from "./Reservation";
import Contact from "./Contact";
import "./Home.css";

function Home() {
  return (
    <div>

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