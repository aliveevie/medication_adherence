// SignupForm.js
import React, { useState } from 'react';
import '../styles/AuthForm.css';
import logo from '../icons/logo.svg';
import Congratulations from './congratulation';


const NewPassword = () => {
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
              <p>A Few More Steps to Go!
            </p>
          </div> 
          <label>
            New Password
            <input
              type="password"
              name="password"
              value={signupData.name}
              onChange={handleChange}
              placeholder="New Password"
              required
            />
          </label>
          <label>
            Confirm Password
            <input
              type="password"
              name="password"
              value={signupData.name}
              onChange={handleChange}
              placeholder="Confirm Password"
              onSubmit={handleSubmit}
              required
            />
          </label>
          <button type="submit">Reset Password</button>
        </form>
    )}
       {link && <Congratulations /> }
    </>
   
  );
};

export default NewPassword;