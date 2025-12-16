// src/App.jsx

import Navbar from './components/layout/Navbar'; // We will reuse the Navbar component
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen">
      
      {/* 1. Fixed Navigation Bar */}
      {/* The Navbar will now use <a> tags to link to section IDs */}
      <Navbar /> 

      {/* 2. Sequential Page Sections */}
      <main>
        {/* Each section component MUST have its unique ID matching the Navbar link */}
        <Home />
        <About />
        <Services />
        <Contact />
      </main>
      
      {/* Optional: Add a simple Footer */}
      {/* <Footer /> */}

    </div>
  );
}

export default App;