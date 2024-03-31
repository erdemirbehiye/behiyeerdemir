// ColorCard.jsx
import React, { useState } from 'react';
import './ColorCard.css';

function ColorCard({ image, colors }) {
  const [isHovered, setIsHovered] = useState(false);

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
  };

  return (
    <div
      className="color-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered ? (
        <img src={image} alt="Color Card" />
      ) : (
        <div className="color-themes">
          {colors.map((color, index) => (
            <div key={color} className="color-segment" style={{ backgroundColor: color }}>
              <button
                className="color-button"
                onClick={() => copyToClipboard(color)}
                style={{ border: 'none', cursor: 'pointer' }}               >
                {color}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ColorCard;
