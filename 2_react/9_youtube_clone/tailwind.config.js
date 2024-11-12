/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // varsayılan fontu değiştirme
    fontFamily: {
      sans: ['roboto', 'sans-serif'],
    },

    extend: {
      colors: {
        bg: '#0F0F0F',
        secondary: '#3E403F',
      },
    },
  },
  plugins: [],
};
