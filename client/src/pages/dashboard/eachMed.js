import React, { useState } from 'react';
import back from '../../icons/back.svg';
import '../../styles/activemed.css';
import formatTime from '../../functions/formatTime';
import icons from '../../icons/icons.svg';
import LastComponent from './last';
import Reminder from './reminder';



export default function EachMed({ handleCurrent, medication, current }) {
    const [reminder, setReminder] = useState(false);

    function handleReminder(){
        setReminder(true);
    }

  return (
    <>
        {!reminder && (<div className='activ-med'>
        <img src={back} alt='Medication details' onClick={handleCurrent} />
        <div className='medication-item'>
            <h2>{medication.medicationname} - {medication.dose}</h2>
            <img src={icons} alt='Stop Icon' />
            <div className='medication-stop'>
                {medication.times.map((time) => (
                  <p key={time}>{formatTime(time)}</p>
                ))}
            </div>
        </div>
        <div  className='duration' >
        <div className='check'>
            <div className='days-number'>
                {Array.from({ length: medication.duration }, (_, index) => (
                <div key={index}>
                    <div>{`Day ${index + 1}`}</div>
                    <div className='days' style={{ backgroundColor: medication.status === 'pending' ? '#c0f8da' : '#0e9061' }}>
                    <p>{medication.status}</p>
                    <p onClick={handleReminder} >Check In</p>
                    </div>
                </div>
                ))}
               
            </div>
        </div>

        </div>
 
        </div>)}

        {reminder && <Reminder 
                medication={medication}
        /> }
    </>

    
  );
}
