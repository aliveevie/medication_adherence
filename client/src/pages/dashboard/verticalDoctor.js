import React, { useState } from 'react';
import logo from '../../icons/heartWith.svg';
import home from '../../icons/home.svg';
import addMed from '../../icons/addMed.svg';
import activeMed from '../../icons/activeMed.svg';
import addAppoint from '../../icons/addAppoint.svg';
import complete from '../../icons/complete.svg';
import '../../styles/vertical.css';
import xxx from '../../icons/xxx.svg';
import setting from '../../icons/logout.svg';


function DoctorVertical(props) {

  const { 
      closeMenu, handleClose, 
      handleShowApment, handleAddMed,
      handleComplete,
      handleActive,
      handleHome
    } = props;

  const [showMed, setShowMed] = useState(false);


  function handleMed() {
    setShowMed(!showMed);
  }

  return (
    <>
      {closeMenu  && (
        <div className='vertical'  onClick={handleClose}>
          <div className='vertical-logos'>
            <img src={logo} alt='logo' />
            <img src={xxx} alt='vertical logo'  />
          </div>

          <nav className='side-bar'>
            <div className='side' onClick={handleHome}>
              <img src={home} alt='Home Icon'  />
              Home
            </div>
            <div className='side' onClick={handleAddMed} >
              <img src={addMed} alt='AddMed Icon' />
              Add Patient
            </div>

            <div className='side' onClick={handleActive} >
              <img src={activeMed} alt='Active Med Icon' />
              Active Patient
            </div>
            <div className='side' onClick={handleComplete} >
              <img src={complete} alt='Active Med Icon' />
              Patient Data
            </div>
          </nav>
          <div className='settings' onClick={handleMed}>
            <a href='/' >
                <img src={setting} alt='Active Med Icon' />
            </a>
          </div>
        </div>
      )}

      
    </>
  );
}

export default DoctorVertical;
