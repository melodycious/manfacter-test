import React from 'react';
import logo from ".//logo.png";

const Navbar = ({ toggleSidebar }) => {
    return (
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <button onClick={toggleSidebar} className="text-white">
         <img src={logo} className="logo"/>
        </button>
        <div className="text-xl">Manfactur</div>
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

/* const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <img src={logo} className="logo"/>
                <a href="/">Home</a>
                <a href="/">Services</a>
                <a href="/">Technologies And Materials</a>
                <a href="/">Resources</a>
                <a href="/">About Us</a>
                <a href="/">Contact</a>
                <a href="/">FAQ</a>
      
    </nav>
        </div>
    );
};

export default Navbar;
 */