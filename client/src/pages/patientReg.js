// SignupForm.js
import React, { useState } from "react";
import "../styles/AuthForm.css";
import logo from "../icons/logo2.png";
import PatientLogin from "./patientLogin";
import Confirmation from "./confimationLink";
import google from '../icons/google.png'


const PatientSignUp = (props) => {

  const { api, api2 } = props;
  console.log(api, api2);
  const [showLogin, setShowLogin] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  function handleLogin() {
    setShowLogin(true);
  }

  function handleConfirmation() {
    setConfirmation(true);
  }

  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
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
    setConfirmation(true);
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
      {!showLogin && !confirmation && (
        <form
          className="auth-form"
          onSubmit={handleSubmit}
          method="post"
          
      
        >
          <div className="logo">
            <img src={logo} alt="logo" width={40} height={40} />
            <h3 style={{ color: "#0E9061" }}>
              Med<span style={{ color: "#000000" }}>Ease</span>
            </h3>
          </div>
          <div className="form-header">
            <h2>Welcome to MedEase</h2>
            <p>Create your Account</p>
          </div>

          <label>
            First Name
            <input
              type="text"
              name="firstName"
              value={signupData.firstName}
              placeholder="First Name"
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
              placeholder="Last Name"
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
            <input type="checkbox" />
            <span>Remember Password</span>
          </div>

          <button type="submit">
            Create Account
          </button>
          
          <div className="or-divider">
            <hr />
          <span className="or-text">or</span>
            <hr />
          </div>
          <div className="google-signup">
            <img src={google} width={20} height={20} alt="google" />
            <a href="/">Sign up With Google</a>
          </div>
          <div className="login">
            <p>
              By clicking on “create account” you agree to MedEase <br/>
              <a href="/">terms and conditions</a>
            </p>
            <p>
              Already have an account?{" "}
              <a href="#" onClick={handleLogin}>
                Sign In
              </a>
            </p>
          </div>
         
        </form>
      )}

      {showLogin && !confirmation && <PatientLogin  api2={api2} />}

    {confirmation && <Confirmation />}

    </>
  );
};

export default PatientSignUp;