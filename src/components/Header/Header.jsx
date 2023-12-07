
import './header.scss';
import logo from '../../img/841606.svg'
const Header = () => {
    
    const handleClick = (x,y) => {
        window.scrollTo(x,y);
    };
    return (
        <div className='header'>
            <div className='header-wrapper'>
                <img src={logo} alt="logo" />
                <ul>
                    <li><button onClick={()=>handleClick(0,0)}>Home</button></li>
                    <li><button onClick={()=>handleClick(0,780)} >About</button></li>
                    <li><button onClick={()=>handleClick(0,1980)}>Projects</button></li>
                    <li><button onClick={()=>handleClick(0,3000)}>Contact</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;