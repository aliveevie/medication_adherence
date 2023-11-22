import React, { useState } from 'react';
import '../styles/patient.css'
import logo from '../icons/logo2.svg'
import PatientSignUp from '../pages/patientReg';

export default function Patient() {

  const [showPatient, setShowPatient] = useState(false);
  const handlePatientRegister = () => {
    setShowPatient(true)
  }
  
 
  return (
    !showPatient ? (
      <div className='patient' >
      <img src={logo} alt="Logo" />
      <div className='button-class' >
        <button className='buttons' 
        onClick={handlePatientRegister}
        >
           I'm a patient 
        </button>
        <button className='buttons' >
           I'm a Doctor 
        </button>
      </div>
     
    </div>
    ) :  <PatientSignUp />
    
  );
}