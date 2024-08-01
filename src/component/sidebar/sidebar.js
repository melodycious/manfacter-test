import React from 'react';
import { FaHome, FaShoppingCart, FaBoxOpen, FaTruck, FaUndo, FaRegQuestionCircle } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { BiArrowToLeft } from "react-icons/bi";
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
        <a href="#" className="flex items-center py-2 px-4 hover:bg-white rounded hover:text-blue-800">
          <FaHome />
          <span className={`${isOpen ? 'block' : 'hidden'} ml-4`}>Order</span>
        </a>
        <a href="#" className="flex items-center py-2 px-4 hover:bg-white rounded hover:text-blue-800">
          <FaShoppingCart />
          <span className={`${isOpen ? 'block' : 'hidden'} ml-4`}>Manage cart</span>
        </a>
        <a href="#" className="flex items-center py-2 px-4 hover:bg-white rounded hover:text-blue-800">
          <FaBoxOpen />
          <span className={`${isOpen ? 'block' : 'hidden'} ml-4`}>Unpaid</span>
        </a>
        <a href="#" className="flex items-center py-2 px-4 hover:bg-white rounded hover:text-blue-800">
          <FaTruck />
          <span className={`${isOpen ? 'block' : 'hidden'} ml-4`}>Processing</span>
        </a>
        <a href="#" className="flex items-center py-2 px-4 hover:bg-white rounded hover:text-blue-800">
          <FaUndo />
          <span className={`${isOpen ? 'block' : 'hidden'} ml-4`}>Shipped</span>
        </a>
        <a href="#" className="flex items-center py-2 px-4 hover:bg-white rounded hover:text-blue-800">
          <FaUndo />
          <span className={`${isOpen ? 'block' : 'hidden'} ml-4`}>Returns</span>
        </a>
      </nav>

      <nav className="align-bottom py-2 p-4">
        <a href="#" className="flex items-center py-2 px-4 hover:bg-white rounded hover:text-blue-800">
          <CgProfile />
          <span className={`${isOpen ? 'block' : 'hidden'} ml-4`}>Profile</span>
        </a>
        <a href="#" className="flex items-center py-2 px-4 hover:bg-white rounded hover:text-blue-800">
          <FaRegQuestionCircle />
          <span className={`${isOpen ? 'block' : 'hidden'} ml-4`}>Need help?</span>
        </a>
        <a href="#" className="flex items-center py-2 px-4 hover:bg-white rounded hover:text-blue-800">
            <BiArrowToLeft />
            <button onClick={toggleSidebar} className="text-white hover:bg-white rounded hover:text-blue-800">
            <span className={`${isOpen ? 'block' : 'hidden'} ml-4`}>Hide Sidebar</span>
        </button>
          
        </a>
        
        
      </nav>
    </div>
  );
};

export default Sidebar;
