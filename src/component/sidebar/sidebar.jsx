import React from 'react';
import { FaHome, FaShoppingCart, FaTruck, FaUndo, FaRegQuestionCircle, FaRegCreditCard } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { GiSandsOfTime } from "react-icons/gi";
import whitelogo from '../sidebar/logoblanco.png';
import icon from '../sidebar/icon.png';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`flex flex-col bg-blue-700 text-white rounded-r-lg mt-3 duration-300 ${isOpen ? 'w-64' : 'w-18'}`}>

        <div className="flex items-center justify-between p-3">
        <img
            src={isOpen ? whitelogo : icon }
            className="logo p-3"
            alt={isOpen ? "Logo blanco" : "Logo icono"}
        />
        </div>
      <nav className="flex flex-col flex-1 p-3">
        <a href="#" className="flex items-center py-2 px-4 hover:bg-white rounded hover:text-blue-800">
          <FaHome size={24} />
          <span className={`${isOpen ? 'block' : 'hidden'} ml-4`}>Order</span>
        </a>
        <a href="#" className="flex items-center py-2 px-4 hover:bg-white rounded hover:text-blue-800">
          <FaShoppingCart size={24} />
          <span className={`${isOpen ? 'block' : 'hidden'} ml-4`}>Manage cart</span>
        </a>
        <a href="#" className="flex items-center py-2 px-4 hover:bg-white rounded hover:text-blue-800">
          <FaRegCreditCard size={24} />
          <span className={`${isOpen ? 'block' : 'hidden'} ml-4`}>Unpaid</span>
        </a>
        <a href="#" className="flex items-center py-2 px-4 hover:bg-white rounded hover:text-blue-800">
          <GiSandsOfTime size={24} />
          <span className={`${isOpen ? 'block' : 'hidden'} ml-4`}>Processing</span>
        </a>
        <a href="#" className="flex items-center py-2 px-4 hover:bg-white rounded hover:text-blue-800">
          <FaTruck size={24} />
          <span className={`${isOpen ? 'block' : 'hidden'} ml-4`}>Shipped</span>
        </a>
        <a href="#" className="flex items-center py-2 px-4 hover:bg-white rounded hover:text-blue-800">
          <FaUndo size={24} />
          <span className={`${isOpen ? 'block' : 'hidden'} ml-4`}>Returns</span>
        </a>
      </nav>

      <nav className="flex flex-col p-3">
        <a href="#" className="flex items-center py-2 px-4 hover:bg-white rounded hover:text-blue-800">
          <CgProfile size={24} />
          <span className={`${isOpen ? 'block' : 'hidden'} ml-4`}>Profile</span>
        </a>
        <a href="#" className="flex items-center py-2 px-4 hover:bg-white rounded hover:text-blue-800">
          <FaRegQuestionCircle size={24} />
          <span className={`${isOpen ? 'block' : 'hidden'} ml-4`}>Need help?</span>
        </a>
        
        <button onClick={toggleSidebar} className="flex items-center py-2 px-4 hover:bg-white rounded hover:text-blue-800">
          {isOpen ? <BiArrowToLeft size={24} /> : <BiArrowToRight size={24} />}<span className={`${isOpen ? 'block' : 'hidden'} ml-4`}>Hide Sidebar</span>
          </button>
        
      </nav>
    </div>
  );
};

export default Sidebar;
