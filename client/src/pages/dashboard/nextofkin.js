import back from '../../icons/back.svg'
import '../../styles/appointment.css';
import { useState } from 'react';
import MessageOfNexOfKin from './nextkinmess';

export default function NextOfKin({handleHome}){

        const [patients, setPatients] = useState([]);

        function  handleChange(e){
                setPatients(e.target.value);
        }


        const [show, setShow] = useState(false);

        function handleShow(){
          setShow(!show)
        }

        return (
            <>
            {!show && (
              <div className='Appointment'>
              <div className='back-arrow'>
                <img src={back} alt='back arrow' />
              </div>
              <h3>Patient Next of Kin</h3>
              <div className='doctor-name'>
                <form>
                  <label htmlFor="firstName">
                    First Name
                    <div className='time-input'>
                      <input 
                      type='text'
                      name='firstName'
                      required
                      placeholder='first Name'
                      />
                    </div>
                  </label>
                  <label htmlFor="lastName">
                    Last Name
                    <div className='time-input'>
                      <input 
                      type='text'
                      name='lastName'
                      required
                      placeholder='last Name'
                      />
                    </div>
                  </label>
                  <label htmlFor="phone">
                    Phone Number
                    <div className='time-input'>
                      <input 
                      type='tel'
                      name='phoneNumber'
                      required
                      placeholder='phone'
                      />
                    </div>
                  </label>
                  <button type='submit' onClick={handleShow} >Add</button>
                </form>
              </div>
            </div> 
            )}

            {show && <MessageOfNexOfKin 
            handleHome={handleHome}
            />}
            
            </>
        )
}