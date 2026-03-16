import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./components/Home";
import FormationDetails from "./components/FormationDetails";
import LangueDetails from "./components/LangueDetails";
import TestEnglish from "./components/TestEnglish";
import TestEspagnol from "./components/TestEspagnol";
import TestAllemand from "./components/TestAllemand";
import TestItalien from "./components/TestItalien";
import TestFrancais from "./components/TestFrancais";
import Footer from "./components/Footer";
import Admin from "./components/Admin";
import AdminLogin from "./components/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <Router>

      <ScrollToTop />
      <ScrollToHash />

      {/* NAVBAR */}

      <nav className="navbar">

        <Link to={{ pathname: "/", hash: "#accueil" }} className="logo">
          <img src="/logo.webp" alt="logo" />
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

          <Link to={{ pathname: "/", hash: "#accueil" }} onClick={() => setMenuOpen(false)}>Accueil</Link>

          <Link to={{ pathname: "/", hash: "#apropos" }} onClick={() => setMenuOpen(false)}>À propos</Link>

          <Link to={{ pathname: "/", hash: "#formations" }} onClick={() => setMenuOpen(false)}>Formations</Link>

          <Link to={{ pathname: "/", hash: "#langues" }} onClick={() => setMenuOpen(false)}>Langues</Link>

          <Link to={{ pathname: "/", hash: "#contact" }} onClick={() => setMenuOpen(false)}>Contact</Link>

          <Link
            to={{ pathname: "/", hash: "#reservation" }}
            className="btn-inscription"
            onClick={() => setMenuOpen(false)}
          >
            Réservation
          </Link>

        </div>

      </nav>

      {/* OVERLAY */}

      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>
      )}

      {/* ROUTES */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formations/:nom" element={<FormationDetails />} />
        <Route path="/langues/:nom" element={<LangueDetails />} />
        <Route path="/test/francais" element={<TestFrancais />} />
        <Route path="/test/english" element={<TestEnglish />} />
        <Route path="/test/espagnol" element={<TestEspagnol />} />
        <Route path="/test/allemand" element={<TestAllemand />} />
        <Route path="/test/italien" element={<TestItalien />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

      </Routes>

      <Footer />

    </Router>
  );
}

export default App;