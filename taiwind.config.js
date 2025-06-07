/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './app/**/*.{js,ts,jsx,tsx}'], // ajuste si t’utilises /app
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
                sans: ['Space Grotesk', 'sans-serif'],

      },
    },
  },
  plugins: [],
}
