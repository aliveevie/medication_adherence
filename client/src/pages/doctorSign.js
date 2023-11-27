// SignupForm.js
import React, { useState } from 'react';
import '../styles/AuthForm.css';
import logo from '../icons/logo.svg';
import Dashboard from './dashboard';
import DoctorDashboard from './doctorDashboard';
import DoctorLogin from './doctorlogin';


const DoctorSignUp = (props) => {

  const { api, api2, doctor } = props;

  const [showLogin, setShowLogin] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [id, setId] = useState('');


  function handleLogin() {
      setShowLogin(true);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(api, {
        method: 'POST', // or 'PUT' or 'PATCH' depending on your API
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers required by your API
        },
        body: JSON.stringify(signupData),
      });
      
      if (!response.ok) {
        // Handle error responses from the server
        console.error('Error:', response.statusText);
        // Optionally show an error message to the user
      
        return;
      }
  
      const responseData = await response.json();
     
      setError(responseData.Error)
      if(responseData.name){
          setName(responseData.name);
          setDashboard(true);
          setEmail(responseData.email);
          setId(responseData.patient_id);
      }

      
      // Depending on your API response, you can handle success or show a confirmation message
     // setShowLogin(true);
     
    } catch (error) {
      console.error('Error:', error.message);
      // Handle other errors, such as network errors
      // Optionally show an error message to the user
    }
  };
  

   

  return (
    <>
        {!showLogin && !dashboard &&  (
      <form className="auth-form" onSubmit={handleSubmit} method="post" 
      >
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

      <button type="submit" >Create Account</button>
      <div>{error}</div>
     
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

      {!showLogin && dashboard && 
      <DoctorDashboard 
        name={name} 
        email={email} id={id} 
        api={api}
        api2={api2}
        doctor={doctor}
      />}

      {showLogin && !dashboard && 
      <DoctorLogin 
          name={name} 
          email={email} id={id} 
          api={api}
          api2={api2}
          doctor={doctor}
      />
      }

    </>
  );
};


export default DoctorSignUp;