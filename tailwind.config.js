/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Salisbury', 'serif'],
      },
      colors: {
        background: '#1a1a1a',
        title: '#ffffff',
        subtitle: '#ababab',
        text: '#ababab',
        button: '#2d77e0',
      },
    },
  },
  plugins: [],
};