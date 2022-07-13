/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'inner-lg': '0 40px 60px rgba(0, 0, 0, 0.3) inset',
      }
    },
  },
  plugins: [],
}