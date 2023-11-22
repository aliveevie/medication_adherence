// SignupForm.js
import React, { useState } from 'react';
import '../styles/AuthForm.css';

const PatientSignUp = () => {
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
    console.log('Signup Data:', signupData);
  };
  

  return (
    <form className="auth-form" onSubmit={handleSubmit} method='post' action='/'>
      <h2>Welcome to MedEase</h2>
      <p>Create your Account</p>
      <label>
        first name
        <input
          type="text"
          name="name"
          value={signupData.firstName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        last name
        <input
          type="text"
          name="name"
          value={signupData.lastName}
          onChange={handleChange}
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
          placeholder='Email Address'
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={signupData.password}
          onChange={handleChange}
          placeholder='8 character'
          required
        />
        <i className='fa fas-padlock' ></i>
      </label>
      <input 
      type='checkbox'
      />
      remember password
      <button type="submit">Create Account</button>
      <div className='or' >or</div>
    <div className='google-signup' >
        <a href='#' >Sign up With Google</a>
    </div>
    <div className='terms' >
        <p>By clicking on “create account” you agree to MedEase 
            <a href='/' > terms and conditions</a>
        </p>
    </div>
    <div className='already' >
        <p>Already have an account?  
            <a href='/' >SignIn</a>
        </p>
    </div>
    </form>
  );
};

export default PatientSignUp ;