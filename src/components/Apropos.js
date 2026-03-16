import AboutSlider from "./AboutSlider";
import { useEffect, useState } from "react";
import "./Apropos.css";

function Apropos() {

  const [certs, setCerts] = useState(0);
  const [formations, setFormations] = useState(0);
  const [success, setSuccess] = useState(0);

  useEffect(() => {
    const animate = (setter, target, duration) => {
      let start = 0;
      const increment = target / (duration / 20);

      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(counter);
        } else {
          setter(Math.floor(start));
        }
      }, 20);
    };

    animate(setCerts, 90, 2000);
    animate(setFormations, 550, 2000);
    animate(setSuccess, 342, 2000);

  }, []);

  return (
    <section className="about-section">
      <div className="about-container">

        <div className="about-flex">

          {/* LEFT - SLIDER */}
          <div className="about-left">
            <AboutSlider />
          </div>

          {/* RIGHT - CONTENT */}
          <div className="about-right">

            <span className="about-badge">
              Centre de Formation Professionnelle
            </span>

            <h1>
              À Propos <span>Hashtag Academy</span>
            </h1>

            <p className="about-text">
              Hashtag Academy est un centre de formation moderne proposant
              des formations certifiantes en informatique, gestion,
              comptabilité et langues.
            </p>

            <p className="about-text">
              Nos formations sont accessibles en présentiel ou à distance,
              avec un accompagnement personnalisé et des certificats reconnus.
            </p>

            <div className="about-stats">
              <div className="stat-box">
                <h3>Certificats</h3>
                <span>{certs}+</span>
              </div>

              <div className="stat-box">
                <h3>Formations</h3>
                <span>{formations}</span>
              </div>

              <div className="stat-box">
                <h3>Étudiants satisfaits</h3>
                <span>{success}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Apropos;