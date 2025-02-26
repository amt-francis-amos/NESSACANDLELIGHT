import React from "react";
import { FaArrowUp } from "react-icons/fa";  

const ScrollToTopButton = () => {
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-10 right-10 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-800 transition-all duration-300"
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;
