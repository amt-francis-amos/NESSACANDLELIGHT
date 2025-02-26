
import React from 'react';
import { projects } from '../assets/assets';

const ProjectsOverview = () => {
  

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold text-center mb-6">Our Recent Projects</h2>
      <div className="flex flex-col md:flex-row p-10 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="max-w-sm rounded-lg shadow-lg mb-4">
            <img src={project.imageUrl} alt={project.title} className="rounded-t-lg w-full" />
            <div className="p-10">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsOverview;
