const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  important: true,
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        kbar: fontFamily.sans,
        sans: ['var(--font-poppins)', ...fontFamily.sans],
      },
      borderColor: {
        toast: {
          dark: 'rgb(48, 50, 54)',
        },
      },
      backgroundColor: {
        white: '#f2f2f2',
        black: '#08070b',

        linkedin: '#0e76a8',
        github: '#171515',

        modal: {
          'dark-transparent': 'rgba(0, 0, 0, .8)',
        },

        gray: {
          '500': '#85909c',
          '900': '#212024',
        }
      },
      backgroundImage: {
        'about-gradient': 'linear-gradient(135deg, rgb(149, 128, 255) 0%, rgb(128, 255, 234) 100%)',
        'projects-gradient': 'linear-gradient(135deg, rgb(128, 255, 234) 0%, rgb(138, 255, 128) 100%)',
        'articles-gradient': 'linear-gradient(135deg, #fb923c 0%, #ff80bf 100% )',
      },
      textColor: {
        linkedin: '#0e76a8',
        github: '#171515',

        success: '#4cb782',
        error: '#b75c4c',

        toast: {
          dark: 'rgb(138, 143, 152)',
          light: 'rgb(138, 143, 152)',
        }
      },
      colors: {
        toast: {
          box: 'rgb(0 0 0 / 8%) 0px 4px 13px',
        }
      },
      animation: {
        'toast-open': '100ms ease-in forwards slideUpAndFade',
        'toast-close': '100ms ease-in forwards slideDownAndFade',
      },
      keyframes: {
        slideUpAndFade: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideDownAndFade: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(20px)' },
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/line-clamp'),
    require("tailwindcss-hyphens"),
    require("tailwindcss-selection-variant"),
  ],
  variants: {
    extend: {
      textColor: [
        "selection"
      ],
      backgroundColor: [
        "selection"
      ],
    },
  }
}
