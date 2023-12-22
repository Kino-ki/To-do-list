/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pastelgreen": "#a7bc8a",
        // "textgreen": "#7A995F",
      },
    },
  },
  plugins: [],
};
