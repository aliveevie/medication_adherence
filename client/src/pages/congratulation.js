// SignupForm.js
import React, { useState } from "react";
import "../styles/AuthForm.css";
import logo from "../icons/logo.svg";
import link from "../icons/link.svg";

const Congratulations = () => {
  return (
    <form
      className="auth-form"
      method="post"
      action="/login"
      style={{ textAlign: "center" }}
    >
      <div className="logo" style={{ marginBottom: "25%" }}>
        <img src={logo} alt="logo" width={40} height={40} />
        <h3 style={{ color: "#0E9061" }}>
          Med<span style={{ color: "#000000" }}>Ease</span>
        </h3>
      </div>
      <div className="header" style={{ marginBottom: "8%" }}>
        <h2 style={{ textAlign: "center" }}>Congratulations!</h2>
        <p style={{ textAlign: "center" }}>
          Password successfully changed! click on continue to proceed to login
          page
        </p>
      </div>
      <img src={link} alt="Verfication Link Icon" />
      <button style={{ marginTop: "10%" }}>Continue</button>
    </form>
  );
};

export default Congratulations;
