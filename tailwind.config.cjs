/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'cutive': ['"Cutive Mono"', 'monospace'],
        'emoji': ['"Noto Color Emoji"', 'sans-serif']
      }},
  },
  plugins: [],
}
