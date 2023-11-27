import logo from '../../icons/logo2.svg';
import home from '../../icons/home.svg';
import addMed from '../../icons/addMed.svg';
import activeMed from '../../icons/activeMed.svg';
import addAppoint from '../../icons/addAppoint.svg';
import complete from '../../icons/complete.svg';
import setting from '../../icons/logout.svg';


function  DoctorDesktTopHeader (props){

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
              Add Patient
            </div>
           
            <div className='addMed'  onClick={handleActive} >
              <img src={activeMed}  alt='Active Med Icon' />
              Active Patient
            </div>
            <div className='addMed' onClick={handleComplete}>
              <img src={complete}  alt='Active Med Icon' />
              Patient Data
            </div>
            </nav>
        <div className='Settings'>
          <a  href='/' ><img src={setting}  alt='Active Med Icon' /></a>  
        </div>
      </div>
    )
}

export default DoctorDesktTopHeader;