import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; 
import EventBanner from "../components/EventBanner";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { eventsData } from "../assets/assets";

const Events = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredEvents = eventsData.filter(
    (event) =>
      (filter === "All" || event.category === filter) &&
      event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <EventBanner text="Upcoming Events" />

     
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 p-10">
      
        <div className="relative w-full md:w-1/3">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search events..."
            className="pl-10 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

    
        <select
          className="p-2 border border-gray-300 rounded-md mt-4 md:mt-0"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Education">Education</option>
          <option value="Health">Health</option>
          <option value="Food">Food</option>
        </select>
      </div>

   
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-10">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-10">
                <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.date} - {event.location}</p>
                <p className="mt-2 text-gray-700">{event.description}</p>
                
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No events found.</p>
        )}
      </div>

      <ScrollToTopButton />
    </div>
  );
};

export default Events;
