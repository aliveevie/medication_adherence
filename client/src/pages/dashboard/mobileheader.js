import '../../styles/dashboard.css';
import  hamb from '../../icons/hamb.svg';
import  small from  '../../icons/small.svg';


function MobileHeader(props){
    const { name } = props;

    return (
        <div className='mobile-header'>
            <img  src={hamb} alt='Hamburger Menu' />
            <img  src={small} alt='Small Icons' />
            <img  src={name}  className='name' />
        </div>
    );
}


export default MobileHeader;