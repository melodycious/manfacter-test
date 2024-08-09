import React, { useState } from 'react';
import { BsArrowsAngleExpand } from "react-icons/bs";
import { BsBox } from "react-icons/bs";

const ImageContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const modalOverlay = {
    position: 'fixed',
    inset: '0',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '1000',
  }

  return (
    <div className="justify-center mb-4 relative">
        <img
          src="/imagen3d.jpg"
          alt="3D Model"
          className="cursor-pointer rounded-lg"
          onClick={handleImageClick}
        />
      
      <div className="absolute right-2 -mt-10 flex">
            <div className="flex items-center justify-center bg-white rounded-full p-2">
                <BsBox className="w-4 h-4 text-gray-600 cursor-pointer" />
            </div>
            <div className="flex items-center justify-center bg-white rounded-full p-2 ml-2">
                <BsArrowsAngleExpand className="w-3 h-3 text-gray-600 cursor-pointer" onClick={handleImageClick} />
            </div>
      </div>
      

      {isModalOpen && (
        <div style={modalOverlay}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={handleCloseModal}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/imagen3d.jpg" alt="3D Model Enlarged" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageContainer;
