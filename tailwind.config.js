/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}", "./dist/portfolio.html"],
  theme: {
    extend: {
      fontFamily: {
        times: ['"Times New Roman"', 'serif'],
      },
      colors: {
        taupe : '#8D7B68',
        beige : '#C8B6A6',
        alabaster : '#FAF5EF',
        brown :'#7A4F32',
        lightBrown :'#E4D6B7',
        darkBrown : '#4B2C20',
      },
      spacing: {
        '29': '7.03rem',
        '33': '8.03rem',
      },
      width: {
        '66' : '16.7rem',
      },
      height: {
        '100' : '28rem',
      },
    },
  },
  plugins: [],
}

