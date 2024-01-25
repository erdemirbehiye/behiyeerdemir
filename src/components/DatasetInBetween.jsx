import React from 'react';
import dataset_image from '../media/dataset-of-inbetween/datasetofinbetween_viki.jpg';

const DatasetInBetween = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-4 text-xl">
      <div className="col-span-full mb-4">
        <p className="text-4xl">Dataset Of In-between</p>
        <p className="text-sm">June, 2023</p>
        <p className="text-sm">Quantified Perspectives: Rethinking Data Narratives @ Computational Creativity Hub at University of Luxembourg</p>
      </div>
      
      <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 mt-6">
        <img src={dataset_image} alt="Dataset Of In-between" className="w-full h-auto" />
        <p className='mt-2 text-sm'>Photo Credit: Viktoria Angyal </p>
        <br />
        <iframe
          src="https://www.youtube.com/embed/6zJSYn3p15E?si=TiPbF-SmbgDLeJMf"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full"
          style={{ height: '60vh' }}
        ></iframe>
      </div>

      <div className="col-span-1 sm:col-span-2 lg:col-span-2 mt-4">
        <div className="text-base sm:text-lg lg:text-3xl ml-4 sm:ml-8 mr-4 sm:mr-8">
          <p>
            What are the alternatives for reorganizing the dataset, which categorizes different emotions with facial expressions in order to classify emotions? By exploring the latent space representations of the prepared dataset, Dataset of In-between aims to uncover hidden or undiscovered aspects of facial expressions. It delves into the complexity of human emotions, emphasizing that emotions cannot be reduced to singular, isolated expressions. Instead, the artwork suggests that emotions exist along a continuum and are interconnected, challenging the notion of discrete and separate emotional categories.
          </p>
          <br/><br/>
          <p>
            Through the utilization of Machine Learning techniques, the artwork aims to synthesize a new dataset that captures the nuanced variations and transitions within facial expressions. By doing so, it sheds light on the multifaceted nature of emotions and questions the traditional approach of categorizing emotions into distinct categories.
          </p>
          <br/><br/>
          <p>
            Overall, the artwork seeks to explore the intricate world of facial expressions, revealing the richness and complexity that lies within the hidden spaces between emotions. It invites viewers to contemplate the nuances and interconnectedness of human emotions, questioning the limitations of traditional categorizations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DatasetInBetween;
