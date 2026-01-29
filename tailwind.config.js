/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Pastikan ini mengarah ke folder src
  ],
  theme: {
    extend: {
      colors: {
        netflixRed: '#E50914',
        netflixDark: '#141414',
        netflixGray: '#e5e5e5',
      },
    },
  },
  plugins: [],
};