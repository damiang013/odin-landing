/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Kanit'],
        'text': ['Overpass']
      }
    },
  },
  plugins: [],
}

