// SignupForm.js
import React, { useEffect, useState } from 'react';
import '../styles/AuthForm.css';

import plus from '../icons/plus.svg'
import heart from '../icons/heart.svg';
import '../styles/dashboard.css';
import DeskTopHeader from './dashboard/Desktop';
import MobileHeader from './dashboard/mobileheader';
import Appointment from './dashboard/Appointment';

const Dashboard = (props) => {
  const { name } = props;
  let vertical = false;

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



  return (

    <div className="dashboard">
      {windowDimensions.width < 800 ? <MobileHeader  name={name} /> : <DeskTopHeader />}
      <div className='dash-body' >
        <div className='dash-icon' >
          <img src={plus}  alt='Plus Icon' />
        </div>
        <div className='dash-text' >
            <h2>Hello {name}! Welcome</h2>
            <p>let’s help remind you about your 
              next appointment with your doctor</p>
          </div>
      </div>
      <div className='dash-heart' >
          <img src={heart} alt='The Heart'  />
      </div>
      <Appointment />
    </div>
  );
};
export default Dashboard;