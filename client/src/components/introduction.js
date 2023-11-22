import '../styles/introduction.css';
import { Link } from 'react-router-dom';
import LoginForm from '../pages/login';  // Assuming this should be imported from login instead of signup
import SignupForm from '../pages/signup';  // Assuming this should be imported from signup instead of login

export default function Introduction() {
    return (
        <div className="introduction">
            <div className="text">
                <p className='text-header'>
                    Take control of your health with
                </p>
                <h2>Med<span className="text-color">Ease</span> </h2>
                <p>Your Personal Health Companion!</p>
                <p>
                    Seamlessly manage your medications
                </p>
                <a className="buttons" href="../pages/login">
                    Discover MedEase Now
                </a>

                <a className="buttons" to="../pages/signup">
                    Discover MedEase Doctor
                </a>
            </div>
        </div>
    );
}
