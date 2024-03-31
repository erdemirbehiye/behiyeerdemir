import React from 'react';
import { Link } from 'react-router-dom';
import wavesImage from '../media/athmosphere_doc/02.jpg';
import circuitousBodiesImage from '../media/circuitous_bodies/veronica.jpg';
import mesh from '../media/mess/mesh.jpg';
import datasetinbetween from '../media/dataset-of-inbetween/datasetinbetween.jpg'
import emphatie from '../media/emphatie-project/9.jpg'
import pixelwise from '../media/pixel-wise-forgetting/25.jpg'
import washingThemes from '../media/washing-images/DALL·E 2024-03-27 22.42.18 - Create an image of a generic glass soda bottle placed in a lush green meadow, implying a natural and eco-friendly theme. The bottle should have no bra.png'
const Works = () => {
  const works = [

    {
      id: 1,
      name: 'Urban Electroscapes',
      image: wavesImage,
      link: '/works/the-athmosphere',
      tag: 'Screenprint',
    },
    {
      id: 2,
      name: 'Washing Themes',
      image: washingThemes,
      link: '/works/washing-themes',
      tag: 'Net',
    },
    {
      id: 3,
      name: 'Circuitous Bodies',
      image: circuitousBodiesImage,
      link: '/works/circuitous-bodies',
      tag: 'Sound Performance',
    },
    {
      id: 4,
      name: 'Emphatie Project',
      image: emphatie,
      link: '/works/emphatie',
      tag: 'Multimedia Performance',
    },
    {
      id: 5,
      name: 'A Mesh/Mess Of Beings',
      image: mesh,
      link: '/works/mess-mesh',
      tag: 'Installation',
    },
    {
      id: 6,
      name: 'Dataset of Inbetween',
      image: datasetinbetween,
      link: '/works/dataset-in-between',
      tag: 'Media Installation',
    },
    {
      id: 7,
      name: 'Pixelwise Forgetting',
      image: pixelwise,
      link: '/works/pixelwise-forgetting',
      tag: 'Net',
    },
   
    
  ];
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 gap-8 text-gray-900 text-lg ml-4 mr-4">
      {works.map((work) => (
        <div key={work.id} className="flex flex-col items-start">
          <img src={work.image} alt={work.name} className="w-full h-auto mt-4" />
          <Link to={work.link}>
            <p className="mt-4 mb-1 text-xl text-gray-400">{work.name}</p>
          </Link>
          <p className="mt-1 mb-1 text-xl text-gray-600">{work.tag}</p>
          
        </div>
      ))}
    </div>
  );
};

export default Works;
