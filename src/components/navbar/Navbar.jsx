import React,{useRef} from "react";
import "./style.css";
import { Link, NavLink } from "react-router-dom";
import { X, AlignJustify } from "react-feather";
function Navbar() {
  const navRef = useRef();
  return (
    <div className="navbar">
      <nav className="navigation-bar">
        <div className="navbar-left">
          <img className="aliyas-logo" src=".././assets/aliyas.png"/>
        </div>
        <div className="navbar-option" ref={navRef}>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/services">SERVICES</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT US</NavLink>
            </li>
          </ul>
          <X className="hamberger-close" color="#fff" size={"25px"} onClick={()=>(navRef.current.style.maxHeight = "0px")}/>
        </div>
        <AlignJustify
            className="hamburger"
            color="#fff"
            onClick={() => (navRef.current.style.maxHeight = "150px")}
          />
      </nav>
    </div>
  );
}

export default Navbar;
