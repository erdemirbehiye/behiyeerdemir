import React from 'react';
import mailgif from '../media/mail.gif'; // Tell webpack this JS file uses this image

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center w-screen min-h-screen'>
      <div className='text-center'>
        <h1 className="max-w-lg text-base lg:text-lg mb-4">
          behiye.erdemir@kunstuni-linz.at
        </h1>
        <iframe
          src={mailgif}
          className="w-full max-w-md mx-auto lg:max-w-lg"
          height="270"
          frameBorder="0"
          title="contact-giphy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
