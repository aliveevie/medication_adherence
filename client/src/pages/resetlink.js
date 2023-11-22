// SignupForm.js
import React, { useState } from 'react';
import '../styles/AuthForm.css';
import logo from '../icons/logo.svg';
import link from '../icons/link.svg';


const ResetLink = () => {
  
  return (
    <form className="auth-form" method="post" action="/">
      <img src={logo} alt="logo" />
      <div className='form-header' >
          <h2>Let’s reset your password</h2>
        <p>
            Check your email a link was sent
        </p>
      </div>
      <img 
      src={link} alt='Verfication Link Icon'
      />
      <p>Didnt get any email</p>
      <button    >Resend</button>
    </form>
  );
};

export default ResetLink;