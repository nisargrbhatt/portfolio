/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js|jsx|ts|tsx}',
    './components/**/*.{js|jsx|ts|tsx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
  },
  plugins: [],
};
