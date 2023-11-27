// SignupForm.js
import React, { useEffect, useState } from 'react';
import '../styles/AuthForm.css';

import plus from '../icons/plus.svg'
import heart from '../icons/heart.svg';
import '../styles/dashboard.css';
import DeskTopHeader from './dashboard/Desktop';
import MobileHeader from './dashboard/mobileheader';
import Appointment from './dashboard/Appointment';
import AddMed from './dashboard/AddMed';
import CompleteMed from './dashboard/completeMed';
import ActiveMedication from './dashboard/ActiveMed';
import DoctorDesktTopHeader from './dashboard/doctorHeader';
import DoctorMobileHeader from './dashboard/doctorMobile';

import AddPatient from './dashboard/AddPatient';
import ActivePatient from './dashboard/ActivePatient';
import PatientData from './dashboard/PatientData';


const DoctorDashboard  = (props) => {
  const { name, email, id, api, api1, doctor } = props;
  // console.log('Dashboard!')

  const [showApment, setShowApment] = useState(false);
  const [complete, setComplete] = useState(false);
  const [active, setActive] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  

  const getWindowDimensions = () => {
    const { innerWidth: width } = window;
    return {
      width
    };
  };


  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  );

  React.useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  
  function handleAddMed(){
      setShowAdd(true);
      setActive(false);
      setComplete(false);
      setShowApment(false);
  }


  function handleHideAppoint(){
      setShowApment(false);
  }

  function handleShowApment(){
      setShowApment(true); 
      setActive(false);
      setComplete(false);
      setShowAdd(false);
  }

  function handlePlus(){
      setShowApment(true)
  }

  function hideAddMed(){
        setShowAdd(false);
  }

  function handleComplete(){
      setComplete(true);
      setActive(false);
      setShowAdd(false);
      setShowApment(false);
  }

 function handleActive(){
      setActive(true)
      setComplete(false);
      setShowAdd(false);
      setShowApment(false);
 }

 function handleHome(){
      setActive(false);
      setShowAdd(false);
      setShowApment(false);
 }

  return (
      <>
        <div className="dashboard">
          {windowDimensions.width < 800 ? <DoctorMobileHeader 
          name={name} 
          email={email}
          id={id}
          showApment={showApment}
          handleShowApment={handleShowApment}
          handleHideAppoint={handleHideAppoint}
          handleAddMed={handleAddMed}
          hideAddMed={hideAddMed}
          handleActive={handleActive}
          handleComplete={handleComplete}
          handleHome={handleHome}
          /> : <DoctorDesktTopHeader 
          name={name} 
          email={email}
          id={id}
          showApment={showApment}
          handleShowApment={handleShowApment}
          handleHideAppoint={handleHideAppoint}
          handleAddMed={handleAddMed}
          hideAddMed={hideAddMed}
          handleActive={handleActive}
          handleComplete={handleComplete}
          handleHome={handleHome}
          />
          }

          {!showApment && !active && !complete && (

            <><div className='dash-body'>
            
            <div className='dash-text'>
              <h2>Hello {name}! Welcome</h2>
             
            </div>
          </div><div className='dash-heart'>
              <img src={heart} alt='The Heart' />
            </div></>
            )}
      </div>
      
          {showApment && !active && !complete &&  <AddPatient 
          handleShowApment={handleShowApment} 
          handleHome={handleHome}
          />}

          {active && !showApment &&  !complete && <ActivePatient 
            handleActive={handleActive}
          />}

          {complete && !showApment && !active  && <PatientData 
            handleComplete={handleComplete}
          /> }

    

      </>
  );
};
export default DoctorDashboard;