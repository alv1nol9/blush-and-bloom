// src/components/layout/Layout.jsx (The Layout Wrapper)

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; // This is your Side Navbar component
import Footer from './Footer'; // Assuming Footer is used at the bottom of the *content* area

function Layout() {
  return (
    <div className="flex min-h-screen">
      
      {/* 1. Fixed Side Navigation (20% width) */}
      <div className="fixed top-0 left-0 h-screen w-1/5 bg-blush-blue shadow-2xl z-50">
        <Navbar />
      </div>

      {/* 2. Main Content Area (Takes up remaining 80% width) */}
      {/* We use inline style here for the precise 20% offset (20vw) */}
      <main className="flex-grow min-h-screen" style={{ marginLeft: '20vw' }}>
          
          {/* Outlet renders the currently active page (Home, Services, Contact, etc.) */}
          <Outlet />

          {/* Footer goes at the bottom of the main content area */}
          <Footer /> 
      </main>
    </div>
  );
}

export default Layout;