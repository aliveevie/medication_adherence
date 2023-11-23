// SignupForm.js
import React, { useState } from 'react';
import '../styles/AuthForm.css';
import logo from '../icons/logo2.svg';
import link from '../icons/link.svg';
import hambg from '../icons/hamb.svg'
import home from '../icons/home.svg'
import addMed from '../icons/addMed.svg'
import activeMed from '../icons/activeMed.svg'
import addAppoint from '../icons/addAppoint.svg'
import plus from '../icons/plus.svg'
import setting from '../icons/setting.svg';
import heart from '../icons/heart.svg';
import complete from '../icons/complete.svg';
import '../styles/dashboard.css';


const Dashboard = (props) => {
  const { name } = props;
  
  return (
    <div className="dashboard">
      <div className='dash-header' >
        <img src={logo} alt='logo' />
        <nav className='desktop-nav' >
            <div className='addMed' >
              <img src={home}  alt='Home Icon' />
              Home
            </div>
            <div className='addMed' >
              <img src={addMed}  alt='AddMed Icon' />
              AddMed
            </div>
           
            <div className='addMed' >
              <img src={activeMed}  alt='Active Med Icon' />
              Active Med
            </div>
            <div className='addMed' >
              <img src={complete}  alt='Active Med Icon' />
              Complete Med
            </div>
        </nav>
        <div className='profile-icon' >
            {name}
        </div>
        <div className='Settings' >
            <img src={setting}  alt='Active Med Icon' />
             
        </div>
     
      </div>
      <div  className='dash-body' >
        <div className='dash-icon' >
          <img src={plus}  alt='Plus Icon' />
          <div className='dash-text' >
            <h2>Hello {name}! Welcome</h2>
            <p>let’s help remind you about your 
              next appointment with your doctor</p>
          </div>
        </div>
        <div className='dash-heart' >
          <img src={heart} alt='The Heart'  />
      </div>
      </div>
    

     
    </div>
  );
};

export default Dashboard;