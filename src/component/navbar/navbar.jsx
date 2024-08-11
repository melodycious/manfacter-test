import React, { useState } from 'react';
import logo from './logo.png';
import './navbar.css';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 flex justify-between items-center bg-white shadow-md relative z-50">
      <div className="flex items-center">
        <img src={logo} width="180" className="logo" alt="Logo" />
        <div className="hidden md:flex ml-6 space-x-4">
          <a href="/" className="text-gray-700 hover:text-blue-500">Home</a>
          <a href="/" className="text-gray-700 hover:text-blue-500">Services</a>
          <a href="/" className="text-gray-700 hover:text-blue-500">Technologies And Materials</a>
          <a href="/" className="text-gray-700 hover:text-blue-500">Resources</a>
          <a href="/" className="text-gray-700 hover:text-blue-500">About Us</a>
          <a href="/" className="text-gray-700 hover:text-blue-500">Contact</a>
          <a href="/" className="text-gray-700 hover:text-blue-500">FAQ</a>
        </div>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <div className="hidden md:block">
        <a href="/" className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-700">AI Quotation</a>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-50">
          <div className="flex flex-col items-center space-y-4 p-4">
            <a href="/" className="text-gray-700 hover:text-blue-500">Home</a>
            <a href="/" className="text-gray-700 hover:text-blue-500">Services</a>
            <a href="/" className="text-gray-700 hover:text-blue-500">Technologies And Materials</a>
            <a href="/" className="text-gray-700 hover:text-blue-500">Resources</a>
            <a href="/" className="text-gray-700 hover:text-blue-500">About Us</a>
            <a href="/" className="text-gray-700 hover:text-blue-500">Contact</a>
            <a href="/" className="text-gray-700 hover:text-blue-500">FAQ</a>
            <a href="/" className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-700">AI Quotation</a>
          </div>
        </div>
      )}
    </nav>

    
  );
};

export default Navbar;
