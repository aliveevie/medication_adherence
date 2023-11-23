// SignupForm.js
import React, { useState } from 'react';
import '../styles/AuthForm.css';

import plus from '../icons/plus.svg'
import heart from '../icons/heart.svg';
import '../styles/dashboard.css';
import DeskTopHeader from './dashboard/Desktop';
import MobileHeader from './dashboard/mobileheader';

const Dashboard = (props) => {
  const { name } = props;


  
  return (
    <div className="dashboard">
     <DeskTopHeader />
     <MobileHeader />
      <div className='dash-body' >
        <div className='dash-icon' >
          <img src={plus}  alt='Plus Icon' />
          <div className='dash-text' >
            <h2>Hello {name}! Welcome</h2>
            <p>let’s help remind you about your 
              next appointment with your doctor</p>
          </div>
        </div>
      </div>
      <div className='dash-heart' >
          <img src={heart} alt='The Heart'  />
      </div>
    
    </div>
   
  );
};

export default Dashboard;