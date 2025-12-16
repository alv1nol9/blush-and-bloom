// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  // 🚨 THIS SECTION MUST BE CORRECT 🚨
  content: [
    "./index.html", // Scans your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all files in your src folder with these extensions
  ],
 theme: {
    extend: {
      colors: {
        'blush-blue': '#4A6FA5', // A rich, wedding-appropriate blue
        'bloom-gold': '#FFD700', // Classic, bright gold
        'accent-light': '#F5F5DC', // Beige/Cream for contrast
      },
    },
  },
  plugins: [],
}