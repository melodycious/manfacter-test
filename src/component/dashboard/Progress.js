import React from 'react';
import { FaBox } from "react-icons/fa";
import { GiDroplets } from "react-icons/gi";
import { FaTruckFast } from "react-icons/fa6";

const Progress = () => {
  return (
    <div className="w-1/4">
       <ul className="space-y-4">
        <li className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center"><FaBox size={18} /></div>
          <span className="ml-2 text-gray-500">Upload 3D model</span>
        </li>
        <li className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center"><GiDroplets size={24} /></div>
          <span className="ml-2 text-blue-500">Customize your order</span>
        </li>
        <li className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center"><FaTruckFast size={24} /></div>
          <span className="ml-2 text-gray-500">Checkout</span>
        </li>
      </ul>
    </div>
  );
};

export default Progress;
