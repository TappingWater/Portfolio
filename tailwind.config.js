/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontWeight: {
      light: '400',
      normal: '500',
      semibold: '600',
      bold: '700'
    },
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
