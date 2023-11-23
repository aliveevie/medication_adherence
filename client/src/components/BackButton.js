import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = (prop) => {
  const navigate = useNavigate();

  const goBack = () => {
    // Use the navigate method with a relative path or any other logic you prefer
    navigate(-1); // Replace '/' with the path you want to navigate to
  };

  return (
    <button onClick={goBack} className="back-button" style={{width: '300px', backgroundColor: 'white', color: '#0E9061', border: '2px solid #0E9061'}}>
      Go Back
    </button>
  );
};

export default BackButton;
