import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Events from "./pages/Events";
import DonationPage from "./pages/DonationPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/about"  element={<About />} />
      <Route path="/gallery"  element={<Gallery />} />
      <Route path="/team"  element={<Team/>} />
      <Route path="/projects"  element={<Projects />} />
      <Route path="/events"  element={<Events />} />
      <Route path="/donate"  element={<DonationPage />} />
      <Route path="/contact"  element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
