import React, { useState } from 'react';
import '../styles/patient.css'
import logo from '../icons/logo2.svg'

export default function Patient() {
 
  return (
    <div className='patient' >
      <img src={logo} alt="Logo" />
      <div className='button-class' >
        <button className='buttons' >
           I'm a patient 
        </button>
        <button className='buttons' >
           I'm a Doctor 
        </button>
      </div>
    </div>
  );
}