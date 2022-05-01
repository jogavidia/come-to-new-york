import React, { useState } from "react";
import logo from '../logo.svg';
import Menu from "./Menu";
import { useLocation } from "react-router-dom";
import useScrollChangeNavColor from "../useScrollChangeNavColor";
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {

  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;
  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  const [isActive, setActive] = useState(false);
  const handleToggle = (event) => {
    setActive(!isActive);
    event.preventDefault();
  };

const { navState } = useScrollChangeNavColor();

return (
    <header style={navState} className={ splitLocation[1] === "" ? "home" : splitLocation[1] }>
        <a className="toggle-nav" id="icons" onClick={handleToggle}>&#9776;</a>
        
        <div className="wrap_nav">
          <nav id="navbar" className={ `hidden${isActive ? " showmenu" : ""}`} >
            <Menu handleToggle={ handleToggle } />
          </nav>
          <div className="brand">
              <Link className="logo" to="/" ><img src={ logo } alt="" /></Link>
          </div>
        </div>
    </header>
  );
}
export default Navbar;