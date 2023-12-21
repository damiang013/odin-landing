/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Kanit'],
        'text': ['Overpass'],
      },
      transitionProperty: {
        'bg': 'background color',
      },
      transitionDuration: {
        '.2': '0.2s',
      },
    },
  },
  plugins: [],
}

