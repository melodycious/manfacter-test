import React from 'react';
import logo from './logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between items-center bg-white shadow-md">
      <div className="flex items-center">
        <img src={logo} width="180" className="logo" alt="Logo" />
        <div className="ml-6 flex space-x-4">
          <a href="/" className="text-gray-700 hover:text-blue-500">Home</a>
          <a href="/" className="text-gray-700 hover:text-blue-500">Services</a>
          <a href="/" className="text-gray-700 hover:text-blue-500">Technologies And Materials</a>
          <a href="/" className="text-gray-700 hover:text-blue-500">Resources</a>
          <a href="/" className="text-gray-700 hover:text-blue-500">About Us</a>
          <a href="/" className="text-gray-700 hover:text-blue-500">FAQ</a>
        </div>
      </div>
      <a href="/" className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-700">AI Quotation</a>
    </nav>
  );
};

export default Navbar;
