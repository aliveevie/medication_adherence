// SignupForm.js
import React, { useState } from 'react';
import '../styles/AuthForm.css';

const SignupForm = () => {
  const [signupData, setSignupData] = useState({
    name: '',
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
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={signupData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={signupData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={signupData.password}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;