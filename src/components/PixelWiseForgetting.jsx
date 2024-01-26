import React from 'react';
import Slideshow from './SlideShow.jsx';

const PixelWiseForgetting = () => {
  const imageContext = require.context('../media/pixel-wise-forgetting/', false, /\.(jpg|jpeg|png)$/);  
  const imagePaths = imageContext.keys();
  const images = imagePaths.map(imageContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mx-4 text-xl">
      <div className="col-span-full mb-4">
        <p className="text-4xl">Pixel-Wise Forgetting</p>
        <p className="text-sm">2021</p>
        <p className="text-sm">Das Weisse Haus</p>
      </div>
      
      <div className="col-span-1 sm:col-span-2 mt-6">
        <Slideshow images={images} />
      </div>

      <div className="col-span-1 sm:col-span-2 lg:col-span-3 mt-4">
        <div className="text-base sm:text-lg lg:text-3xl ml-4 sm:ml-8 mr-4 sm:mr-8">
          <p>The screenshots on my computer are an archive to store information that needs to be done, checked, and watched, read. It is the memory of me in the data space. It does not have a human-like forgetting process. So, mimicking forgetting in digital, the random distortions applied to the screenshots every time I turn on my computer aim to forget my archive pixel by pixel.</p> <br/>
        </div>
      </div>
    </div>
  );
};

export default PixelWiseForgetting;
