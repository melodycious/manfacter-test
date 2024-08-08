import React, { useState } from 'react';

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
    <div className="justify-center mb-4">
        <img
          src="/imagen3d.jpg"
          alt="3D Model"
          className="cursor-pointer"
          onClick={handleImageClick}
        />
      
      <div className="text-center text-sm">
        <p className="text-gray-600"><b>Size:</b> 124.9 x 199.5 x 385 mm</p>
        <p className="text-gray-600"><b>Volume:</b> 9.62 cm<sup>3</sup></p>
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
