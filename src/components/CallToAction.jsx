import React from 'react';
import { assets } from '../assets/assets';

const CallToAction = () => {
  return (
    <div 
      className="relative text-white text-center p-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.newImg6})`, backgroundAttachment: 'fixed' }}
    >
     
      <div className="absolute inset-0 bg-purple-600 opacity-70"></div>
      
      <div className="relative z-10">
        <h2 className="text-xl md:text-5xl font-semibold">Make a Difference Today!</h2>
        <p className="mb-4">Your support helps us bring positive change to communities.</p>
        <div>
          <button className="bg-white text-purple-700 px-8 py-3 rounded-full mx-2">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
