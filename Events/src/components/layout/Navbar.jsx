// src/components/layout/Navbar.jsx

import React from 'react';
// 1. Import your logo file
import siteLogo from '../../assets/images/logo.png'; // Update extension if needed (e.g., logo.svg)

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About Us', path: '#about' },
    { name: 'Services', path: '#services' },
    { name: 'Contact', path: '#contact' },
  ];

  // Function to handle smooth scrolling when clicking a link
  const handleSmoothScroll = (e, path) => {
    e.preventDefault();
    const targetId = path.substring(1); // Remove the '#'
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for fixed navbar height
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* --- Logo/Brand (Image) --- */}
          <a 
            href="#home" 
            onClick={(e) => handleSmoothScroll(e, '#home')} 
            className="flex-shrink-0"
          >
            {/* Using an image tag for the logo */}
            <img 
              src={siteLogo} 
              alt="Blush & Bloom Events Logo" 
              className="h-12 w-auto" // Set max height for visual balance
            />
          </a>
          
          {/* --- Navigation Links (Same as before) --- */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleSmoothScroll(e, link.path)}
                className="text-lg font-medium transition duration-300 relative group text-blush-blue hover:text-bloom-gold flex items-center h-full"
              >
                {link.name}
                {/* Underline effect on hover */}
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-bloom-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}
          </div>

          {/* --- Mobile/Utility --- */}
          <div className="md:hidden">
            <button className="text-blush-blue hover:text-bloom-gold focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;