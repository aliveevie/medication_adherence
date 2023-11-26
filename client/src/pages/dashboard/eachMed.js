import React, { useState } from 'react';
import back from '../../icons/back.svg';
import '../../styles/activemed.css';
import formatTime from '../../functions/formatTime';
import icons from '../../icons/icons.svg';
import LastComponent from './last';


export default function EachMed({ handleCurrent, medication, current }) {
    console.log(medication)
    const [last, setLast] = useState(false);

    function handleLast(){
        setLast(!last);
    }

  return (
    <>
        {!last && (<div className='activ-med'>
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
        <div className='check-in'>
            <div className='days-number'>
                {Array.from({ length: medication.duration }, (_, index) => (
                <div key={index}>
                    <p>{`Day ${index + 1}`}</p>
                    <div className='days'>
                    <p>Pending</p>
                    <p onClick={handleLast}>Check In</p>
                    </div>
                </div>
                ))}
               
            </div>
        </div>

        </div>
 
        </div>)}

        {last && <LastComponent 
              medication={current}
        /> }
    </>

    
  );
}
