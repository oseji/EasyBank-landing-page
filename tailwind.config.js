/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      width: {
        100: "400px",
        150: "500px",
        200: "600px",
      },
      height: {
        100: "400px",
        150: "500px",
        200: "600px",
        screenDevice: "100dvh",
        screenSmall: "100svh",
      },
      colors: {
        limeGreen: "#38AD57",
        darkBlue: "#2D314D",
        brightCyan: "#2BB7DA",
        grayishBlue: "#9698A6",
      },
      fontFamily: {
        easyBank: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
