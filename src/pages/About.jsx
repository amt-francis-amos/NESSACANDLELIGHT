import React from "react";
import AboutBanner from "../components/AboutBanner";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import ScrollToTopButton from "../components/ScrollToTopButton";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <AboutBanner text="About Us" />

    
      <motion.div 
        className="max-w-7xl mx-auto mt-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">We Work Together</h1>
        <motion.div 
          className="w-[120px] mx-auto rounded border-b-4 border-purple-600 mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        />
        <p className="text-lg max-w-[600px] mx-auto text-gray-600 mb-12">
          Teamwork is the secret that makes common people achieve uncommon results. The strength of the team is each individual member.
        </p>
      </motion.div>

      
      <div className="max-w-7xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-5xl text-center md:text-left font-semibold text-gray-800 mb-6">
            We Are a Non-Profit Organization
          </h2>
          <p className="text-lg text-center md:text-left text-gray-600">
            We play a crucial role in filling gaps where government resources may be limited or inaccessible. We advocate for marginalized populations, empowering communities through programs that promote sustainable development.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Unlike for-profit businesses, NGOs reinvest any surplus funds into their mission. We focus on education, healthcare, human rights, environmental conservation, and more.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img
            src={assets.image1}
            alt="NGO Team"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
      <motion.div
        className="max-w-7xl mx-auto mt-24 text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our History and Mission</h2>
        <motion.div 
          className="w-[120px] mx-auto rounded border-b-4 border-purple-600 mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        />
        <p className="text-lg text-gray-600 mb-6">
          Founded in 2023, our NGO was created with the aim to address critical needs in underdeveloped communities. Over the years, we've grown into a leader in sustainable development.
          Our mission is to empower underserved populations by providing essential services, advocating for social justice, and promoting education and equality. We believe in creating lasting, positive change.
        </p>
      </motion.div>

  
      <motion.div 
        className="max-w-7xl mx-auto mt-24 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Our Past Events</h2>
        <motion.div 
          className="w-[120px] mx-auto rounded border-b-4 border-purple-600 mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { src: assets.newImg8, alt: "Past Event 1" },
            { src: assets.paintImg1, alt: "Past Event 2" },
            { src: assets.paintImg2, alt: "Past Event 3" },
          ].map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={event.src}
                alt={event.alt}
                className="w-full h-72 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <ScrollToTopButton />
    </div>
  );
};

export default About;
