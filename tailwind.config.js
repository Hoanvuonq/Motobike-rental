/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#62fff0",
        booking: "#f5f5f5",
      },
      backgroundColor: {
        zalo: "#2196F3",
        phone: "#6fd626",
        layout: "#343434",
      },

    },
  },
  plugins: [],
}
