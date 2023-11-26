import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduction from "./components/introduction";
import PatientLogin from "./pages/patientLogin";
import PatientSignUp from "./pages/patientReg";
import Confirmation from "./pages/confimationLink";
import DoctorLogin from "./pages/doctorlogin";
import SignUp from "./pages/signup";
import NewPassword from "./pages/newPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/login" element={<PatientLogin />} />
        <Route path="/signup" element={<PatientSignUp />} />
        <Route path="/verify" element={<Confirmation />} />
        <Route path="/doctorlogin" element={<DoctorLogin />}/>
        <Route path="/doctorsignup" element={<SignUp />} />
        <Route path="/newpassword" element={<NewPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
