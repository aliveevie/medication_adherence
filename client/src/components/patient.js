import React, { useState } from "react";
import "../styles/patient.css";
import logo from "../icons/logo.png";
import PatientSignUp from "../pages/patientReg";
import DoctorSignUp from "../pages/doctorSign";

export default function Patient() {
  const [showPatient, setShowPatient] = useState(false);
  const [showDoctor, setShowDoctor] = useState(true);
  const [api, setApi] = useState("");
  const [api2, setApi2] = useState("");
  const [doctor, setDoctor] = useState('');

  const handlePatientRegister = () => {
    setShowPatient(true);
    setApi("/api/patient/register");
    setApi2("/api/patient/login");
  };

  function handleDoctorRegister() {
    setShowDoctor(false);
    setApi("/api/doctor/register");
    setApi2("/api/doctor/login");
    setDoctor('doctor')
  }

  return (
    <>
      {!showPatient && showDoctor && (
        <div className="patient">
          <div className="logo">
            <img src={logo} alt="Logo" width={40} height={40} />
            <h3>MedEase</h3>
          </div>
          <div className="button-class">
            <button className="buttons" onClick={handlePatientRegister}>
              Patient
            </button>
            <button className="buttons" onClick={handleDoctorRegister}>
              Doctor
            </button>
          </div>
        </div>
      )}

      {showPatient && <PatientSignUp api={api} api2={api2} />}

      {!showDoctor && <DoctorSignUp api={api} api2={api2} doctor={doctor}  />}

     
    </>
  );
}
