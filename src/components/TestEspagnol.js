import { useState } from "react";
import { Link } from "react-router-dom";
import "./TestLangues.css";;


function TestEspagnol() {

  const questions = [

    // 1. Gramática
    { question: "Ella _____ al trabajo todos los días.", options: ["va", "vas", "voy"], answer: 0 },
    { question: "Nosotros _____ en España el año pasado.", options: ["vivimos", "vivíamos", "vivir"], answer: 0 },
    { question: "Si tuviera dinero, _____ un coche nuevo.", options: ["compraría", "compraré", "compré"], answer: 0 },
    { question: "No hay _____ agua en la botella.", options: ["alguna", "ninguna", "mucho"], answer: 1 },
    { question: "Este libro es más _____ que aquel.", options: ["interesante", "interesantes", "interesa"], answer: 0 },

    // 2. Vocabulario
    { question: "El contrario de 'grande' es _____.", options: ["pequeño", "alto", "fuerte"], answer: 0 },
    { question: "Estoy interesado _____ aprender español.", options: ["en", "por", "de"], answer: 0 },
    { question: "Ella trabaja _____ una empresa internacional.", options: ["en", "a", "por"], answer: 0 },
    { question: "Necesito _____ tiempo para terminar.", options: ["más", "muchos", "muchas"], answer: 0 },

    // 3. Expresiones
    { question: "Más vale tarde que _____.", options: ["mal", "nunca", "antes"], answer: 1 },
    { question: "Estar en las nubes significa _____.", options: ["estar distraído", "estar feliz", "estar enojado"], answer: 0 },
    { question: "Pan comido significa _____.", options: ["difícil", "fácil", "imposible"], answer: 1 }

  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showCorrection, setShowCorrection] = useState(false);

  const handleAnswer = (index) => {

    if (showCorrection) return;

    setShowCorrection(true);

    if (index === questions[current].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const next = current + 1;

      if (next < questions.length) {
        setCurrent(next);
        setShowCorrection(false);
      } else {
        setFinished(true);
      }
    }, 1000);
  };

  const percentage = Math.round((score / questions.length) * 100);

  const getLevel = () => {
    if (percentage <= 20) return "A1 - Principiante";
    if (percentage <= 40) return "A2 - Elemental";
    if (percentage <= 60) return "B1 - Intermedio";
    if (percentage <= 80) return "B2 - Avanzado";
    return "C1 - Profesional";
  };

  return (
    <section className="section-default">
      <div className="test-card">

        <h2>📘 Prueba de Nivel de Español</h2>

        {!finished ? (
          <>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${(current / questions.length) * 100}%` }}
              ></div>
            </div>

            <p style={{ textAlign: "center", marginTop: "15px" }}>
              Pregunta {current + 1} / {questions.length}
            </p>

            <h3>{questions[current].question}</h3>

            <div className="answers-container">
              {questions[current].options.map((option, index) => {

                let className = "";

                if (showCorrection) {
                  if (index === questions[current].answer) {
                    className = "correct";
                  } else {
                    className = "wrong";
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className={className}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <h3 style={{ textAlign: "center" }}>🎉 Resultado Final</h3>

            <div className="result-box">
              <p><strong>Puntuación:</strong> {score} / {questions.length}</p>
              <p><strong>Porcentaje:</strong> {percentage}%</p>

              <h2 style={{ color: "var(--primary)", marginTop: "15px" }}>
                Nivel estimado: {getLevel()}
              </h2>
            </div>

            <div className="marketing-message">
              <h3>🚀 Mejora tu Español con Hashtag Academy</h3>

              <p>
                Tu prueba muestra tu nivel actual.
                En <strong>Hashtag Academy</strong> te ayudamos a transformar
                este nivel en una competencia profesional certificada.
              </p>

              <ul>
                <li>✔ Programa estructurado</li>
                <li>✔ Preparación para certificaciones oficiales</li>
                <li>✔ Método moderno e interactivo</li>
                <li>✔ Seguimiento personalizado</li>
              </ul>

              <p className="marketing-highlight">
                🎓 Invierte en tu futuro académico y profesional hoy.
              </p>
            </div>

            <div style={{ textAlign: "center", marginTop: "25px" }}>
              <Link to="/#reservation">
                <button className="whatsapp-btn">
                  Reservar Mi Curso Ahora
                </button>
              </Link>
            </div>
          </>
        )}

      </div>
    </section>
  );
}

export default TestEspagnol;