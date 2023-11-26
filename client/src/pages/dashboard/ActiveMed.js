import React from 'react';
import { useState, useEffect } from 'react';
import '../../styles/activemed.css';
import stop from '../../icons/icons.svg';
import EachMed from './eachMed';
import formatTime from '../../functions/formatTime';

export default function ActiveMedication(props) {
  const { name, email, id } = props;
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(null);

  
useEffect(() => {
    handleSubmit();
}, []);

  async function handleSubmit(){
    const patient_id = id; // Replace with the actual patient ID

  try {
    // Send a POST request to the API endpoint with the patient ID in the body
    const response = await fetch('/api/patients/activemed', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ patient_id }),
    });

    const responseData = await response.json();
    setData(responseData);
    
  } catch (error) {
    console.error('Error fetching activemed data:', error);
  }
  }

  function handleCurrent(medication) {
    setCurrent({ ...medication, times: medication.times });
  }

  
  return (
    <>
      {!current && (
        <div className='activ-med'>
          <div className='med-list'>
            {/* Group the data by medication name */}
            {Object.values(data.reduce((acc, medication) => {
              if (!acc[medication.medicationname]) {
                acc[medication.medicationname] = {
                  ...medication,
                  times: [medication.time],
                };
              } else {
                acc[medication.medicationname].times.push(medication.time);
              }
              return acc;
            }, {})).map((medicationGroup) => (
              <div
                key={medicationGroup.medicationname}
                className='medication-item'
                style={{ backgroundColor: '#c0f8da' }}
                onClick={() => handleCurrent(medicationGroup)}
              >
                <h3>{medicationGroup.medicationname} - {medicationGroup.dose}</h3>
                <div className='medication-stop'>
                  <img src={stop} alt='Stop Icon' />
                  <p>Today</p>
               
                  {medicationGroup.times.map((time) => (
                    <p key={time}>{formatTime(time)}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {current && (
        <EachMed
          medication={current}
          handleCurrent={() => setCurrent(null)}
        />
      )}
    </>
  );
}
