import logo from '../../icons/logo2.svg';
import home from '../../icons/home.svg';
import addMed from '../../icons/addMed.svg';
import activeMed from '../../icons/activeMed.svg';
import addAppoint from '../../icons/addAppoint.svg';
import complete from '../../icons/complete.svg';
import setting from '../../icons/setting.svg';


function DeskTopHeader(props){
    return (
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
            <div className='addMed' >
              <img src={addAppoint}  alt='Add Appointment Icons' />
              Add Appointment
            </div>
        </nav>
        <div className='Settings' >
            <img src={setting}  alt='Active Med Icon' />
             
        </div>
      </div>
    )
}

export default DeskTopHeader;