/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        solaimanLipi: ["SolaimanLipi", "sans-serif"],
        solaimanLipiBold: ["SolaimanLipiBold", "sans-serif"],
        solaimanLipiThin: ["SolaimanLipiThin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
