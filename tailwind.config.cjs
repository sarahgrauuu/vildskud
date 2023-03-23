/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,vue,js,ts,jsx,tsx}",
    "./src/index.html",
    "./src/event1.html",
    "./src/event2.html",
    "./src/event3.html",
    "./src/opencall.html",
    "./src/program.html",
    "./src/frivillige.html",
    "./src/om.html",
    "./src/kontakt.html",
    "./src/whatfires.html",
    "./src/gogoyo.html",
    "./src/rebirth.html",
    "./src/frygten.html",
  ],

  theme: {
    colors: {
      yellow: "#FDE76F",
      blue: "#3468DB",
      red: "#CE0E17",
      orange: "#FFA92C",
      green: "#4FB47D",
      black: "#212121",
      white: "#F3F3F3",
    },
    extend: {
      fontFamily: {
        Righteous: ["Righteous", "sans-serif"],
        Quicksand: ["Quicksand", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
