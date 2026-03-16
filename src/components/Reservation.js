import { useState, useEffect } from "react";
import formationsData from "./formationsData";
import PhoneInput from "react-phone-input-2";
import { useLocation } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import "./Reservation.css";

const formations = Object.keys(formationsData).map(
  key => key.charAt(0).toUpperCase() + key.slice(1)
);

const langues = [
  "Français",
  "English",
  "Espagnol",
  "Allemand"
];

function Reservation() {

  const location = useLocation();

  const [userType, setUserType] = useState("student");

  const [typeChoix, setTypeChoix] = useState("");
  const [choixFinal, setChoixFinal] = useState("");

  useEffect(() => {
    if (location.state?.formation) {
      setUserType("student");
      setTypeChoix("formation");
      setChoixFinal(location.state.formation);
    }
  }, [location]);

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "+212",
    ville: "",
    specialite: "",
    experience: "",
    cv: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      cv: e.target.files[0]
    });
  };

  // ========================
  // STUDENT SUBMIT WHATSAPP
  // ========================

 const handleStudentSubmit = async (e) => {

  e.preventDefault();

  try {

    await axios.post("https://hashtag-academy-backend.onrender.com/api/reservations", {

      nom: formData.nom,
      prenom: formData.prenom,
      email: formData.email,
      telephone: formData.telephone,
      ville: formData.ville,
      programme: choixFinal,
      type: typeChoix

    });

    console.log("Reservation saved in database");

  } catch (err) {

    console.error(err);

  }

  // ===== WHATSAPP =====

  const now = new Date();
  const date = now.toLocaleDateString("fr-FR");
  const heure = now.toLocaleTimeString("fr-FR");

  const message = `
📌 NOUVELLE INSCRIPTION

Date : ${date}
Heure : ${heure}

Nom : ${formData.nom}
Prénom : ${formData.prenom}
Email : ${formData.email}
Téléphone : ${formData.telephone}
Ville : ${formData.ville}

Programme : ${choixFinal}
`;

  const numeroWhatsApp = "212620360395";

  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");

};

  // ========================
  // FORMATEUR SUBMIT
  // ========================

  const handleTeacherSubmit = async (e) => {

  e.preventDefault();

  try {

    const formDataToSend = new FormData();

    formDataToSend.append("nom", formData.nom);
    formDataToSend.append("prenom", formData.prenom);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("telephone", formData.telephone);
    formDataToSend.append("specialite", formData.specialite);
    formDataToSend.append("experience", formData.experience);
    formDataToSend.append("cv", formData.cv);

    await axios.post(
      "https://hashtag-academy-backend.onrender.com/api/teachers",
      formDataToSend,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );

    alert("Candidature envoyée !");

  } catch (err) {

    console.error(err);

  }

};

  return (

    <div className="reservation-container">

      {/* SWITCH BUTTON */}

      <div className="reservation-switch">

        <button
          className={userType === "student" ? "active" : ""}
          onClick={() => setUserType("student")}
        >
          🎓 Je veux apprendre
        </button>

        <button
          className={userType === "teacher" ? "active" : ""}
          onClick={() => setUserType("teacher")}
        >
          👨‍🏫 Devenir formateur
        </button>

      </div>

      {/* ===================== */}
      {/* STUDENT FORM */}
      {/* ===================== */}

      {userType === "student" && (

        <div className="card reservation-card">

          <h2>Réserver une formation</h2>

          <form onSubmit={handleStudentSubmit} className="reservation-form">

            <input
              type="text"
              name="nom"
              placeholder="Nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="prenom"
              placeholder="Prénom"
              value={formData.prenom}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <PhoneInput
              country={"ma"}
              value={formData.telephone}
              onChange={(phone) =>
                setFormData({ ...formData, telephone: phone })
              }
            />

            <input
              type="text"
              name="ville"
              placeholder="Ville"
              value={formData.ville}
              onChange={handleChange}
              required
            />

            <select
              value={typeChoix}
              onChange={(e) => {
                setTypeChoix(e.target.value);
                setChoixFinal("");
              }}
              required
            >

              <option value="">Choisir</option>
              <option value="formation">Formation</option>
              <option value="langue">Langue</option>

            </select>

            {typeChoix === "formation" && (

              <select
                value={choixFinal}
                onChange={(e) => setChoixFinal(e.target.value)}
                required
              >

                <option value="">Sélectionner formation</option>

                {formations.map((item, index) => (

                  <option key={index} value={item}>
                    {item}
                  </option>

                ))}

              </select>

            )}

            {typeChoix === "langue" && (

              <select
                value={choixFinal}
                onChange={(e) => setChoixFinal(e.target.value)}
                required
              >

                <option value="">Sélectionner langue</option>

                {langues.map((item, index) => (

                  <option key={index} value={item}>
                    {item}
                  </option>

                ))}

              </select>

            )}

            <button type="submit" className="my-whatsapp-btn">

              Réserver sur WhatsApp

            </button>

          </form>

        </div>

      )}

      {/* ===================== */}
      {/* TEACHER FORM */}
      {/* ===================== */}

      {userType === "teacher" && (

        <div className="card reservation-card">

          <h2>Devenir formateur</h2>

          <form
            onSubmit={handleTeacherSubmit}
            className="reservation-form"
          >

            <input
              type="text"
              name="nom"
              placeholder="Nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="prenom"
              placeholder="Prénom"
              value={formData.prenom}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <PhoneInput
              country={"ma"}
              value={formData.telephone}
              onChange={(phone) =>
                setFormData({ ...formData, telephone: phone })
              }
            />

            <input
              type="text"
              name="specialite"
              placeholder="Votre spécialité"
              value={formData.specialite}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="experience"
              placeholder="Années d'expérience"
              value={formData.experience}
              onChange={handleChange}
              required
            />

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
            />

            <button type="submit" className="teacher-btn">

              Envoyer ma candidature

            </button>

          </form>

        </div>

      )}

    </div>

  );

}

export default Reservation;