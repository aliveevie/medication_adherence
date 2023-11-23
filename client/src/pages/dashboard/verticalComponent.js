import logo from '../../icons/heartWith.svg';
import home from '../../icons/home.svg';
import addMed from '../../icons/addMed.svg';
import activeMed from '../../icons/activeMed.svg';
import addAppoint from '../../icons/addAppoint.svg';
import complete from '../../icons/complete.svg';
import setting from '../../icons/setting.svg';
import '../../styles/vertical.css';
import xxx from '../../icons/xxx.svg';

function VerticalComponent(props){
    return (
        <div className='vertical' >
            <div className='vertical-logos' >
                <img src={logo} alt='logo' />
                <img src={xxx} alt="vertical logo" />
            </div>
           
        <nav className='side-bar' >
            <div className='side' >
              <img src={home}  alt='Home Icon' />
              Home
            </div>
            <div className='side' >
              <img src={addMed}  alt='AddMed Icon' />
              AddMed
            </div>
           
            <div className='side' >
              <img src={activeMed}  alt='Active Med Icon' />
              Active Med
            </div>
            <div className='side' >
              <img src={complete}  alt='Active Med Icon' />
              Complete Med
            </div>
            <div className='side' >
              <img src={addAppoint}  alt='Add Appointment Icons' />
              Add Appointment
            </div>
        </nav>
        <div className='settings' >
            <img src={setting}  alt='Active Med Icon' />  
           <p> Settings</p>           
        </div>
      </div>
    );
}


export default VerticalComponent;