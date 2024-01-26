import React from 'react';
import mesh_image from '../media/mess/mesh.jpg';

const MessMesh = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-4 text-xl">
      <div className="col-span-full mb-4">
        <p className="text-4xl">a mesh/mess of beings</p>
        <p className="text-sm">October, 2023</p>
        <p className="text-sm">2023 - Ars Electronica Festival/Resonating Selves</p>
      </div>
      
      <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 mt-6">
        <img src={mesh_image} alt="a mesh/mess of beings" className="w-full h-auto mb-4" />
        <br />
        <iframe
          src="https://www.youtube.com/embed/xwtfx61H77I?si=Dh0qZAZ9oxTpBqIL"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full"
          style={{ height: '60vh' }}
        ></iframe>
        <p className='mt-2 text-sm'>Video Footages: Volkan Dinçer </p>
      </div>

      <div className="col-span-1 sm:col-span-2 lg:col-span-2 mt-4">
        <div className="text-base sm:text-lg lg:text-3xl ml-4 sm:ml-8 mr-4 sm:mr-8">
          <p>
            Imagine you are a device in a community of interconnected devices. How would you want to organize with others? What is the purpose of receiving, transferring, storing, and processing data for yourself/your community? Exploring these questions raises some of the shortcomings that arise in organizations, such as misinterpretation, and failure to transfer information. A Mesh/Mess Of Beings is a design of an ecosystem of non-human agencies just for themselves without considering the human benefit. It speculates on absurd-yet-plausible relationships between familiar electronic devices that are in conversation with each other. Beings that impose fictional functions on the processing of information envision new possible scenarios for ways of being together. The devices we demand to be user-friendly are becoming citizens in their own societies. Through changes in their functions and aesthetics, the work points to the possibility of political interventions in the design of human organizations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessMesh;
