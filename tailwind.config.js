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
        // Corners
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

        // Vertical
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
