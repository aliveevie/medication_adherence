// SignupForm.js
import React, { useState } from 'react';
import '../styles/AuthForm.css';
import logo from '../icons/logo.svg';
import link from '../icons/link.svg';

const Congratulations = () => {
  
  return (
    <form className="auth-form" method="post" action="/">
      <img src={logo} alt="logo" />
      <div className='form-header' >
          <h2>Congratulations</h2>
        <p>
            Password Was Successifully Changed press continue 
            to proceed with the registration
        </p>
      </div>
      <img 
      src={link} alt='Verfication Link Icon'
      />
      <button >Continue</button>
    </form>
  );
};

export default Congratulations;