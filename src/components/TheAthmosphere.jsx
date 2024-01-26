import React from 'react';
import ImageGrid from './ImageGrid.jsx';
import Slideshow from './SlideShow.jsx';

const TheAthmosphere = () => {
  const imageContext = require.context('../media/antennas/', false, /\.(jpg|jpeg|png)$/);
  const docImageContext = require.context('../media/athmosphere_doc/', false, /\.(jpg|jpeg|png)$/);

  const imagePaths = imageContext.keys();
  const docImagePaths = docImageContext.keys();

  const images = imagePaths.map(imageContext);
  const docImages = docImagePaths.map(docImageContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-4 text-xl">
      <div className="col-span-full mb-4">
        <p className="text-4xl">Urban Electroscapes </p>
        <p className="text-sm">November, 2023</p>
      </div>
      
      <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 mt-6">
        <Slideshow images={docImages} />
      </div>

      <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2 mt-4">
        <div className="max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
          <p>The intervention begins within the pages of a discovered book titled "DIE ATMOSPHÄRE." Through the application of the screenprint method, photographs capturing cables, antennas, sky, and clouds are intricately overlaid onto the book's pages. This tactile intervention transforms the book into a canvas, adding layers of texture and depth that mirror the intricate interplay between the physical and the unseen.</p> <br/>
          <p>The city streets, documented in the photographs, serve as the backdrop for the infrastructure of connectivity. Cables weave through the urban fabric, connecting structures, while antennas extend into the sky, reaching for the intangible spaces where electromagnetic waves propagate. </p> <br/>
          <p>The screenprint process, chosen deliberately for its ability to capture the essence of Hertzian Space, introduces visual language to the narrative of "Urban Electroscapes". This intervention reflects the intersection of the analog and the contemporary, the public and the private, the crowded and the quiet within Hertzian Space. Layers on paper invite viewers to consider the intricate relationships between the built environment, technological interventions, and the invisible currents that shape our experience of space.</p><br/>
          <p>"Urban Electroscapes", the screenprint method invites contemplation on the tangible and the intangible, the seen and the unseen, within the urban landscape. It serves as a tactile exploration of Hertzian Space, encouraging viewers to reevaluate their relationship with the atmosphere and the layers that define our contemporary experience of space.
        </p>
        </div>
      </div>

      <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2 mt-4">
        <div className="max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
          <div className="m">
            <h2 className="p-4 text-lg font-bold mb-4">Palette</h2>
            <ImageGrid images={images} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheAthmosphere;
