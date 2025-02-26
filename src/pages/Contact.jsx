import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";
import ContactBanner from "../components/ContactBanner";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSuccessMessage("Your message has been sent successfully!");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <ContactBanner text="Contact Us" />
      <div className="container mx-auto px-4 py-12">
      
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {[
            { icon: <FaMapMarkerAlt />, title: "Location", text: "H/No 33 Abuma Street, P.O. Box 2830 Kaneshie, Accra - Ghana" },
            { icon: <FaClock />, title: "Work Hours", text: "Monday - Friday: 7am - 7pm | Weekend: 10am - 5pm" },
            { icon: <FaPhoneAlt />, title: "Contact", text: "+233547704330\n+233545057066" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white backdrop-blur-md bg-opacity-75 w-full sm:w-[300px] rounded-2xl shadow-lg p-6 text-center border border-gray-200 flex flex-col items-center"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
            >
              <div className="text-purple-600 text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 whitespace-pre-line">{item.text}</p>
            </motion.div>
          ))}
        </div>

       
        <motion.div
          className="bg-white w-full max-w-2xl mx-auto rounded-xl shadow-lg p-8 md:p-12 border border-gray-200"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Get In Touch</h2>
          {successMessage && (
            <motion.p
              className="text-green-600 bg-green-100 p-3 rounded-lg text-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {successMessage}
            </motion.p>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-3 rounded-lg hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
      <ScrollToTopButton />
    </motion.div>
  );
};

export default Contact;
