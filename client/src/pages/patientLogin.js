// SignupForm.js
import React, { useState } from "react";
import "../styles/AuthForm.css";
import { Link } from "react-router-dom";
import logo from "../icons/logo2.png";
import PatientSignUp from "./patientReg";
import google from "../icons/google.png";
import ResetVerification from "./verificationLink";
import Dashboard from "./dashboard";
import { FaLock, FaLockOpen } from "react-icons/fa";

const PatientLogin = (props) => {
  const { api2 } = props;

  const [error, setError] = useState("");
  const [dashboard, setDashboard] = useState(false);
  const [signup, setSignUp] = useState(false);
  const [reset, setReset] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [signupData, setSignupData] = useState({
    email: "",
    password: ""
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
      const response = await fetch(api2, {
        method: "POST", // or 'PUT' or 'PATCH' depending on your API
        headers: {
          "Content-Type": "application/json",
          // Add any other headers required by your API
        },
        body: JSON.stringify(signupData),
      });

      if (!response.ok) {
        // Handle error responses from the server
        console.error("Error:", response.statusText);
        // Optionally show an error message to the user

        return;
      }

      const responseData = await response.json();
      
      setError(responseData.Error)
      if (responseData.name) {
        setDashboard(true);
        setSignUp(false);
        setName(responseData.name);
        setEmail(responseData.email);
        setId(responseData.patient_id);
}
      // Depending on your API response, you can handle success or show a confirmation message
    } catch (error) {
      console.error("Error:", error.message);
      // Handle other errors, such as network errors
      // Optionally show an error message to the user
    }
  };

  function handleShowSignUp(){
        setSignUp(true);
  }

 
  function handleReset(){
          setReset(true);
  }

  const [showPassword, setShowPassword] = useState("");
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
   <>
   {!signup && !reset && !dashboard && (
     <form className="auth-form" onSubmit={handleSubmit} method="post">
    <div className="logo">
            <img src={logo} alt="logo" width={40} height={40} />
            <h3 style={{ color: "#0E9061" }}>
              Med<span style={{ color: "#000000" }}>Ease</span>
            </h3>
          </div>
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
                type={showPassword ? "text" : "password"}
                name="password"
                value={signupData.password}
                onChange={handleChange}
                placeholder="8 characters"
                required
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="toggle-password-button"
                style={{ top: "53%" }}
              >
                {showPassword ? <FaLockOpen /> : <FaLock />}
              </button>
            </div>
     </label>
     <div className="checkbox-container2">
       <input type="checkbox" /><span>Remember Password</span>
       <a href='#' onClick={handleReset} >Forgot Password</a>
     </div>
       <div className='error'>{error}</div>
     <button type="submit"   >Sign</button>
     <div className="or-divider">
       <hr />
       <span className="or-text">or</span>
       <hr />
     </div>
     <div className="google-signup">
            <img src={google} width={20} height={20} alt="google" />
            <Link to="/">Sign up With Google</Link>
          </div>
          <div className="login">
            <p>
              By clicking on “create account” you agree to MedEase{" "}
              <Link to="/">terms and conditions</Link>
            </p>

            <p>
              Don't have an Account{" "}
              <Link to="#" onClick={handleShowSignUp}>
                Sign Up
              </Link>
            </p>
          </div>
   </form>
   )}

    {signup && !reset &&  !dashboard && <PatientSignUp /> }

    {!signup && reset &&  !dashboard && <ResetVerification />}

    {dashboard &&  !reset && !signup && <Dashboard  
      name={name} 
      email={email}  
      id={id} /> }

   </>
  );
};

export default PatientLogin;
