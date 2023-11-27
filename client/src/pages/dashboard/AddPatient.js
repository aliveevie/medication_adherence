import back from '../../icons/back.svg'
import '../../styles/appointment.css';
import React, { useState } from 'react';
import NextOfKin from './nextofkin';


export default function AddPatient({handleHome}){

        const [patients, setPatients] = useState([]);
        const [show, setShow] = useState(false);

        function  handleChange(e){
              setPatients(e.target.value);
        }

        function handleShow(){
            setShow(!show)
        }


        return (
          <>
          {!show && (
             <div className='Appointment'>
             <div className='back-arrow'>
               <img src={back} alt='back arrow'
               
               />
             </div>
             <h3>Add Patient</h3>
             <div className='doctor-name'>
               <form>
                 <label htmlFor="time">
                   Patient Email address
                   <div className='time-input'>
                     <input 
                     type='email' 
                     name='patientEmail'
                     required
                     placeholder='email address'
                     />        
                   </div>
                 </label>
                 <button type='button' onClick={handleShow} >Continue</button>
               </form>
             </div>
           </div> 
          )}
             
             {show && <NextOfKin 
             handleHome={handleHome}
             />}
          </>
        

        )
}