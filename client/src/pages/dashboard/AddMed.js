import React, { useState } from 'react';
import back from '../../icons/back.svg';
import '../../styles/appointment.css';
import formatTime from '../../functions/formatTime';
import Medication from './Medication';

export default function AddMed(props) {

    const { email, name, showAdd, handleAddMed, hideAddMed, id } = props;
    
    const [selectedTime, setSelectedTime] = useState([]);
    const [medication, setMedication] = useState({
      medicationName: '',
      dose: '',
      duration: '',
      time: '',
    });

    const [showActive, setShowActive] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const medicationName = event.target.medicationName.value
        const dose = event.target.dose.value
        const duration = event.target.duration.value
        const time = selectedTime;
        const patientEmail = email
        
      const data = {
          medicationName,
          dose,
          duration,
          patientEmail,
          time
      }

      console.log(data);

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

          setMedication({
            ...medication,
            medicationName: '',
            dose: '',
            duration: '',
          });

          setSelectedTime([]);
          setShowActive(true);
          console.log(showActive);
      
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
          time: '',
        });
      }

      const handleDeleteTime = (timeToDelete) => {
        const updatedTimes = selectedTime.filter((time) => time !== timeToDelete);
        setSelectedTime(updatedTimes);
      };

      const handleChange = (event) => {
        const { name, value } = event.target;
        setMedication({
          ...medication,
          [name]: value,
        });
      };

     

  return (
    <>
          {!showActive && (
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
                     value={medication.medicationName}
                     onChange={handleChange}
                     required
                     />
                   </label>
                 
                   <label htmlFor="dose">
                     Number of Dosage
                     <input type='number' name="dose" 
                     placeholder='Type a Number'
                     value={medication.dose}
                     onChange={handleChange}
                     required
                     />
                   </label>

                   <label htmlFor="duration">
                     Duration
                     <input type='number' name="duration" 
                     placeholder='Type Number of Days'
                     value={medication.duration}
                     onChange={handleChange}
                     required
                     />
                   </label>
                 
                   <label htmlFor="time">
                     <h3>Add Reminder</h3>
                     <div className='time-input'>
                       <input type='time' 
                        name='time' 
                        value={medication.time}
                        onChange={handleTimeChange}
                       />
                      <button type='button'
                      onClick={handleTimeAdd}
                      >Add</button>
                     </div>
                   </label>
                   <div className='save'>
                    {selectedTime.map((time) => (
                      <p key={time} className='times'>
                        {formatTime(time)}
                        <i className='fas fa-trash-alt' onClick={() => handleDeleteTime(time)}></i>
                      </p>
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