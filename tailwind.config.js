/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ['"Montserrat"', "sans-serif"],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
};
