import '../../styles/dashboard.css';
import  hamb from '../../icons/hamb.svg';
import  small from  '../../icons/small.svg';
import { useState } from 'react';
import DoctorVertical from './verticalDoctor';


function DoctorMobileHeader(props){
   
    const { 
        name, email, showApment, 
        handleShowApment, 
        hideAppointment, 
        handleHideAppoint,
        showAdd, handleAddMed,
        hideAddMed,
        handleComplete,
        handleActive,
        handleHome
         } = props;

    const [closeMenu, setClose] = useState(false);

    function handleClose(){
        setClose(!closeMenu)
    }


   
    return (
        <div className='mobile-header'>
            <img  src={hamb} alt='Hamburger Menu'  onClick={handleClose} />
            <img  src={small} alt='Small Icons' />
            <p   className='name'>{name.slice(0, 2)}</p>
          {closeMenu && <DoctorVertical  
            name={name}
            email={email}
            closeMenu={closeMenu} 
            handleClose={handleClose}   
            showApment={showApment}
            handleShowApment={handleShowApment}
            handleHideAppoint={handleHideAppoint}
            hideAppointment={hideAppointment}
            showAdd={showAdd}
            handleAddMed={handleAddMed}
            hideAddMed={hideAddMed}
            handleComplete={handleComplete}
            handleActive={handleActive}
            handleHome={handleHome}
            /> 
        }  

        </div>
    );
}


export default DoctorMobileHeader;