/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        // --- SERVICES MARQUEE ANIMATIONS ---
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        
        // --- FLOATING GALLERY ANIMATIONS ---
        floatTL: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(-220px,-180px)" },
        },
        floatTR: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(220px,-180px)" },
        },
        floatBL: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(-220px,180px)" },
        },
        floatBR: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(220px,180px)" },
        },
        floatUp: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-220px)" },
        },
        floatDown: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(220px)" },
        },
      },
      animation: {
        // Services
        marquee: 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        
        // Gallery
        floatTL: "floatTL 14s ease-in-out infinite",
        floatTR: "floatTR 14s ease-in-out infinite",
        floatBL: "floatBL 14s ease-in-out infinite",
        floatBR: "floatBR 14s ease-in-out infinite",
        floatUp: "floatUp 14s ease-in-out infinite",
        floatDown: "floatDown 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};