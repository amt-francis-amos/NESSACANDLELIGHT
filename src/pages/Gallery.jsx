import React, { useState } from 'react';
import GalleryBanner from '../components/GalleryBanner';
import {imageData } from '../assets/assets';
import ScrollToTopButton from '../components/ScrollToTopButton';


const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <GalleryBanner text="Gallery" />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 p-20">
        {imageData.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img src={image.url} alt="Gallery Image" className="w-full h-[50vh] object-cover" />
          </div>
        ))}
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Gallery;
