/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      display: ["Cinzel Decorative"],
      runic: ["Noto Sans Runic"]
    },
    extend: {
      colors: {
        primary: colors.neutral,
        customBrown: {
          50: '#fff8e9',
          100: '#fff2d7',
          200: '#ffeeb6',
          300: '#ead098',
          400: '#d3b16e',
          500: '#c69c60',
          600: '#b5884d',
          700: '#a57949',
          800: '#966a42',
          900: '#7c593d',
          950: '#603f29'
        }
      }
    },
  },
  plugins: [],
}

