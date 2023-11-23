// SignupForm.js
import React, { useState } from 'react';
import '../styles/AuthForm.css';
import logo from '../icons/logo.svg';
import link from '../icons/link.svg';

const Dashboard = (props) => {
  const { name } = props;
  
  return (
    <form className="auth-form" method="post" action="/">
      <img src={logo} alt="logo" />
      <div className='form-header' >
          <h2>Hello, Welcome to your Dashboard</h2>
        <p>
            Please Manage your Dashboard Here!
        </p>
      </div>
      <img 
      src={link} alt='Verfication Link Icon'
      />
      <button >Continue</button>
    </form>
  );
};

export default Dashboard;