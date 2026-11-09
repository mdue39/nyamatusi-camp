/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { brand: "#E8531A" },
      fontFamily: { sans: ["Montserrat", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};