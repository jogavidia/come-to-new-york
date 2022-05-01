import { NavLink } from 'react-router-dom';

const Menu = ( { handleToggle } ) => {
    // https://stackoverflow.com/questions/41131450/active-link-with-react-router
    return ( 
        <ul className="nav-links">
            <li onClick={ handleToggle } className="nav-item"><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')} >Home</NavLink></li>
            <li className="nav-item"><a href={'http://google.com'}>Book Now</a></li>
            <li onClick={ handleToggle } className="nav-item"><NavLink to="aboutus" >About Us</NavLink></li>
        </ul> 
     );
}
 
export default Menu;