/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'row-span-2', 'row-span-4',
    'col-span-2', 'col-span-3', 'col-span-4', 'col-span-6',
  ],
}

