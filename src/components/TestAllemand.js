import { useState } from "react";
import { Link } from "react-router-dom";
import "./TestLangues.css";


function TestAllemand() {

  const questions = [

    // 1. Grammatik
    { question: "Ich _____ jeden Tag Deutsch.", options: ["lerne", "lernst", "lernen"], answer: 0 },
    { question: "Er _____ gestern ins Kino gegangen.", options: ["ist", "hat", "war"], answer: 0 },
    { question: "Wir wohnen _____ Berlin.", options: ["in", "auf", "bei"], answer: 0 },
    { question: "Das ist _____ Auto.", options: ["mein", "meine", "meinen"], answer: 0 },
    { question: "Wenn ich Zeit hätte, _____ ich reisen.", options: ["würde", "werde", "wurde"], answer: 0 },

    // 2. Wortschatz
    { question: "Das Gegenteil von 'groß' ist _____.", options: ["klein", "lang", "schnell"], answer: 0 },
    { question: "Ich interessiere mich _____ Musik.", options: ["für", "mit", "auf"], answer: 0 },
    { question: "Sie arbeitet _____ einer internationalen Firma.", options: ["bei", "zu", "nach"], answer: 0 },
    { question: "Ich habe nicht _____ Zeit.", options: ["viel", "viele", "mehr"], answer: 0 },

    // 3. Redewendungen
    { question: "Alles hat ein Ende, nur die Wurst hat _____.", options: ["zwei", "keine", "viele"], answer: 0 },
    { question: "Ich verstehe nur Bahnhof bedeutet _____.", options: ["Ich bin müde", "Ich verstehe nichts", "Ich bin glücklich"], answer: 1 },
    { question: "Übung macht _____.", options: ["Spaß", "Meister", "Arbeit"], answer: 1 }

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
    if (percentage <= 20) return "A1 - Anfänger";
    if (percentage <= 40) return "A2 - Grundstufe";
    if (percentage <= 60) return "B1 - Mittelstufe";
    if (percentage <= 80) return "B2 - Fortgeschritten";
    return "C1 - Professionell";
  };

  return (
    <section className="section-default">
      <div className="test-card">

        <h2>📘 Deutsch Einstufungstest</h2>

        {!finished ? (
          <>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${(current / questions.length) * 100}%` }}
              ></div>
            </div>

            <p style={{ textAlign: "center", marginTop: "15px" }}>
              Frage {current + 1} / {questions.length}
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
            <h3 style={{ textAlign: "center" }}>🎉 Endergebnis</h3>

            <div className="result-box">
              <p><strong>Punkte:</strong> {score} / {questions.length}</p>
              <p><strong>Prozent:</strong> {percentage}%</p>

              <h2 style={{ color: "var(--primary)", marginTop: "15px" }}>
                Geschätztes Niveau: {getLevel()}
              </h2>
            </div>

            <div className="marketing-message">
              <h3>🚀 Verbessern Sie Ihr Deutsch mit Hashtag Academy</h3>

              <p>
                Ihr Test zeigt Ihr aktuelles Niveau.
                Bei <strong>Hashtag Academy</strong> helfen wir Ihnen,
                dieses Niveau in professionelle, zertifizierte Sprachkompetenz zu verwandeln.
              </p>

              <ul>
                <li>✔ Strukturierter Lernplan</li>
                <li>✔ Vorbereitung auf offizielle Prüfungen</li>
                <li>✔ Moderne interaktive Methode</li>
                <li>✔ Persönliche Betreuung</li>
              </ul>

              <p className="marketing-highlight">
                🎓 Investieren Sie heute in Ihre internationale Zukunft.
              </p>
            </div>

            <div style={{ textAlign: "center", marginTop: "25px" }}>
              <Link to="/#reservation">
                <button className="whatsapp-btn">
                  Jetzt Deutschkurs buchen
                </button>
              </Link>
            </div>
          </>
        )}

      </div>
    </section>
  );
}

export default TestAllemand;