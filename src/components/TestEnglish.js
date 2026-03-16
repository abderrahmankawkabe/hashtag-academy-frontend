import { useState } from "react";
import { Link } from "react-router-dom";
import "./TestLangues.css";

function TestEnglish() {

  const questions = [

    // 1. Grammar
    { question: "She _____ to school every day.", options: ["go", "goes", "going"], answer: 1 },
    { question: "They have lived here _____ 2015.", options: ["since", "for", "from"], answer: 0 },
    { question: "If I _____ rich, I would travel the world.", options: ["am", "was", "were"], answer: 2 },
    { question: "There isn’t _____ milk in the fridge.", options: ["some", "any", "many"], answer: 1 },
    { question: "He is the _____ student in the class.", options: ["smart", "smarter", "smartest"], answer: 2 },

    // 2. Vocabulary
    { question: "I’m looking forward _____ you soon.", options: ["to see", "to seeing", "see"], answer: 1 },
    { question: "She apologized _____ being late.", options: ["for", "about", "to"], answer: 0 },
    { question: "The opposite of 'cheap' is _____.", options: ["expensive", "small", "weak"], answer: 0 },
    { question: "He works _____ a multinational company.", options: ["in", "at", "on"], answer: 1 },
    { question: "I don’t have _____ time today.", options: ["much", "many", "a lot"], answer: 0 },

    // 3. Expressions
    { question: "Break a leg means _____.", options: ["Good luck", "Be careful", "Stop"], answer: 0 },
    { question: "It’s raining cats and dogs means _____.", options: ["Very cold", "Very sunny", "Raining heavily"], answer: 2 },
    { question: "Better late than _____.", options: ["sorry", "never", "before"], answer: 1 },

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
    if (percentage <= 20) return "A1 - Beginner";
    if (percentage <= 40) return "A2 - Elementary";
    if (percentage <= 60) return "B1 - Intermediate";
    if (percentage <= 80) return "B2 - Upper-Intermediate";
    return "C1 - Advanced";
  };

  return (
    <section className="section-default">
      <div className="test-card">

        <h2>📘 English Level Test</h2>

        {!finished ? (
          <>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${(current / questions.length) * 100}%` }} ></div>
            </div>

            <p style={{ textAlign: "center", marginTop: "15px" }}>
              Question {current + 1} / {questions.length}
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
            <h3 style={{ textAlign: "center" }}>🎉 Final Result</h3>

            <div className="result-box">
              <p><strong>Score:</strong> {score} / {questions.length}</p>
              <p><strong>Percentage:</strong> {percentage}%</p>

              <h2 style={{ color: "var(--primary)", marginTop: "15px" }}>
                Estimated Level: {getLevel()}
              </h2>
            </div>

            <div className="marketing-message">
              <h3>🚀 Upgrade Your English with Hashtag Academy</h3>

              <p>
                Your test shows your current level.
                At <strong>Hashtag Academy</strong>, we help you transform
                this level into certified professional English skills.
              </p>

              <ul>
                <li>✔ Structured learning program</li>
                <li>✔ International exam preparation</li>
                <li>✔ Modern interactive method</li>
                <li>✔ Personalized academic support</li>
              </ul>

              <p className="marketing-highlight">
                🎓 Invest in your international future today 🎓
              </p>
            </div>

            <div style={{ textAlign: "center", marginTop: "25px" }}>
              <Link to="/#reservation">
                <button className="whatsapp-btn">
                  Book Your English Course Now
                </button>
              </Link>
            </div>
          </>
        )}

      </div>
    </section>
  );
}

export default TestEnglish;