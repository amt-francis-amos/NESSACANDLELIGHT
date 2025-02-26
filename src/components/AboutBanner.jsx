import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const AboutBanner = ({ text }) => {
  return (
    <div
      className="relative w-full min-h-[400px] bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${assets.image3})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <motion.div
        className="absolute text-center top-[45%] left-[50%] translate-x-[-50%] text-white"
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
      
        <h1 className="text-2xl md:text-6xl font-bold text-center">{text}</h1>

       
        <div className="mt-4 text-base">
          <Link to="/" className="hover:underline text-white font-semibold">
            HOME
          </Link>
          <span className="mx-2">|</span>
          <span className="text-gray-300">ABOUT</span>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutBanner;
