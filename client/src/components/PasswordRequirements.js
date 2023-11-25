import React from 'react';
import { FaCircleCheck  } from 'react-icons/fa6';

const PasswordRequirements = ({ password }) => {
  const requirements = [
    {
      label: 'At least 8 characters',
      isMet: password.length() >= 8,
    },
    {
      label: 'One upper-case character',
      isMet: /[A-Z]/.test(password),
    },
    {
      label: 'At least one numeric character',
      isMet: /\d/.test(password),
    },
  ];

  const allRequirementsMet = requirements.every((req) => req.isMet);

  return (
    <div className="password-requirements">
      {requirements.map((req, index) => (
        <div key={index} className={`requirement ${req.isMet ? 'met' : ''}`}>
          <FaCircleCheck  />
          <span>{req.label}</span>
        </div>
      ))}
      <div className={`overall-status ${allRequirementsMet ? 'met' : ''}`}>
        <FaCircleCheck  />
        <span>{allRequirementsMet ? 'All requirements met!' : 'Requirements not met'}</span>
      </div>
    </div>
  );
};

export default PasswordRequirements;
