// SignupForm.js
import React, { useState } from 'react';
import '../styles/AuthForm.css';
import logo from '../icons/logo.svg';
// import ResetLink from './resetlink';
import NewPassword from './newPassword';

const ResetVerification = () => {
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
    setLink(true)
  };

  const [link, setLink] = useState(false);


  return (
    <>
      {!link && (
         <form className="auth-form" onSubmit={handleSubmit} method="post" action="/">
         <img src={logo} alt="logo" />
         <div className='form-header' >
             <h2>Let’s reset your password</h2>
             <p>A verification link
               will be sent to your email to help you reset your password
           </p>
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
   
         <button type="submit">Reset Password</button>
       </form>
      )}

      {link && <NewPassword /> }
    </>
   
  );
};


export default ResetVerification;