import React, { useState } from 'react';
import back from '../../icons/back.svg';
import '../../styles/activemed.css';
import formatTime from '../../functions/formatTime';
import icons from '../../icons/icons.svg';
import LastComponent from './last';


export default function EachMed({ handleCurrent, medication, current }) {

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
            <div className='medication-stop'>
                <img src={icons} alt='Stop Icon' />
                <p>Today {formatTime(medication.time)}</p>
            </div>
        </div>
        <p>Day 1</p>
        <div className='check-in' >
            <div className='days' >
            <p>{formatTime(medication.time)}</p>
            <p  onClick={handleLast} >Check In</p>
            </div>
        </div>
        </div>)}

        {last && <LastComponent 
              medication={current}
        /> }
    </>

    
  );
}
