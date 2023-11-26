import React, { useState } from "react";
import "../styles/PasswordInput.css";
import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";

const PasswordInput2 = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-input-container">
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="password-input"
        placeholder="8 characters"
      />
      <button
        type="button"
        onClick={handleTogglePassword}
        className="toggle-password-button"
        style={{top: '64%'}}
      >
        {showPassword ? <FaLockOpen /> : <FaLock />}
      </button>
    </div>
  );
};

export default PasswordInput2;
