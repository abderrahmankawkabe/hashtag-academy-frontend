import { useState } from "react";
import { Link } from "react-router-dom";
import "./TestLangues.css";


function TestFrancais() {

  const questions = [

    // 1. Complète
    { question: "Elle a __________ le film hier.", options: ["vu", "vue"], answer: 0 },
    { question: "Nous sommes __________ à midi.", options: ["arrivé", "arrivés"], answer: 1 },
    { question: "Il n’y a pas __________ eau.", options: ["de", "d’"], answer: 1 },
    { question: "Les filles sont très __________.", options: ["intelligent", "intelligentes"], answer: 1 },
    { question: "J’ai __________ travail.", options: ["beaucoup de", "beaucoup"], answer: 0 },

    // 2. Choisis la bonne réponse
    { question: "Hier, elle ___ au marché.", options: ["va", "est allée", "allait"], answer: 1 },
    { question: "Il faut que tu ___ plus tôt.", options: ["viens", "viennes", "viendras"], answer: 1 },
    { question: "Je ne comprends pas ___ tu veux dire.", options: ["ce que", "ce qui", "que"], answer: 0 },
    { question: "Il faut _______ plus de légumes.", options: ["manger", "mangé", "mangerais"], answer: 0 },
    { question: "Si j’avais de l’argent, je _______ un voyage.", options: ["ferai", "ferais", "fait"], answer: 1 },

    // 3. Proverbes
    { question: "Les apparences sont parfois __________.", options: ["dangereuses", "trompeuses"], answer: 1 },
    { question: "Après la pluie, le __________ temps.", options: ["beau", "bon"], answer: 0 },
    { question: "Loin des yeux, loin du __________.", options: ["cœur", "regard"], answer: 0 },
    { question: "Qui sème le vent récolte la __________.", options: ["colère", "tempête"], answer: 1 },
    { question: "Il ne faut pas vendre la peau de l’ours avant de l’avoir __________.", options: ["attrapé", "chassé"], answer: 0 },
    { question: "Les murs ont des __________.", options: ["oreilles", "yeux"], answer: 0 },
    { question: "Tel père, tel __________.", options: ["frère", "fils"], answer: 1 },

    // 4. a / à - et / est
    { question: "Il ___ mangé trop vite.", options: ["a", "à"], answer: 0 },
    { question: "Elle aime le thé ___ le café.", options: ["et", "est"], answer: 0 },
    { question: "Elle ___ un frère.", options: ["a", "à"], answer: 0 },
    { question: "Nous sommes ___ la maison.", options: ["a", "à"], answer: 1 },
    { question: "Il ___ gentil.", options: ["est", "et"], answer: 0 },
    { question: "C’___ une bonne idée.", options: ["est", "et"], answer: 0 },

    // 5. y / en
    { question: "Tu vas à la bibliothèque ? → Oui, j’___ vais.", options: ["y", "en"], answer: 0 },
    { question: "Tu prends du café ? → Oui, j’___ prends une tasse.", options: ["y", "en"], answer: 1 },
    { question: "J’ai parlé de mon projet à mon professeur → J’___ ai parlé hier.", options: ["y", "en"], answer: 1 }

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
    if (percentage <= 20) return "A1 - Débutant";
    if (percentage <= 40) return "A2 - Élémentaire";
    if (percentage <= 60) return "B1 - Intermédiaire";
    if (percentage <= 80) return "B2 - Avancé";
    return "C1 - Professionnel";
  };

  return (
    <section className="section-default">
      <div className="test-card">

        <h2>📘 Test de Niveau Français</h2>

        {!finished ? (
          <>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${(current / questions.length) * 100}%` }}
              ></div>
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
            <h3 style={{ textAlign: "center" }}>🎉 Résultat Final</h3>

            <div className="result-box">
              <p><strong>Score :</strong> {score} / {questions.length}</p>
              <p><strong>Pourcentage :</strong> {percentage}%</p>

              <h2 style={{ color: "var(--primary)", marginTop: "15px" }}>
                Niveau estimé : {getLevel()}
              </h2>
            </div>

            <div className="marketing-message">
              <h3>🚀 Passez au niveau supérieur avec Hashtag Académie</h3>

              <p>
                Votre test révèle votre niveau actuel.
                Chez <strong>Hashtag Académie</strong>, nous vous aidons à transformer
                ce niveau en véritable compétence certifiée.
              </p>

              <p>
                Grâce à nos formateurs expérimentés, notre méthode structurée
                et notre accompagnement personnalisé, vous progressez
                rapidement vers la maîtrise professionnelle du français.
              </p>

              <ul>
                <li>✔ Formation adaptée à votre niveau</li>
                <li>✔ Préparation aux certifications officielles</li>
                <li>✔ Méthode moderne et interactive</li>
                <li>✔ Suivi pédagogique personnalisé</li>
              </ul>

              <p className="marketing-highlight">
                🎓 Investissez dans votre avenir académique et professionnel dès aujourd’hui.
              </p>
            </div>

            <div style={{ textAlign: "center", marginTop: "25px" }}>
              <Link to="/#reservation">
                <button className="whatsapp-btn">
                  Réserver Ma Formation Maintenant
                </button>
              </Link>
            </div>
          </>
        )}

      </div>
    </section>
  );
}

export default TestFrancais;