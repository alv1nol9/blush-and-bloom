// src/components/layout/Navbar.jsx

import React from 'react';
import siteLogo from '../../assets/images/logo.svg'; 

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About Us', path: '#about' },
    { name: 'Services', path: '#services' },
    { name: 'Contact', path: '#contact' },
  ];

  const handleSmoothScroll = (e, path) => {
    e.preventDefault();
    const targetId = path.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        // Adjusted offset to 96px to match the new h-24 height
        top: targetElement.offsetTop - 96, 
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-50 transition-all duration-300">
      {/* Reduced max-width and padding to bring elements closer together */}
      <div className="max-w-6xl mx-auto px-6">
        {/* Height changed to h-24 (96px) for a more elegant, balanced profile */}
        <div className="flex justify-between items-center h-24">
          
          {/* --- Logo Area --- */}
          <a 
            href="#home" 
            onClick={(e) => handleSmoothScroll(e, '#home')} 
            className="flex-shrink-0"
          >
            {/* Height set to h-16 to fit perfectly in the h-24 bar */}
            <img 
              src={siteLogo} 
              alt="Blush & Bloom Events Logo" 
              className="h-16 w-auto object-contain" 
            />
          </a>
          
          {/* --- Navigation Links --- */}
          {/* Space-x-8 provides a cleaner gap than the previous wide spacing */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleSmoothScroll(e, link.path)}
                className="text-lg font-serif font-medium text-blush-blue hover:text-bloom-gold transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-bloom-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button className="text-blush-blue">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;