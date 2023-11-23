// SignupForm.js
import React, { useState } from 'react';
import '../styles/AuthForm.css';
import logo from '../icons/logo.svg';
import PatientSignUp from './patientReg';
import ResetVerification from './verificationLink';
import Dashboard from './dashboard';

const PatientLogin = (props) => {

  const { api2 } = props;

  const [error, setError] = useState('');
  const [dashboard, setDashboard] = useState(false);

  const [signup, setSignUp] = useState(false);
  const [reset, setReset] = useState(false);


  const [signupData, setSignupData] = useState({
    email: ''
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

      if(responseData.Error=='Success'){
        setDashboard(true)
        setSignUp(false);
      }
  
      // Depending on your API response, you can handle success or show a confirmation message
     
     
    } catch (error) {
      console.error('Error:', error.message);
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

  return (
   <>
   {!signup && !reset && (
     <form className="auth-form" onSubmit={handleSubmit} method="post">
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
       <a href='#' onClick={handleReset} >Forgot Password</a>
     </div>
       <div className='error'>{error}</div>
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
   )}

    {signup && !reset && <PatientSignUp /> }

    {!signup && reset && <ResetVerification />}

    {dashboard && !signup  && <Dashboard /> }



   </>
  );
};


export default PatientLogin;