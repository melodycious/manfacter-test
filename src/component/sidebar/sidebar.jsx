import React, { useState, useEffect } from 'react';
import { FaBox, FaShoppingCart, FaTruck, FaUndo, FaRegQuestionCircle, FaRegCreditCard } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { GiSandsOfTime } from "react-icons/gi";
import whitelogo from '../sidebar/logoblanco.png';
import icon from '../sidebar/icon.png';

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false); 
      } else {
        setIsOpen(true); 
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 
    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex flex-col bg-blue-900 text-white rounded-r-lg mt-3 duration-300 
        ${isOpen ? 'w-64' : 'w-18'}
        ${!isOpen ? 'sm:w-20 md:w-24' : 'sm:w-48 md:w-64'}
        max-h-[85vh] overflow-y-auto`}>

        <div className="flex items-center justify-between p-3">
        <img
            src={isOpen ? whitelogo : icon }
            className="logo p-3"
            alt={isOpen ? "Logo blanco" : "Logo icono"}
        />
        </div>
      <nav className="flex flex-col flex-1 p-3 space-y-1">
        <a href="#" className="flex items-center py-2 px-4 hover:bg-white rounded hover:text-blue-800">
          <FaBox size={24} />
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

      <nav className="flex flex-col p-3 space-y-1">
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
