import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

 
  const slides = [
    { img: assets.heroImg, title: "Become a great Volunteer", description: "Help today because tomorrow you may be the one who needs more helping!" },
    { img: assets.image9, title: "Join the Movement", description: "Together, we can make a difference!" },
    { img: assets.image7, title: "Empowering Communities", description: "Together, we can empower the poor and the needy" },
  ];

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
   
      <motion.div
        className="absolute w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${slides[currentSlide].img})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Animate content */}
      <motion.div
        className="absolute text-center top-[45%] left-[50%] translate-x-[-50%] text-white"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl md:text-6xl font-bold text-center">{slides[currentSlide].title}</h1>
        <p>{slides[currentSlide].description}</p>
        <button onClick={() => navigate('/contact')} className="bg-purple-600 py-3 hover:bg-purple-950 duration-500 px-8 mt-4 rounded-md">
          Contact Us
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
