import '../styles/introduction.css';
import Patient from './patient';
import { useState } from 'react';

export default function Introduction() {
  const [showPatient, setShowPatient] = useState(false);

  function handleShowPatient() {
    setShowPatient(true);
  }

  return (
    !showPatient ? (
      <div className="introduction">
        <div className="text">
          <p className='text-header'>
            Take control of your health with
          </p>
          <h2>Med<span className="text-color">Ease</span> </h2>
          <p>Your Personal Health Companion!</p>
          <p>
            Seamlessly manage your medications
          </p>
          <p className="buttons" onClick={handleShowPatient}>
            Discover MedEase Now
          </p>
        </div>
      </div>
    ) : (
      <Patient />
    )
  );
}
