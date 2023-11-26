import React, { useState } from 'react';
import back from '../../icons/back.svg';
import '../../styles/activemed.css';
import formatTime from '../../functions/formatTime';
import icons from '../../icons/icons.svg';
import LastComponent from './last';

export default function Reminder({ handleCurrent, medication, current }) {
  const [showLast, setShowLast] = useState(false);
  const [currentTime, setCurrentTime] = useState(null);

  function handleCurrentTime(time) {
    setCurrentTime(time);
    setShowLast(true);
  }

  function handleBack() {
    setShowLast(false);
  }

  return (
    <>
      {!showLast && (
        <>
          <img src={back} alt='Medication details' onClick={handleBack} />
          <div className='medication-item'>
            <h2>{medication.medicationname} - {medication.dose}</h2>
            <img src={icons} alt='Stop Icon' />
            <div className='medication-stop'>
              {medication.times.map((time) => (
                <p key={time}>{formatTime(time).split(' ').join(', ')}</p>
              ))}
            </div>
          </div>
          <div className='duration'>
            <div className='check'>
              <div className='days-number'>
                {Array.from({ length: medication.times.length }, (_, index) => (
                  <div key={index}>
                    <div>{`${formatTime(medication.times[index])}`}</div>
                    <div className='days' style={{ backgroundColor: medication.status === 'pending' ? '#c0f8da' : '#0e9061' }}>
                      <p>{medication.status}</p>
                      <p onClick={() => handleCurrentTime(medication.times[index])}>Check In</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {showLast && (
        <LastComponent
          medication={medication}
          handleCurrent={handleCurrent}
          current={current}
          currentTime={currentTime}
        />
      )}
    </>
  );
}
