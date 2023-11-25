import React from 'react';
import { useState, useEffect } from 'react';
import '../../styles/activemed.css'
import stop from '../../icons/icons.svg'

export default function ActiveMedication(props) {
  const { name, email, id } = props;
  const [data, setData] = useState([]);
  
  const formatTime = (inputTime) => {
    const [hours, minutes] = inputTime.split(':');
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime = new Intl.DateTimeFormat('en-US', options).format(new Date(0, 0, 0, hours, minutes));
    return formattedTime;
  };
  

// Empty dependency array means this effect will only run once when the component mounts


useEffect(() => {
    handleSubmit()
}, [])



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

    const responseData = await response.json()
    setData(responseData)
    
  } catch (error) {
    console.error('Error fetching activemed data:', error);
  }
  }
  



  return (
    <div className='activ-med'>
      <div className="med-list">
        {data.map((medication) => (
          <div key={medication.medicationname} className="medication-item" style={{ backgroundColor: '#c0f8da' }}>
            <h3>{medication.medicationname} - {medication.dose}</h3>
           <div  className='medication-stop' >
            <img src={stop} ></img>
            <p>{formatTime(medication.time)}</p>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
}
