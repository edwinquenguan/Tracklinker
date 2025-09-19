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
        slideIn: {
          '0%': { transform: 'translateX(-5px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-out',
        modalFadeIn: 'modalFadeIn 0.5s ease-out forwards',
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

