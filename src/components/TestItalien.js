import { useState } from "react";
import { Link } from "react-router-dom";
import "./TestLangues.css";
function TestItalien() {

  const questions = [

    // 1. Grammatica
    { question: "Io _____ italiano ogni giorno.", options: ["studio", "studi", "studia"], answer: 0 },
    { question: "Lei _____ andata al lavoro ieri.", options: ["è", "ha", "era"], answer: 0 },
    { question: "Noi viviamo _____ Roma.", options: ["a", "in", "su"], answer: 0 },
    { question: "Questo è _____ libro.", options: ["mio", "mia", "miei"], answer: 0 },
    { question: "Se avessi tempo, _____ di più.", options: ["viaggerei", "viaggerò", "viaggiavo"], answer: 0 },

    // 2. Vocabolario
    { question: "Il contrario di 'grande' è _____.", options: ["piccolo", "lungo", "forte"], answer: 0 },
    { question: "Sono interessato _____ imparare l’italiano.", options: ["a", "di", "per"], answer: 0 },
    { question: "Lui lavora _____ un’azienda internazionale.", options: ["in", "a", "da"], answer: 0 },
    { question: "Non ho _____ tempo oggi.", options: ["molto", "molti", "molta"], answer: 0 },

    // 3. Espressioni
    { question: "Meglio tardi che _____.", options: ["mai", "prima", "subito"], answer: 0 },
    { question: "In bocca al lupo significa _____.", options: ["Buona fortuna", "Attenzione", "Vai via"], answer: 0 },
    { question: "Chi va piano va _____.", options: ["lento", "sano e lontano", "subito"], answer: 1 }

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
    if (percentage <= 40) return "A2 - Elementare";
    if (percentage <= 60) return "B1 - Intermedio";
    if (percentage <= 80) return "B2 - Avanzato";
    return "C1 - Professionale";
  };

  return (
    <section className="section-default">
      <div className="test-card">

        <h2>📘 Test di Livello di Italiano</h2>

        {!finished ? (
          <>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${(current / questions.length) * 100}%` }}
              ></div>
            </div>

            <p style={{ textAlign: "center", marginTop: "15px" }}>
              Domanda {current + 1} / {questions.length}
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
            <h3 style={{ textAlign: "center" }}>🎉 Risultato Finale</h3>

            <div className="result-box">
              <p><strong>Punteggio:</strong> {score} / {questions.length}</p>
              <p><strong>Percentuale:</strong> {percentage}%</p>

              <h2 style={{ color: "var(--primary)", marginTop: "15px" }}>
                Livello stimato: {getLevel()}
              </h2>
            </div>

            <div className="marketing-message">
              <h3>🚀 Migliora il tuo Italiano con Hashtag Academy</h3>

              <p>
                Il tuo test mostra il tuo livello attuale.
                Con <strong>Hashtag Academy</strong> ti aiutiamo
                a trasformarlo in una competenza professionale certificata.
              </p>

              <ul>
                <li>✔ Programma strutturato</li>
                <li>✔ Preparazione per certificazioni ufficiali</li>
                <li>✔ Metodo moderno e interattivo</li>
                <li>✔ Supporto personalizzato</li>
              </ul>

              <p className="marketing-highlight">
                🎓 Investi oggi nel tuo futuro internazionale.
              </p>
            </div>

            <div style={{ textAlign: "center", marginTop: "25px" }}>
              <Link to="/#reservation">
                <button className="whatsapp-btn">
                  Prenota il Corso Ora
                </button>
              </Link>
            </div>
          </>
        )}

      </div>
    </section>
  );
}

export default TestItalien;