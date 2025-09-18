/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        aside: {
          from: { opacity: "0", transform: "translateX(-100%)"},
          to: { opacity: "1", transform: "translateX(0%)"},
        },
        activeOption: {
          from: { opacity: "0", transition:"background-color(#000000) .5s" },
          to: { opacity: "1", transition:"background-color(#FFFFFF) .5s" },
        }
      },
      animation: {
        aside: "aside 0.7s ease-out forwards",
        activeOption : "activeOption 0.5s ease-out",
      },
    },
  },
  plugins: [],
  safelist: [
    'row-span-2', 
    'row-span-4',
    'col-span-2', 
    'col-span-3', 
    'col-span-4', 
    'col-span-6',
  ],
};

