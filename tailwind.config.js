/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        text: [
          "var(--font-text)",
          "sans-serif"          
        ],
        tabs: [
          "var(--font-subText)",
          "sans-serif"
        ],
        heading: [
          "var(--font-heading)",
          "serif"
        ]
      },
    },
  },
  plugins: [],
};
