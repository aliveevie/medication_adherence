import React from 'react';
import AddMed from './AddMed';
import ActiveMedication from './ActiveMed';

export default function Medication(props) {
  let { name, dName, date, time, id } = props;

  const formatDate = (inputDate) => {
    const options = { day: 'numeric', month: 'short' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date(inputDate));
    return formattedDate;
  };

  const formatTime = (inputTime) => {
    const [hours, minutes] = inputTime.split(':');
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime = new Intl.DateTimeFormat('en-US', options).format(new Date(0, 0, 0, hours, minutes));
    return formattedTime;
  };
  

  date = formatDate(date);

  return (
    <>
      <div>
        <div className='dash-body'>
          <div className='dash-text'>
            <h2>Hello {name}! Welcome</h2>
            <p>Your next appointment with Dr. {dName} is scheduled for {date}, {formatTime(time)}</p>
          </div>
        </div>
       
       <h3>Active Medication</h3>
        <ActiveMedication 
        id={id}
        />
      </div>
    </>
  );
}
