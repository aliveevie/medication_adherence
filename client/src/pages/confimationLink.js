// SignupForm.js
import React, { useState } from 'react';
import '../styles/AuthForm.css';
import logo from '../icons/logo.svg';
import link from '../icons/link.svg';

const Confirmation = () => {
  
  return (
    <form className="auth-form" method="post" action="/">
      <img src={logo} alt="logo" />
      <div className='form-header' >
          <h2>Let’s verify your email</h2>
        <p>
            A verification link was sent to your email
        </p>
      </div>
      <img 
      src={link} alt='Verfication Link Icon'
      />
    </form>
  );
};

export default Confirmation;