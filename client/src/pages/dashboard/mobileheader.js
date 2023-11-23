import '../../styles/dashboard.css';
import  hamb from '../../icons/hamb.svg';
import  small from  '../../icons/small.svg';



function MobileHeader(props){
    const { name } = props;
   
    return (
        <div className='mobile-header'>
            <img  src={hamb} alt='Hamburger Menu' />
            <img  src={small} alt='Small Icons' />
            <p   className='name'>{name.slice(0, 2)}</p>
            
        </div>
    );
}


export default MobileHeader;