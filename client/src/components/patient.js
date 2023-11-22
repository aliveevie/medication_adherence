import React, { useState } from 'react';
import '../styles/patient.css'
import logo from '../icons/logo2.svg'
import PatientSignUp from '../pages/patientReg';
import DoctorLogin from '../pages/doctorlogin';

export default function Patient() {

  const [showPatient, setShowPatient] = useState(false);
  const [showDoctor, setShowDoctor] = useState(false);
  const [api, setApi] = useState('');

  const handlePatientRegister = () => {
    setShowPatient(true);
    setApi('/api/patient/register');
  }

  function handleDoctorRegister(){
      setShowDoctor(true);
      setApi('/api/doctor/register');
  }

  
  return (

    <>
      {!showPatient &&  !showDoctor && (
      <div className='patient' >
      <img src={logo} alt="Logo" />
      <div className='button-class' >
        <button className='buttons' 
        onClick={handlePatientRegister}
        >
           I'm a patient 
        </button>
        <button className='buttons' 
        onClick={handleDoctorRegister}
        >
           I'm a Doctor 
        </button>
      </div>
     
    </div>
    )}

    {showPatient && <PatientSignUp api={api} /> }

    {showDoctor && <DoctorLogin  api={api} /> }

    </>
  
  );
}