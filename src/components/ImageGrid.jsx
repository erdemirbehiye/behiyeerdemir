// ImageGrid.js
import React, { useState } from 'react';
import ImageModal from './ImageModal.jsx';

const ImageGrid = ({ images}) => {
    const [modalImageUrl, setModalImageUrl] = useState(null);
  
    const openModal = (imageUrl) => {
      setModalImageUrl(imageUrl);
    };
  
    const closeModal = () => {
      setModalImageUrl(null);
    };
    return (
      <div className="grid grid-cols-10 gap-4 p-4">
        {images.map((image, index) => (
          <div key={index} className="cursor-pointer relative overflow-hidden" onClick={() => openModal(image)}>
            <img src={image} alt={`Image ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
  
        {modalImageUrl && <ImageModal imageUrl={modalImageUrl} closeModal={closeModal} />}
      </div>
    );
  };
  
  export default ImageGrid;