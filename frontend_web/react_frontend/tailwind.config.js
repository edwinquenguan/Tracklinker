/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        modalFadeIn: { 
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' } 
        },
        modalFadeOut: { 
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.95)' } 
        },
        activeOption: {
          from: { opacity: "0", transition:"background-color(#000000) .5s" },
          to: { opacity: "1", transition:"background-color(#FFFFFF) .5s" },
        },
        slideIn: {
          '0%': { transform: 'translateX(-5px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        activeOption : "activeOption 0.5s ease-out",
        slideIn: 'slideIn 0.5s ease-out',
        modalIn: 'modal-fade-in 0.7s ease-out forwards',
        modalOut: 'modal-fade-out 0.25s ease-in forwards',
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
    'col-span-5', 
    'col-span-6',
  ],
};

