import React, { useState } from "react";
import "../styles/PasswordInput.css";
import { FaLock, FaLockOpen } from "react-icons/fa";

const PasswordInput = () => {
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
      >
        {showPassword ? <FaLockOpen /> : <FaLock />}
      </button>
    </div>
  );
};

export default PasswordInput;
