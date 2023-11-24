import React, { useState } from 'react';
import back from '../../icons/back.svg';
import '../../styles/appointment.css';

export default function Appointment(props) {

  
    const [selectedTime, setSelectedTime] = useState('');
    const { showApment, handleShowApment, email } = props;

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        // Extract data from the form
        const doctorName = event.target.doctorName.value;
        const doctorEmail = event.target.doctorEmail.value;
        const calendar = event.target.calendar.value;
        const time = event.target.time.value;
        const patientEmail = email
        // Prepare the data to be sent in the request body
        const data = {
          doctorName,
          doctorEmail,
          calendar,
          time,
          patientEmail
        };

        console.log(data);
      
        try {
          // Make a POST request to the API endpoint
          const response = await fetch('/api/patient/appointment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              // Add any additional headers if required
            },
            body: JSON.stringify(data),
          });
      
          // Check if the request was successful (status code 2xx)
          if (response.ok) {
            console.log('Appointment data submitted successfully');
            // You can perform additional actions here if needed
          } else {
            console.error('Failed to submit appointment data');
          }
        } catch (error) {
          console.error('Error submitting appointment data:', error);
        }
      };
      

  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  function handleAppointment(){
        showApment = !showApment
  }

  return (
    <>
        {showApment && (
                <div className='Appointment'>
                <div className='back-arrow'>
                  <img src={back} alt='back arrow' onClick={handleShowApment} />
                </div>
                <div className='doctor-name'>
                  <form method='post' onSubmit={handleSubmit}>
                    <label htmlFor="doctorName">
                      Doctor Name
                      <input type='text' name="doctorName" />
                    </label>
                    <label htmlFor="doctorEmail">
                     Doctor Email
                      <input type='email' name="doctorEmail" />
                    </label>
                    <label htmlFor="calendar">
                      Date
                      <input
                          type="date"
                          name='calendar'
                />
                    </label>
                    <label htmlFor="time">
                      Time
                      <div className='time-input'>
                        <input type='time' name='time' />
                      
                        <div className='save' style={{ backgroundColor: selectedTime ? '#2ecc71' : 'transparent' }}>
                          <p>{selectedTime}</p>
                        </div>
                      </div>
                    </label>
                    <button type='submit'>Save</button>
                  </form>
                </div>
              
              </div> 
        )}
     
    </>
    
  );
}
