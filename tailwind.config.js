/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      bilbo:["Bilbo Swash Caps","cursive"],
      bebas:["Bebas Neue", "sans-serif"],
      mukta:["Mukta","sans-serif"],
    }
  },
  plugins: [],
}