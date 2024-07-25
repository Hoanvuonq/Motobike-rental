/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#62fff0",
        booking: "#f5f5f5",
      },
      backgroundColor: {
        zalo: "#2196F3",
        about: "#f8f8f8",
        phone: "#6fd626",
        layout: "#343434",
        itemsCheckbox: "rgba(0, 0, 0, 0.03)"
      },
      borderColor: {
        header: "rgba(255, 255, 255, 0.25)",
        boxSearch: "rgba(255,255,255,.15)",
        items: "#f2f6f7",
        card: "#e6e6e6"
      },
    },
  },
  plugins: [],
});
