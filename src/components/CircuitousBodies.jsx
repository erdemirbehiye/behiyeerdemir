import React from 'react';

const CircuitousBodies = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-4 text-xl">
      <div className="col-span-full mb-4">
        <p className="text-4xl">Circuitous Bodies</p>
        <p className="text-sm">September, 2023</p>
        <p className="text-sm">Arse/Ars Electronica Festival - DH5 Sexponential 2023 Linz, Austria</p>
      </div>

      <div className="col-span-1 sm:col-span-2 lg:col-span-3 mt-5">
        <iframe
          src="https://www.youtube.com/embed/FKqGDM8SORM?si=tBhhxb2bSHYp1zvw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full"
          style={{ height: '60vh' }}
        ></iframe>
        <p className='mt-2 text-sm'>Video Credit: Volkan Dinçer </p>
      </div>

      <div className="col-span-1 sm:col-span-2 lg:col-span-2 mt-4 text-base sm:text-lg lg:text-3xl ml-4 sm:ml-8 mr-4 sm:mr-8">
        <p>
          The nail not only physically goes beyond the norm but also bends social space by challenging rigid norms around gender. Circuitous Bodies were realized through nail art to bend this social space with a sonic space. The circuits are applied to the nails to build sound oscillators. The sounds produced by oscillators embedded on the nails change according to the movements of the performer. Within the performance, a political and performative act mirrors the sound field as noise. In this way, establishing new relations between noise and nail art that are ways of expression of queer people is the basis of this project.
        </p>
        <br/>
        <p>Collaborated with Volkan Dinçer.</p>
        <p>Performed by Veronica Pace.</p>
      </div>
    </div>
  );
};

export default CircuitousBodies;
