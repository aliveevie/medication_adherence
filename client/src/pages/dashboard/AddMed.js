import React, { useState } from 'react';
import back from '../../icons/back.svg';
import '../../styles/appointment.css';
import formatTime from '../../functions/formatTime';


export default function AddMed(props) {

    const { email, name, showAdd, handleAddMed, hideAddMed } = props;

    const [selectedTime, setSelectedTime] = useState([]);
  
    const handleSubmit = async (event) => {
        event.preventDefault();

        const medicationName = event.target.medicationName.value
        const dose = event.target.dose.value
        const duration = event.target.duration.value
        const time = event.target.time.value
        const patientEmail = email
        
      const data = {
          medicationName,
          dose,
          duration,
          patientEmail,
          time
      }

        try {
          // Make a POST request to the API endpoint
          const response = await fetch('/api/patient/medication', {
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
          
        } catch (error) {
          console.error('Error submitting appointment data:', error);
        }
      };
      
      const [medication, setMedication] = useState({
        medicationName: '',
        dose: '',
        duration: '',
        time: '',
      });

      function handleTimeChange(e) {
        setMedication({
          ...medication,
          time: e.target.value,
        });
      }

      function handleTimeAdd() {
        setSelectedTime((prevTimes) => [...prevTimes, medication.time]);
        setMedication({
          ...medication,
        //  time: '', // Clear the time input after adding
        });
      }

      console.log(selectedTime);

  return (
    <>
          {showAdd && (
               <div className='Appointment'>
               <div className='back-arrow' onClick={hideAddMed} >
                 <img src={back} alt='back arrow'  />
               </div>
               <div className='doctor-name'>
                 <form method='post' onSubmit={handleSubmit}  >
                   <label htmlFor="doctorName">
                     Name of Medication
                     <input type='text' name="medicationName" 
                     placeholder='Type'
                     required
                     />
                   </label>
                 
                   <label htmlFor="dose">
                     Number of Dosage
                     <input type='number' name="dose" 
                     placeholder='Type a Number'
                     required
                     />
                   </label>

                   <label htmlFor="duration">
                     Duration
                     <input type='number' name="duration" 
                     placeholder='Type Number of Days'
                     required
                     />
                   </label>
                 
                   <label htmlFor="time">
                     <h3>Add Reminder</h3>
                     <div className='time-input'>
                       <input type='time' 
                        name='time' 
                        required
                        value={medication.time}
                        onChange={handleTimeChange}
                       />
                      <button type='button'
                      onClick={handleTimeAdd}
                      >Add</button>
                     </div>
                   </label>
                   <div className='save' >
                    {selectedTime.map((time) => (
                        <p key={time}  className='times' >{ formatTime(time)}</p>
                    ))}
                    </div>
                    <button type="submit" >Save</button>
                 </form>
               </div>
             </div> 
          )}
             
    </>
    
  );
}