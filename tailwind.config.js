/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      /* Auxo UX/UI Custom Colour Tokens */

      transparent: 'transparent',
      black: 'black',
      white: 'white',
      'navbar-bg': '#252F3D',
      'text': '#2C3642',
      'input-text': '#333333',
      'input-outline': '#A5B6CD',
      'button': '#127C95',
      'button-text': '#FFFFFF',

    },
    screens: {
      "small": "640px", // @media (min-width: 640px)
      
      "medium": "768px", // @media (min-width: 768px)

      "large": "1024px", // @media (min-width: 1024px)

      "xlarge": "1280px", // @media (min-width: 1280px)

      "2xlarge": '1536px', // @media (min-width: 1536px)
    }
  },
  plugins: [],
}