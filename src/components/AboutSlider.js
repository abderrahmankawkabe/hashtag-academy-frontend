import { useState, useEffect } from "react";
import "./AboutSlider.css";


const images = [
  "/offres_imgs/img1.webp",
  "/offres_imgs/img2.webp",
  "/offres_imgs/img3.webp",
  "/offres_imgs/img4.webp",
  "/offres_imgs/img5.webp",
  "/offres_imgs/img6.webp",
  "/offres_imgs/img7.webp",
  "/offres_imgs/img8.webp",
  "/offres_imgs/img9.webp",
  "/offres_imgs/img10.webp"
];

function AboutSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent(prev => prev === images.length - 1 ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrent(prev => prev === 0 ? images.length - 1 : prev - 1);
  };

  return (
    <div className="about-slider-wrapper">

      <div className="about-slider">

        {images.map((img, index) => (
          <div
            key={index}
            className={index === current ? "my-slide estActive" : "my-slide"}
          >
            <img src={img} loading="lazy" alt="Hashtag Academy Formation" />
            <div className="image-overlay"></div>
          </div>
        ))}

        <button className="prev" onClick={prevSlide}>‹</button>
        <button className="next" onClick={nextSlide}>›</button>

      </div>



    </div>
  );
}

export default AboutSlider;