// SignupForm.js
import React, { useState } from "react";
import "../styles/verify.css";
import logo from "../icons/logo2.png";
import ok from "../icons/ok.png";
import BackButton from "../components/BackButton";

const Confirmation = () => {
  return (
    <div className="verify">
      <div className="logo">
        <img src={logo} alt="logo" width={40} height={40} />
        <h3 style={{ color: "#0E9061" }}>
          Med<span style={{ color: "#000000" }}>Ease</span>
        </h3>
      </div>

      <div className="verify-body">
        <h2>Let’s verify your email</h2>
        <p>A verification link was sent to your email</p>
      </div>
      <img src={ok} alt="Verfication Link Icon" width={200} height={200} />

      <BackButton style={{width: '300px', backgroundColor: 'white', color: '#0E9061'}} />
    </div>
  );
};

export default Confirmation;
