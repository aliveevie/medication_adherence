// SignupForm.js
import logo from '../../icons/logo.svg';
import link from '../../icons/link.svg';


const MessageOfNexOfKin = ({handleHome}) => {
  
  return (
    <form className="auth-form" method="post" action="/">
      <img src={logo} alt="logo" />
      <div className='form-header' >
          <h2>Patient Added</h2>
        <p>
        Your patient has been added successfully.
        </p>
      </div>
      <img 
      src={link} alt='Verfication Link Icon'
      />
      <button  type='button' onClick={handleHome} >Dashboard</button>
    </form>
  );
};

export default MessageOfNexOfKin;