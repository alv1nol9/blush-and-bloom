// src/pages/Home.jsx

import React from 'react';
// 1. Import your local video file
import heroVideo from "../../assets/videos/hero_background.mp4";

function Home() {
  return (
    // 'h-screen' ensures this section takes up the full height of the viewport
    <section id="home" className="h-screen relative overflow-hidden">
      
      {/* --- 1. Video Background Element --- */}
      <video
        autoPlay
        loop
        muted
        // Use object-cover to make sure the video fills the container
        className="absolute z-0 w-full h-full object-cover"
      >
        {/* Use the imported variable as the source */}
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* --- 2. Semi-Transparent Overlay --- 
          Crucial for making the white/gold text readable over the video */}
      <div className="absolute z-10 w-full h-full bg-blush-blue opacity-50"></div>
      
      {/* --- 3. Content (Centered Text) Layer --- */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-8">
        <p className="text-xl tracking-widest uppercase font-light text-bloom-gold mb-4">
            Welcome to
        </p>
        <h1 className="text-8xl font-serif font-extrabold text-white leading-snug tracking-wider drop-shadow-lg">
          Blush & Bloom
        </h1>
        <p className="mt-6 text-2xl font-light text-white/90 max-w-2xl">
          Crafting unforgettable, elegant events tailored to your unique love story and vision.
        </p>
        <button className="mt-12 px-10 py-4 bg-bloom-gold text-blush-blue text-xl font-semibold rounded-full shadow-xl hover:bg-opacity-90 transition duration-300 transform hover:scale-[1.02]">
          Start Planning Your Event
        </button>
      </div>

    </section>
  );
}

export default Home;