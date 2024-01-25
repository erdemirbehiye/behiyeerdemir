import React from 'react';
import Slideshow from './SlideShow.jsx';

const Emphatie = () => {
  const imageContext = require.context('../media/emphatie-project', false, /\.(jpg|jpeg|png)$/);

  const imagePaths = imageContext.keys();
  const images = imagePaths.map(imageContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-4 text-xl">
      <div className="col-span-full mb-4">
        <p className="text-4xl">Empatie Project </p>
        <p className="text-sm">June, 2023</p>
        <p className="text-sm">Deep Space/Ars Electronica Center Linz, Austria</p>
      </div>

      <div className="col-span-1 sm:col-span-2 lg:col-span-3 mt-6">
        <Slideshow images={images} />
        <p className='mt-2 text-sm'>Photo Credit: Ars Electronica Center </p>
      </div>

      <div className="col-span-1 sm:col-span-2 lg:col-span-2 mt-4">
        <div className="text-base sm:text-lg lg:text-3xl ml-4 sm:ml-8 mr-4 sm:mr-8">
          <p>
            The collaborative multimedia performance emerges from the fusion of scientific exploration into empathy and artistic expression. Dr. Raimund Kleiser, a medical physicist at the Neuromedcampus of Kepler University Hospital, contributes insights from functional magnetic resonance imaging (fMRI), providing a scientific foundation. Executed by ABPU students, with visual elements crafted by Ozan Tezvaran and Behiye Erdemir, the performance transcends disciplinary boundaries, weaving together images, dance, and language into a captivating showcase.
          </p>
          <br />
          <p>Music: Aus Der Hohle</p>
        </div>
      </div>

      <div className='col-span-1 sm:col-span-2 lg:col-span-3 mt-4'>
        <iframe src="https://drive.google.com/file/d/1LKHwDo5A593mcAzGWvEmKnbjRDhx4rN8/preview" allow="autoplay" className="w-full h-full" style={{ height: '60vh' }}></iframe>
        <p className='mt-2 text-sm'>Video Footage: Ars Electronica Center </p>
        <p className='mt-2 text-sm'>Video Credit: Ozan Tezvaran </p>
      </div>
    </div>
  );
};

export default Emphatie;
