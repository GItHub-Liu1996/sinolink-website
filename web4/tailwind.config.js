/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        body: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        background: {
          DEFAULT: '#0B1120',
          secondary: '#1A2130',
        },
        text: {
          main: '#D1D5DB',
          heading: '#FFFFFF',
        },
        accent: {
          cyan: '#22d3ee',
          magenta: '#c026d3',
        },
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(90deg, #22d3ee, #c026d3)',
      },
    },
  },
  plugins: [],
}