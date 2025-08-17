import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import WhyChooseUs from './pages/WhyChooseUs';
import Contact from './pages/Contact';
import FloorPolishing from './pages/FloorPolishing';
import CarpetCleaning from './pages/CarpetCleaning';
import CarpetShampooing from './pages/CarpetShampooing';
import CarpetInjection from './pages/CarpetInjection';
import CarpetEncapsulation from './pages/CarpetEncapsulation';
import UpholsteryCleaning from './pages/UpholsteryCleaning';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service/floor-polishing" element={<FloorPolishing />} />
            <Route path="/service/carpet-cleaning" element={<CarpetCleaning />} />
            <Route path="/carpet-shampooing" element={<CarpetShampooing />} />
            <Route path="/carpet-injection" element={<CarpetInjection />} />
            <Route path="/carpet-encapsulation" element={<CarpetEncapsulation />} />
            <Route path="/service/upholstery-cleaning" element={<UpholsteryCleaning />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;