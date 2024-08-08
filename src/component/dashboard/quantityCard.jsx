import React, { useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdMoreVert } from "react-icons/md";

const QuantityCard = () => {
  const [quantity, setQuantity] = useState(1);
  const [enabled, setEnabled] = useState(true);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const toggleEnabled = () => setEnabled(!enabled);

  return (

    <div className="p-3 bg-white border-2 rounded-lg flex flex-col items-start justify-between">
      
      <div className="w-full flex justify-between items-center mb-4">
        <div className="flex items-center">
        <button
          className={`w-8 h-4 rounded-full focus:outline-none transition-colors ${
            enabled ? 'bg-blue-500' : 'bg-gray-300'
          }`}
          onClick={toggleEnabled}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
              enabled ? 'translate-x-4' : ''
            }`}
          />
        </button>

        <div className="flex ml-2">
          <button
            className="bg-gray-200 text-gray-700 w-6 h-6 rounded-l-md text-xs"
            onClick={handleDecrement}
          >
            -
          </button>
          <div className="w-8 h-6 flex items-center justify-center bg-gray-100 text-xs">
            {quantity}
          </div>
          <button
            className="bg-gray-200 text-gray-700 w-6 h-6 rounded-r-md text-xs"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        </div>

        <div className="flex items-center">
            <button >
                <RiDeleteBin6Line className="text-blue-500 hover:text-blue-700" />
            </button>
            <button >
                <MdMoreVert className="text-blue-500 hover:text-blue-700" />
            </button>
        </div>
        </div>
        
      
        <div className="flex items-center w-full">
        <img
          src="/imagen3d.jpg"
          alt="3D Model"
          className="w-16 h-16 rounded-md mr-4"
          />
          <div>
            <h2 className="text-sm font-semibold">part_v01.stl</h2>
            <p className="text-xs text-gray-500">124,9 x 199.5 x 385 mm</p>
          </div>
        </div>
      </div>
  );
};

export default QuantityCard;
