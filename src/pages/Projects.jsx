import React from "react";
import ProjectBanner from "../components/ProjectBanner";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { motion } from "framer-motion";
import {projectsItems} from '../assets/assets'



const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <ProjectBanner text="Our Projects" />

      <motion.div
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {projectsItems.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <ScrollToTopButton />
    </div>
  );
};

export default Projects;
