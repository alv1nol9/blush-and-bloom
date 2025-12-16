// src/pages/Services.jsx

import React from 'react';
// Import the image for the services background
import servicesBgImage from "../assets/images/services_bg.jpg";

// Data definition from above
const servicesData = [
    { title: "Corporate Events", icon: "📈", description: "From team buildings and award galas to launch parties, our experts craft unforgettable corporate experiences tailored to your needs." },
    { title: "Wedding Planning", icon: "💍", description: "Comprehensive planning and coordination to ensure your special day is seamless, beautiful, and stress-free from start to finish." },
    { title: "Private Functions", icon: "🍾", description: "Curated parties, anniversaries, and intimate gatherings that reflect your personal style and leave a lasting impression on your guests." },
    { title: "Vendor Management", icon: "🤝", description: "We handle all vendor bookings, contracts, and communication, securing the best rates through our established partnership network." },
];

function Services() {
  return (
    <section 
      id="services" 
      className="h-screen relative w-full flex flex-col items-center p-10 overflow-auto" // Added overflow-auto for scrolling services
      style={{ 
        backgroundImage: `url(${servicesBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      
      {/* Background Overlay (Slightly lighter to let the content shine) */}
      <div className="absolute z-0 inset-0 bg-black opacity-60"></div>
      
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl text-center py-12">
        
        <h2 className="text-6xl font-serif font-bold text-bloom-gold mb-4">
          Our Services
        </h2>
        <p className="text-xl text-white/80 mb-12">
          We provide a wide range of services designed to bring your dream event to life.
        </p>

        {/* Services Grid (Grid layout, 2 columns on desktop) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="bg-white/95 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 text-blush-blue flex flex-col items-center text-center"
            >
              
              {/* --- Circular Icon/Accent Area --- */}
              <div className="w-20 h-20 bg-blush-blue/10 rounded-full flex items-center justify-center mb-6 border-4 border-bloom-gold">
                <span className="text-4xl" role="img" aria-label={service.title}>
                  {service.icon}
                </span>
              </div>
              
              <h3 className="text-2xl font-semibold text-blush-blue mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Services;