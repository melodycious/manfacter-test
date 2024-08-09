import React from 'react';
import { FaBox } from "react-icons/fa";
import { GiDroplets } from "react-icons/gi";
import { FaTruckFast } from "react-icons/fa6";
import '../progress/progress.css';

const Progress = () => {
  return (
    <div className="progress-container">
      <div className="progress-line"></div>
      <ul className="progress-list">
        <li className="progress-item">
          <div className="icon-container-not"><FaBox className="icon-not" /></div>
          <p className="progress-text text-xs text-zinc-200 p-2">Upload 3D model</p>
        </li>
        <li className="progress-item">
          <div className="icon-container"><GiDroplets className="icon" /></div>
          <p className="progress-text text-xs text-blue-700 p-2">Customize your order</p>
        </li>
        <li className="progress-item">
          <div className="icon-container-not"><FaTruckFast className="icon-not" /></div>
          <p className="progress-text text-xs text-zinc-200 p-2">Checkout</p>
        </li>
      </ul>
    </div>
  );
};

export default Progress;
