import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Slider.css";

const slides = [
  { id: 1, image: "/slider_imgs/img1.webp", title: "Votre Avenir", title2: "Commence Ici", subtitle: "Formations professionnelles certifiées" },
  { id: 2, image: "/slider_imgs/img2.webp", title: "Développez", title2: "Vos Compétences", subtitle: "Apprenez avec des experts" },
  { id: 3, image: "/slider_imgs/img3.webp", title: "Construisez", title2: "Votre Carrière", subtitle: "Des formations reconnues" }
];

function Slider() {

  const navigate = useNavigate();

  const swipeThreshold = 50;
  const pauseTimeout = useRef(null);

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  /* AUTOPLAY */

  useEffect(() => {

    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);

  }, [paused]);

  useEffect(() => {
    return () => clearTimeout(pauseTimeout.current);
  }, []);


  /* SWIPE MOBILE */

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {

    setPaused(true);

    touchEndX.current = e.changedTouches[0].screenX;

    const diff = touchStartX.current - touchEndX.current;

    if (diff > swipeThreshold) {
      setCurrent((prev) => (prev + 1) % slides.length);
    }

    if (diff < -swipeThreshold) {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }

    clearTimeout(pauseTimeout.current);
    pauseTimeout.current = setTimeout(() => setPaused(false), 3000);
  };



  return (

    <div
      className="slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      {slides.map((slide, index) => (

        <div
          key={slide.id}
          className={`slide ${index === current ? "active" : ""}`}
        >

          <img
            src={slide.image}
            alt={slide.title}
            draggable="false"
          />

          <div className="hero-text">

            <h1>
              {slide.title} <br />
              {slide.title2}
            </h1>

            <p>{slide.subtitle}</p>

            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document.getElementById("formations")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
              }}
            >
              Découvrir nos formations
            </button>

          </div>

        </div>

      ))}

    </div>

  );
}

export default Slider;