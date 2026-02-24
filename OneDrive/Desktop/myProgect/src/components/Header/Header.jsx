import React from 'react';
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="wrapper">
      <header className="container">
        <span className="logo">LOGO</span>
        <nav className="nav">
          <ul>

            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "active" : ""}
                end
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                About us
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/portfolio" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Portfolio
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/news" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                News
              </NavLink>
            </li>

            <li className="btn">
              <NavLink 
                to="/contact"
                className={() => "btn"}
              >
                Contact
              </NavLink>
            </li>

          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;