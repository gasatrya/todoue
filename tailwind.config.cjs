/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        nord0: '#ECEFF4',
        nord1: '#D8DEE9',
        nord2: '#4C566A',
        nord3: '#E5E9F0',
        nord4: '#5E81AC',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
  },
  // experimental: {
  //   optimizeUniversalDefaults: true,
  // },
}
