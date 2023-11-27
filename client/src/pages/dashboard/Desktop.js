import logo from '../../icons/logo2.svg';
import home from '../../icons/home.svg';
import addMed from '../../icons/addMed.svg';
import activeMed from '../../icons/activeMed.svg';
import addAppoint from '../../icons/addAppoint.svg';
import complete from '../../icons/complete.svg';
import setting from '../../icons/logout.svg';


function DeskTopHeader(props){

  const { 
        closeMenu, handleClose, 
        handleShowApment, handleAddMed,
        handleComplete,
        handleActive,
        handleHome
  } = props;

    return (
        <div className='dash-header' >
            <img src={logo} alt='logo' />
        <nav className='desktop-nav' >
            <div className='addMed' onClick={handleHome}  >
              <img src={home}  alt='Home Icon' />
              Home
            </div>
            <div className='addMed'  onClick={handleAddMed} >
              <img src={addMed}  alt='AddMed Icon' />
              AddMed
            </div>
           
            <div className='addMed'  onClick={handleActive} >
              <img src={activeMed}  alt='Active Med Icon' />
              Active Med
            </div>
            <div className='addMed' onClick={handleComplete}>
              <img src={complete}  alt='Active Med Icon' />
              Complete Med
            </div>
            <div className='addMed'  onClick={handleShowApment}  >
              <img src={addAppoint}  alt='Add Appointment Icons' />
              Add Appointment
            </div>
        </nav>
        <div className='Settings'>
          <a><img src={setting}  alt='Active Med Icon' /></a>  
        </div>
      </div>
    )
}

export default DeskTopHeader;