const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans],
      },
      backgroundColor: {
        white: '#f2f2f2',
        black: '#08070b',

        linkedin: '#0e76a8',
        github: '#171515',

        gray: {
          '500': '#85909c',
        }
      },
      textColor: {
        linkedin: '#0e76a8',
        github: '#171515',
      }
    },
  },
  plugins: [],
}
