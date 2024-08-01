import React from 'react';
import { FaHome, FaShoppingCart, FaBoxOpen, FaTruck, FaUndo } from 'react-icons/fa';
import whitelogo from '../sidebar/logoblanco.png';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`flex flex-col bg-blue-700 text-white h-screen transition-width duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
      <div className="flex items-center justify-between p-4">
        <div className={`${isOpen ? 'block' : 'hidden'} text-xl`}>
          <img src={whitelogo} className="logo" alt="Logo" />
        </div>
        <button onClick={toggleSidebar} className="text-white">
          {isOpen ? '<' : '>'}
        </button>
      </div>
      <nav className="flex flex-col flex-1 p-4">
        <a href="#" className="flex items-center py-2 px-4 hover:bg-blue-600 rounded">
          <FaHome />
          <span className={`${isOpen ? 'block' : 'hidden'} ml-4`}>Order</span>
        </a>
        <a href="#" className="flex items-center py-2 px-4 hover:bg-blue-600 rounded">
          <FaShoppingCart />
          <span className={`${isOpen ? 'block' : 'hidden'} ml-4`}>Manage cart</span>
        </a>
        <a href="#" className="flex items-center py-2 px-4 hover:bg-blue-600 rounded">
          <FaBoxOpen />
          <span className={`${isOpen ? 'block' : 'hidden'} ml-4`}>Unpaid</span>
        </a>
        <a href="#" className="flex items-center py-2 px-4 hover:bg-blue-600 rounded">
          <FaTruck />
          <span className={`${isOpen ? 'block' : 'hidden'} ml-4`}>Processing</span>
        </a>
        <a href="#" className="flex items-center py-2 px-4 hover:bg-blue-600 rounded">
          <FaUndo />
          <span className={`${isOpen ? 'block' : 'hidden'} ml-4`}>Shipped</span>
        </a>
        <a href="#" className="flex items-center py-2 px-4 hover:bg-blue-600 rounded">
          <FaUndo />
          <span className={`${isOpen ? 'block' : 'hidden'} ml-4`}>Returns</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
