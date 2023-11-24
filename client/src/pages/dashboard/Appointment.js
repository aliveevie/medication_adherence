import React, { useState } from 'react';
import back from '../../icons/back.svg';
import '../../styles/appointment.css';

export default function Appointment() {
  const [selectedTime, setSelectedTime] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add logic here to submit the form data to the specified API endpoint.
    console.log('Form submitted:', event.target.doctorName.value, event.target.doctorEmail.value, event.target.calendar.value, selectedTime);
  };

  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className='Appointment'>
      <div className='back-arrow'>
        <img src={back} alt='back arrow' />
      </div>
      <div className='doctor-name'>
        <form method='post' onSubmit={handleSubmit}>
          <label htmlFor="doctorName">
            Doctor Name
            <input type='text' name="doctorName" />
          </label>
          <label htmlFor="doctorEmail">
            Email
            <input type='email' name="doctorEmail" />
          </label>
          <label htmlFor="calendar">
            Date
            <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
      />
          </label>
          <label htmlFor="time">
            Time
            <div className='time-input'>
              <input type='time' name='time' />
              <div className='add'>
                <button>Add</button>
              </div>
              <div className='save' style={{ backgroundColor: selectedTime ? '#2ecc71' : 'transparent' }}>
                <p>{selectedTime}</p>
              </div>
            </div>
          </label>
          <button type='submit'>Save</button>
        </form>
      </div>
    </div>
  );
}
