/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'xs': '375px',
      'xm': '412px',
      'sm': '414px',
      'sx': '667px',
      'sd': '684px',
      'sg': '734px',
      'md': '768px',
      'lg': '1024px',
      ...defaultTheme.screens,
    },
    
    extend: {},
  },
  plugins: [],
}
