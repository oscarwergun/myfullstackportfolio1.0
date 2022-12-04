/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      heroButtons: "rgb(242, 177, 37)",
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss-brand-colors"),
    require("tailwindcss-debug-screens"),
  ],
};
