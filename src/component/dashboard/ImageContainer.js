import React, { useState } from 'react';

const ImageContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-3/4 bg-white p-6 rounded-lg shadow-lg ml-10">
      <div className="flex justify-center mb-4">
        <img
          src="/imagen3d.jpg"
          alt="3D Model"
          className="w-2/3 cursor-pointer"
          onClick={handleImageClick}
        />
      </div>
      <div className="text-center">
        <p className="text-gray-600">Size: 124.9 x 199.5 x 385 mm</p>
        <p className="text-gray-600">Volume: 9.62 cm<sup>3</sup></p>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={handleCloseModal}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="ruta_a_tu_imagen.png" alt="3D Model Enlarged" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageContainer;
