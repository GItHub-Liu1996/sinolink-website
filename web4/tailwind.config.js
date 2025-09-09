/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0B1120',
        },
        text: {
          main: '#D1D5DB',
          heading: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}