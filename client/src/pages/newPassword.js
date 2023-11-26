import React, { useState } from 'react';
import '../styles/AuthForm.css';
import logo from '../icons/logo2.png';
import Congratulations from './congratulation';
import PasswordInput from '../components/PasswordInput';
import PasswordInput2 from '../components/PasswordInput2';
// import PasswordRequirements from '../components/PasswordRequirements';

const NewPassword = () => {
  const [signupData, setSignupData] = useState({
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
    setLink(true);
  };

  const [link, setLink] = useState(false);

  return (
    <>
      {!link && (
        <form
          className="auth-form"
          onSubmit={handleSubmit}
          method="post"
          action="/login"
        >
          <div className="logo">
            <img src={logo} alt="logo" width={40} height={40} />
            <h3 style={{ color: '#0E9061' }}>
              Med<span style={{ color: '#000000' }}>Ease</span>
            </h3>
          </div>
          <div className="header">
            <h2>Let’s reset your password</h2>
            <p>A Few More Steps to Go!</p>
          </div>
          <label>
            New Password{' '}
            <span className="span">
              (must contain uppercase and a numeric character)
            </span>
            <PasswordInput
              type="password"
              name="password"
              value={signupData.password}
              onChange={handleChange}
              placeholder="8 characters"
              required
            />
          </label>
          {/* <PasswordRequirements password={signupData.password} /> */}
          <label>
            Confirm Password
            <PasswordInput2
              type="password"
              name="confirmPassword"
              value={signupData.confirmPassword}
              onChange={handleChange}
              placeholder="8 characters"
              required
            />
          </label>
          <button type="submit">Reset Password</button>
        </form>
      )}
      {link && <Congratulations />}
    </>
  );
};

export default NewPassword;
