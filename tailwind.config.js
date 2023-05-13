/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#fd7e14",
        yellow: "#ffa501",
        dark: "#000010",
        light:'#eeeeee',
        grayDark: "#b3b3b3",
        grayLight: "#ffffff20",
        grayLighter: "#141421",
        grayHover: '#ffffff40',
        darkTow: '#1a1a1a',
        authBg: '#0a101d',
        authBorder: '#0a111d',
      },

      spacing:{
        255: "255px",
        150: "150px",
        550: "550px",
      },

      filter: {
        'custom-filter': 'invert(57%) sepia(86%) saturate(809%) hue-rotate(359deg) brightness(103%) contrast(105%)',
      },


    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
};
