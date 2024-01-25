
// ImageModal.js
import React from 'react';
import closeButtonImage from '../media/cross-icon.png';

const ImageModal = ({ imageUrl, closeModal }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      // Clicked on the overlay (outside the modal)
      closeModal();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={handleOverlayClick}>
      <div className="w-1/4 max-h-screen overflow-auto p-4 bg-white rounded-md relative">
        <img src={imageUrl} alt="Enlarged" className="w-full h-auto rounded-md" />
        <button className="absolute top-0 right-0 mt-2 mr-2 p-2 bg-transparent" onClick={closeModal}>
          <img src={closeButtonImage} alt="Close" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;