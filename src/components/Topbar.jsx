import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <>
    <div className="topbar pb-1 pt-1 flex flex-col sm:flex-row justify-between items-center text-sm ml-4 sm:ml-8 mr-4 sm:mr-8 text-gray-400">
      <div className="left-menu mb-4 sm:mb-0">
        <Link to="/works" className="mr-2 hover:text-pink-500">behiye erdemir</Link>
        <Link to="/about" className=" mr-2  sm:p-6 hover:text-black cursor-pointer">about</Link>
        <Link to="/contact" className=" mr-2  sm:p-6 hover:text-black cursor-pointer">contact</Link>
      </div>
      
    </div>
    <div className="border-b border-gray-400 w-full"></div>
    </>
  );
};

export default Topbar;
