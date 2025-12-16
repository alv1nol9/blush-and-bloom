// src/pages/About.jsx

import React from 'react';
// 1. Import your About Us background image
// We use '../../' to go up two levels from src/pages/About.jsx to src/
import aboutBgImage from '../assets/images/about_bg.jpg'; 

function About() {
  return (
    // 'h-screen' ensures the section is full height for the single-page scroll feel
    <section 
      id="about" 
      className="h-screen relative w-full flex items-center justify-center p-10 overflow-hidden"
      // 2. Apply the image background using inline style and Tailwind properties
      style={{ 
        backgroundImage: `url(${aboutBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      
      {/* --- 1. Semi-Transparent Overlay --- 
          Use a deep color overlay (Blush Blue) for text readability, but keep it subtle. */}
      <div className="absolute z-10 w-full h-full bg-blush-blue opacity-70"></div>
      
      {/* --- 2. Content Container --- */}
      <div className="relative z-20 max-w-4xl text-white text-center p-10 bg-black/40 rounded-xl shadow-2xl">
        
        {/* Title */}
        <h2 className="text-6xl font-serif font-extrabold text-bloom-gold mb-6 tracking-wide">
          Our Story
        </h2>

        {/* Separator */}
        <div className="w-24 h-1 bg-bloom-gold mx-auto mb-8 rounded"></div>

        {/* Content Paragraphs */}
        <p className="text-xl font-light leading-relaxed mb-6">
          Founded on a passion for timeless elegance and personalized experiences, **Blush & Bloom** is more than just an event company—we are curators of cherished memories. We believe every celebration should be as unique and radiant as the clients we serve.
        </p>
        
        <p className="text-xl font-light leading-relaxed italic text-white/90">
          "From the first consultation to the final flourish, we bring a meticulous eye for detail and a heart full of dedication to your special day."
        </p>
        
        {/* Call to Action */}
        <button className="mt-10 px-8 py-3 bg-bloom-gold text-blush-blue text-lg font-semibold rounded-full hover:bg-opacity-90 transition duration-300">
          Meet Our Team
        </button>
      </div>

    </section>
  );
}

export default About;