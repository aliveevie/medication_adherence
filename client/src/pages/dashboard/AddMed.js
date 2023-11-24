import React, { useState } from 'react';
import back from '../../icons/back.svg';
import '../../styles/appointment.css';
import Medication from './Medication';

export default function AddMed(props) {

    const { email, name, showAdd, handleAddMed } = props;
    const [selectedTime, setSelectedTime] = useState('');
    console.log(showAdd)
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          // Make a POST request to the API endpoint
          const response = await fetch('', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              // Add any additional headers if required
            },
            body: JSON.stringify(''),
          });
      
          // Check if the request was successful (status code 2xx)
          if (response.ok) {
            console.log('Appointment data submitted successfully');
            // You can perform additional actions here if needed
            
          } else {
            console.error('Failed to submit appointment data');
          }


          const responseData = await response.json();
          

        } catch (error) {
          console.error('Error submitting appointment data:', error);
        }
      };
      

  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <>
          {showAdd && (
               <div className='Appointment'>
               <div className='back-arrow' onClick={handleAddMed} >
                 <img src={back} alt='back arrow'  />
               </div>
               <div className='doctor-name'>
                 <form method='post' onSubmit={handleSubmit}>
                   <label htmlFor="doctorName">
                     Name of Medication
                     <input type='text' name="medicationName" 
                     placeholder='Type'
                     />
                   </label>
                 
                   <label htmlFor="dose">
                     Number of Dosage
                     <input type='number' name="medicationName" 
                     placeholder='Type a Number'
                     />
                   </label>

                   <label htmlFor="doctorName">
                     Duration
                     <input type='number' name="medicationName" 
                     placeholder='Type Number of Days'
                     />
                   </label>
                 
                   <label htmlFor="time">
                     <h3>Add Reminder</h3>
                     <div className='time-input'>
                       <input type='time' name='time' />
                       
                       <div className='save' style={{ backgroundColor: selectedTime ? '#2ecc71' : 'transparent' }}>
                         <p>{selectedTime}</p>
                       </div>
                     </div>
                   </label>
                   <button type='submit'>Add</button>
                 </form>
               </div>
             </div> 
          )}
             
    </>
    
  );
}