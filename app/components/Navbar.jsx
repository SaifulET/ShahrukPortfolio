"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-[#0f5a4f] shadow-md z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="flex items-center text-2xl font-bold text-[#ceaf87]">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-6 h-6 mr-2"
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            viewBox="0 0 24 24"
          >
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 3H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z"></path>
          </svg>
          Zahidul Islam
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="text-white hover:text-blue-400">Home</a>
          <a href="#education" className="text-white hover:text-blue-400">Education</a>
          <a href="#gallery" className="text-white hover:text-blue-400">Gallery</a>
          <a href="#company" className="text-white hover:text-blue-400">Company</a>
          <a href="#services" className="text-white hover:text-blue-400">Services</a>
          <a href="#contact" className="text-white hover:text-blue-400">Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#0f5a4f] px-4 pb-4 flex flex-col space-y-3"
        >
          <a href="#hero" className="text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#education" className="text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>Education</a>
          <a href="#gallery" className="text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>Gallery</a>
          <a href="#company" className="text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>Company</a>
          <a href="#services" className="text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#contact" className="text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>Contact</a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
