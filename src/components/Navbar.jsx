import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-[1200px] h-[88px] mx-auto flex justify-between items-center px-4">
        
        {/* ---- LOGO ----- */}
        <Link to="/">
          <img className="w-24 cursor-pointer" src={assets.logoImg} alt="Logo" />
        </Link>

        {/* --- MENU LINKS ----- */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-semibold">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Donate Button - Navigates to Donation Page */}
        <Link to="/donate">
          <button className="hidden md:flex bg-purple-600 text-white text-base duration-500 hover:bg-purple-950 py-3 px-7 rounded-md">
            Donate Now
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-6 text-xl text-gray-700 font-semibold transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)}>
            <FaTimes size={24} />
          </button>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/team" onClick={() => setIsOpen(false)}>Team</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/events" onClick={() => setIsOpen(false)}>Events</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

          {/* Mobile Donate Button - Navigates to Donation Page */}
          <Link to="/donate">
            <button 
              className="bg-purple-600 text-white text-base py-3 px-7 rounded-md mt-4"
              onClick={() => setIsOpen(false)}
            >
              Donate Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
