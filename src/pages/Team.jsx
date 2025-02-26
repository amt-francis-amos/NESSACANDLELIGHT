import React from 'react';
import TeamBanner from '../components/TeamBanner';
import { teams } from '../assets/assets';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Team = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <TeamBanner text="Our Team" />
      <div className="px-5 md:px-20 p-20">
        <h3 className="mb-8 text-purple-900 font-bold text-center text-3xl">
          MEET OUR TEAM
        </h3>
         <div className="w-[100px] mx-auto rounded border-b-4 border-black mb-4"></div>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-7 gap-8">
          {teams.map((team, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                className="w-full h-[300px] object-cover"
                src={team.image}
                alt={team.name}
              />
              <div className="p-5 text-center">
                <h2 className="font-bold text-lg md:text-2xl text-purple-800">
                  {team.name}
                </h2>
                <p className="text-purple-700 text-sm md:text-base">
                  {team.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Team;
