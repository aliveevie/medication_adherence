import React from 'react';
import back from '../../icons/back.svg';
import '../../styles/activemed.css';
import formatTime from '../../functions/formatTime';

export default function EachMed({ handleCurrent, medication }) {
 


  return (
    <div className='activ-med'>
      <img src={back} alt='Medication details' onClick={handleCurrent} />
      <div className='medication-item'>
        <h2>{medication.medicationname} - {medication.dose}</h2>
        <p>Today {formatTime(medication.time)}</p>
        {/* Add more details if needed */}
      </div>
    </div>
  );
}
