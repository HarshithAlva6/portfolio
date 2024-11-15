/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      margin: {
        '50p': '50%', 
      },
      padding: {
        '12vw': '12vw',
      }
    },
  },
  plugins: [],
}

