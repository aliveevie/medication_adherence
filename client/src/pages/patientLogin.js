// SignupForm.js
import React, { useState } from 'react';
import '../styles/AuthForm.css';
import logo from '../icons/logo.svg';
import PatientSignUp from './patientReg';

const PatientLogin = () => {
  const [signupData, setSignupData] = useState({
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
    
  };

  const [signup, showSignUp] = useState(false);

  function handleShowSignUp(){
          showSignUp(true)
  }

  return (
    !signup ? (
      <form className="auth-form" onSubmit={handleSubmit} method="post" action="/">
      <img src={logo} alt="logo" />
      <div className='form-header' >
          <h2>Welcome to MedEase</h2>
          <p>Sign In</p>
      </div>
  
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
        <a href='/' >Forgot Password</a>
      </div>
      <button type="submit">Sign</button>
      <div className="or-divider">
        <hr />
        <span className="or-text">or</span>
        <hr />
      </div>
      <div className="google-signup">
        <i className="fab fa-google"></i>
        <a href="/">Sign In With Google</a>
      </div>
      <div className="terms">
        <p>
          By clicking on “create account” you agree to MedEase{' '}
          <a href="/">terms and conditions</a>
        </p>
      </div>
      <div className="already">
        <p>
          Not have an Account <a href="#" onClick={handleShowSignUp} >SignUp</a>
        </p>
      </div>
    </form>
    ) : <PatientSignUp />

   
  );
};

export default PatientLogin;