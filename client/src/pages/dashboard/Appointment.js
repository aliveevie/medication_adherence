import React, { useState } from 'react';
import back from '../../icons/back.svg';
import '../../styles/appointment.css';
import Medication from './Medication';
import ActiveMedication from './ActiveMed';

export default function Appointment(props) {
    const [selectedTime, setSelectedTime] = useState('');
    const { showApment, handleShowApment, email, name, handleHideAppoint, id } = props;
    const [dName, setDName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [hide, setHide] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        // Extract data from the form
        const doctorName = event.target.doctorName.value;
        const calendar = event.target.calendar.value;
        const time = event.target.time.value;
        const patientEmail = email
        // Prepare the data to be sent in the request body
        const data = {
          doctorName,
          calendar,
          time,
          patientEmail
        };
        
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


          const responseData = await response.json();
        
          if(responseData){
            setDName(responseData.doctorname);
            setDate(responseData.calendar);
            setTime(responseData.time);
            setHide(true);
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
        {showApment && !hide && (
                <div className='Appointment'>
                <div className='back-arrow'>
                  <img src={back} alt='back arrow' onClick={handleHideAppoint} />
                </div>
                <div className='doctor-name'>
                  <form method='post' onSubmit={handleSubmit}>
                    <label htmlFor="doctorName">
                      Doctor Name
                      <input type='text' name="doctorName" 
                      placeholder='Type'
                      required
                      />
                    </label>
                  
                    <label htmlFor="calendar">
                      Date
                      <input
                          type="date"
                          name='calendar'
                          required
                />
                    </label>
                    <label htmlFor="time">
                      Time
                      <div className='time-input'>
                        <input type='time' name='time'
                        required
                        />
                      
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

          {hide &&  
            <Medication  
            name={name} 
            dName={dName} 
            time={time} 
            date={date} 
            id={id}
          />}
        
    </>
    
  );
}
