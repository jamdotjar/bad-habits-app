/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#d0e8fc',
        dark: '#010001',
        primary: '#6b3497',
        secondary: '#335dfa',
        info: '#4494f8',
        accent1: '#41404b',
        accent2: '#636681',
        accent3: '#a8a5a3',
        success: '#09a264',
        warning: '#decc0a',
        danger: '#eb2a03',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}