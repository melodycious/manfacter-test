import React from 'react';
import logo from ".//logo.png";
import './navbar.css';

const Navbar = ({ toggleSidebar }) => {
    return (
      <nav className="p-4 flex justify-between items-center">
        <button onClick={toggleSidebar} className="text-white">
         <img src={logo} width="180" className="logo"/>
        </button>
                <a href="/">Home</a>
                <a href="/">Services</a>
                <a href="/">Technologies And Materials</a>
                <a href="/">Resources</a>
                <a href="/">About Us</a>
                <a href="/">Contact</a>
                <a href="/">FAQ</a>
      </nav>
    );
  };
  
  export default Navbar;
