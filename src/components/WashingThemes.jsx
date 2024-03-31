import React from 'react';
import ColorCard from './ColorCard';

const WashingThemes = () => {


  const imageContext = require.context('../media/washing-images/', false, /\.(jpg|jpeg|png)$/);

  const imagePaths = imageContext.keys();

  const images = imagePaths.map(imageContext);
    const cardsData = [
        {
          image: images[0], 
          colors: ['#142611', '#22400C', '#4F731A', '#84A63C','#D9D2BF'],
            
        },
        {
            image: images[1],
            colors: ['#8C031C', '#F25C84', '#F299B9', '#04BF8A','#038C5A'] 
          },
        {
            image: images[2],
            colors: ['#1F5B73', '#C9EBF2', '#026873', '#038C8C','#C9C464'] 
          }
         
      ];

  
    // const tags=['green', 'grass', 'forest']
  return (
    <div className="">
    <div className="col-span-full mb-4">
      <p className="text-4xl">Washing Themes </p>
      <p className="text-sm">Greenwashing Made Easy: Just Copy-Paste These Eco-Friendly Color Codes to Prove How <del>Eco-Friendly</del>  Your Business Really Is</p>
      <p className="text-sm">Ongoing Project</p>
    </div>
    <div className="flex justify-center items-center max-h-screen mt-8">
        <div className="grid grid-cols-3 gap-4 text-white">
            {cardsData.map((card, index) => (
                <div key={index} className="flex flex-col items-center">
                    <ColorCard image={card.image} colors={card.colors} />
                    <div className="mt-2">
                        {/* {tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="text-gray-500 text-sm mr-2">
                                #{tag}
                            </span>
                        ))} */}
                    </div>
                </div>
            ))}
        </div>
    </div>
    </div>
);
}

export default WashingThemes