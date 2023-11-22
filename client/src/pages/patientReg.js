// SignupForm.js
import React, { useState } from 'react';
import '../styles/AuthForm.css';
import logo from '../icons/logo.svg';
import PatientLogin from './patientLogin';
import Confirmation from './confimationLink';

const PatientSignUp = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

 function handleLogin(){
      setShowLogin(true)
 }

 function handleConfirmation(){
    setConfirmation(true)
 }

  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
    setShowLogin(true);
  };



  return (
    <>
        {!showLogin && !confirmation && (
      <form className="auth-form" onSubmit={handleSubmit} method="post" action="/">
      <img src={logo} alt="logo" />
      <div className='form-header' >
          <h2>Welcome to MedEase</h2>
          <p>Create your Account</p>
      </div>
     
      <label>
        First Name
        <input
          type="text"
          name="firstName"
          value={signupData.firstName}
          placeholder='First Name'
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Last Name
        <input
          type="text"
          name="lastName"
          value={signupData.lastName}
          onChange={handleChange}
          placeholder='Last Name'
          required
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={signupData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
      </label>
      <label>
        Password
        <div className="password-input">
          <input
            type="password"
            name="password"
            value={signupData.password}
            onChange={handleChange}
            placeholder="8 characters"
            required
          />
        </div>
      </label>
      <div className="checkbox-container">
        <input type="checkbox" /><span>Remember Password</span>
      </div>
      <button type="submit" onClick={handleConfirmation} >Create Account</button>
      <div className="or-divider">
        <hr />
        <span className="or-text">or</span>
        <hr />
      </div>
      <div className="google-signup">
        <i className="fab fa-google"></i>
        <a href="/">Sign up With Google</a>
      </div>
      <div className="terms">
        <p>
          By clicking on “create account” you agree to MedEase{' '}
          <a href="/">terms and conditions</a>
        </p>
      </div>
      <div className="already">
        <p>
            Already have an account? <a href="#" onClick={handleLogin} >SignIn</a>
        </p>
      </div>
    </form>
    )}

    {showLogin && !confirmation && <PatientLogin />}

    {confirmation && <Confirmation />}


    </>
    

   
  );
};

export default PatientSignUp;
