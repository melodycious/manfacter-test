import React from 'react';
import logo from ".//logo.png";
import './navbar.css';

const Navbar = () => {
    return (
        <>
        <div >
            <nav className="p-4 flex justify-between items-center">
            <img src={logo} width="180" className="logo" />
            <a href="/">Home</a>
            <a href="/">Services</a>
            <a href="/">Technologies And Materials</a>
            <a href="/">Resources</a>
            <a href="/">About Us</a>
            <a href="/">Contact</a>
            <a href="/">FAQ</a>
        </nav>
            </div>
            
        <div></div>
        
        </>
    );
  };
  
  export default Navbar;
