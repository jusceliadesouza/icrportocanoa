/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        emerald: {
          700: '#006B5D',
        },
        teal: {
          200: '#84DDE0',
          500: '#68BAB1',
        },
        orange: {
          500: '#FFa62b',
        },
        red: {
          700: '#931621'
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      },
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.6xl') },
        'h2': { fontSize: theme('fontSize.5xl') },
        'h3': { fontSize: theme('fontSize.4xl') },
        'h4': { fontSize: theme('fontSize.3xl') },
        'h5': { fontSize: theme('fontSize.2xl') },
        'h6': { fontSize: theme('fontSize.xl') },
      })
    })
  ],
}
