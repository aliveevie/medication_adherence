import React from 'react';


export default function ActiveMedication(props) {
  const { name, email, id } = props;
  console.log(props)

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
  


  return (
    <>
      <div className='activ-med' >
        <div className="med-list">
          <h3>Active Medication</h3>
        </div>
      </div>
    </>
  );
}
