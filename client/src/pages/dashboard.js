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



const Dashboard = (props) => {
  const { name, email } = props;
  

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

  const [showApment, setShowApment] = useState(false);
  const [showAdd, setShowAdd] = useState(false)
  
  function handleAddMed(){
      setShowAdd(!showAdd)
  }


  function handleHideAppoint(){
        setShowApment(false)
  }

   function handleShowApment(){
          setShowApment(true)
   }

  return (
      <>
        <div className="dashboard">
          {windowDimensions.width < 800 ? <MobileHeader 
          name={name} 
          email={email}
          showApment={showApment}
          handleShowApment={handleShowApment}
          handleHideAppoint={handleHideAppoint}
          handleAddMed={handleAddMed}

          /> : <DeskTopHeader />}
        
          {!showApment && (
         
            <><div className='dash-body'>
            <div className='dash-icon'>
              <img src={plus} alt='Plus Icon' onClick={handleShowApment} />
            </div>
            <div className='dash-text'>
              <h2>Hello {name}! Welcome</h2>
              <p>Let’s help remind you about your next appointment with your doctor</p>
            </div>
          </div><div className='dash-heart'>
              <img src={heart} alt='The Heart' />
            </div></>
            )}
      </div>
      
        {showApment && <Appointment 
        showApment={showApment} 
        handleShowApment={handleShowApment} 
        name={name} 
        email={email} 
        handleHideAppoint={handleHideAppoint}
        />}

        {showAdd && !showApment && <AddMed /> }
      </>
  );
};
export default Dashboard;