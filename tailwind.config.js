/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // for App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // for Page Router
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '991px', // changed from 1024px
      xl: '1280px',
    },
  },
  plugins: [],
}


