const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        "primary-100": "#e0e1dd",
        "primary-200": "#778da9",
        "primary-300": "#415a77",
        "primary-400": "#1b263b",
        "primary-500": "#0d1b2a",
        "secondary-100": "#333333",
      },
    },
  },
  plugins: [],
};
