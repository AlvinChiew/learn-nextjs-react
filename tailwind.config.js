/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{jsx,tsx}',
    './components/**/*.{jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-exo2)', 'san-serif'],
        orbitron: ['var(--font-orbitron)', 'san-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};