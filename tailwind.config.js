/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D5C80",
        secondary: "#E37107",
        info: "#D9D9D9",
        line: "#0A8EDA",
      },

      fontFamily: {
        anek: ["Anek Bangla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
