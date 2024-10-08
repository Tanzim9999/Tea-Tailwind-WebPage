/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './index.html',
    ],
    theme:   
   {
      extend: {
        fontFamily: {
          'manrope': ['Manrope', 'sans-serif'],   
   
        },
      },
    },
    plugins: [],
  }