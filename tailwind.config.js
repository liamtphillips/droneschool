/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          raleway: ["Raleway", "sans-serif"],
        },
      backgroundImage: {
        'paper': "url('./images/paper.png')",
      },
    
    },
  },
  plugins: [],
}
