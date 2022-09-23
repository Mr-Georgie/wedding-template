/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "trans-black": "rgba(0, 0, 0, 0.5)",
        "hover-black": "rgba(0, 0, 0, 0.9)",
        "custom-dark-blue": "#0A192F",
        "custom-white": "#CCD6F6",
        "custom-grey": "#8892B0",
        "custom-green": "#64FFDA",
        "custom-indigo": "#6C63FF",
        "burnt-orange": "#CB6015",
        teal: "#008080",
      },
      screens: {
        // 'sm': '576px',
        // => @media (min-width: 576px) { ... }
        // 'md': '710px',
        // => @media (min-width: 960px) { ... }
        // 'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
};
