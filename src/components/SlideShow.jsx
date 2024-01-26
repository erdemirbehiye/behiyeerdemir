import React, { useState, useEffect } from 'react';

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div
      className='mx-auto relative'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Slideshow */}
      <div className='relative'>
        {/* Add transparency to the slideshow */}
        <div className='opacity-100'>
          {/* Display only the current image in the slideshow */}
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className='w-full h-full object-cover'
          />
        </div>
      </div>

      {/* Navigation Arrows */}
      <div
        className={`absolute top-0 left-4 right-4 bottom-0 flex items-center justify-between 
          transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <button
          onClick={prevImage}
          className='text-black text-2xl p-2 '
        >
          &lt;
        </button>
        <button
          onClick={nextImage}
          className='text-black text-2xl p-2 '
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
