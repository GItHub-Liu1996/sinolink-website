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
        sans: ['Montserrat', 'sans-serif'], // 标题字体
        body: ['Lexend', 'sans-serif'],     // 正文字体
      },
      colors: {
        background: {
          DEFAULT: '#0B1120', // 深邃午夜蓝
          secondary: '#1A2130', // 用于卡片
        },
        text: {
          main: '#D1D5DB',      // 主体文字
          heading: '#FFFFFF',    // 标题
        },
        accent: {
          cyan: '#22d3ee',
          magenta: '#c026d3',
        },
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(90deg, #22d3ee, #c026d3)',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.text.main'),
            '--tw-prose-headings': theme('colors.text.heading'),
            '--tw-prose-lead': theme('colors.text.main'),
            '--tw-prose-links': theme('colors.accent.cyan'),
            '--tw-prose-bold': theme('colors.text.heading'),
            '--tw-prose-counters': theme('colors.text.main'),
            '--tw-prose-bullets': theme('colors.accent.cyan'),
            '--tw-prose-hr': theme('colors.gray.700'),
            '--tw-prose-quotes': theme('colors.text.heading'),
            '--tw-prose-quote-borders': theme('colors.accent.cyan'),
            '--tw-prose-captions': theme('colors.text.main'),
            '--tw-prose-code': theme('colors.text.heading'),
            '--tw-prose-pre-code': theme('colors.text.main'),
            '--tw-prose-pre-bg': theme('colors.background.secondary'),
            'h1': {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '700',
            },
            'h2': {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '700',
            },
            'h3': {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '700',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
