/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#161617",
        secondary: "#FF9000",
        cusgray: "#161617",
        lightgray: "#DADAD7",
      },
      fontFamily: {
        arial: ["Arial", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
}
