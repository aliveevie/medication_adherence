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


const Dashboard = (props) => {
  const { name, email, id } = props;
 
  const [showApment, setShowApment] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [complete, setComplete] = useState(false);
  const [active, setActive] = useState(false);



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
    setComplete(false);
    setShowAdd(false);
    setShowApment(false);
 }

  return (
      <>
        <div className="dashboard">
          {windowDimensions.width < 800 ? <MobileHeader 
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
          /> : <DeskTopHeader 
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
          />}

          {!showApment && !showAdd  && !complete && !active && (

            <><div className='dash-body'>
            <div className='dash-icon'>
              <img src={plus} alt='Plus Icon' onClick={handlePlus} />
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
      
          {showApment && !showAdd  && !complete && !active && <Appointment 
          showApment={showApment} 
          handleShowApment={handleShowApment} 
          name={name} 
          email={email} 
          id={id}
          handleHideAppoint={handleHideAppoint}
          />}

        {!showApment && showAdd  && !complete && !active &&<AddMed
        handleAddMed={handleAddMed}
        showAdd={showAdd}
        hideAddMed={hideAddMed}
        name={name}
        email={email}
        id={id}
        />}

        {!showApment && !showAdd  && complete && !active && <CompleteMed 
        handleComplete={handleComplete}
        name={name}
        email={email}
        id={id}
        />}

        {!showApment && !showAdd  && !complete && active && <ActiveMedication
        handleActive={handleActive}
        name={name}
        email={email}
        id={id}
      />}

      </>
  );
};
export default Dashboard;