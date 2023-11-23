import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduction from "./components/introduction";
import PatientLogin from "./pages/patientLogin";
import PatientSignUp from "./pages/patientReg";
import Confirmation from "./pages/confimationLink";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/login" element={<PatientLogin />} />
        <Route path="/signup" element={<PatientSignUp />} />
        <Route path="/verify" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
