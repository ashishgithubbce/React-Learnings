/** @type {import('tailwindcss').Config} */
module.exports = {
  //content: Where Tailwind looks for class names (important for tree-shaking unused CSS).
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // important for React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
