import React, { useRef } from "react";
import "./style.css";
import { Link, NavLink } from "react-router-dom";
import { X, AlignJustify } from "react-feather";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();
  return (
    <div className="navbar">
      <nav className="navigation-bar">
        <div className="navbar-left">

          <h2>Hassan <span id="logoname"> Mehdi</span></h2>

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

          <X className="hamberger-close" color="#fff" size={"25px"} onClick={() => (navRef.current.style.maxHeight = "0px")} />
        </div>
        <AlignJustify
          className="hamburger"
          color="#fff"
          onClick={() => (navRef.current.style.maxHeight = "150px")}
        />

        <p id="githublink"> <a href="https://github.com/hassanmehdi64" target="_blank">Github <FaGithub /></a></p>
      </nav>
    </div>
  );
}

export default Navbar;
