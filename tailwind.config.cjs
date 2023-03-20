/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      yellow: "#FDE76F",
      blue: "#3468DB",
      red: "#CE0E17",
      orange: "#FFA92C",
      green: "#4FB47D",
      black: "#212121",
      white: "#F3F3F3"


    }
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
