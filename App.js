import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ModulesList from "./pages/ModulesList";
import ModuleDetail from "./pages/ModuleDetail";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Accueil</Link> | <Link to="/modules">Modules</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div>Bienvenue sur l'application des Proverbes ! <Link to="/modules">Commencer</Link></div>} />
        <Route path="/modules" element={<ModulesList />} />
        <Route path="/modules/:id" element={<ModuleDetail />} />
      </Routes>
    </Router>
  );
}

export default App;