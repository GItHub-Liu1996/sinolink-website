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
        sans: ['Source Sans Pro', 'Inter', 'Open Sans', 'sans-serif'], // Vistra风格专业字体
        body: ['Inter', 'Source Sans Pro', 'sans-serif'],     // 正文字体 - 专业清晰
        heading: ['Source Sans Pro', 'Inter', 'sans-serif'], // 标题字体 - 企业级
      },
      colors: {
        background: {
          primary: '#FFFFFF',      // Vistra's white background
          secondary: '#F8FAFC',   // Vistra's light gray background
          tertiary: '#F1F5F9',    // Vistra's elevated elements
          accent: '#1E40AF',      // Vistra's accent background
        },
        text: {
          main: '#1E293B',        // Vistra's dark text color
          heading: '#0F172A',     // Vistra's dark heading color
          muted: '#64748B',        // Vistra's muted text
          accent: '#3B82F6',      // Vistra's accent text
        },
        accent: {
          primary: '#3B82F6',     // Vistra's primary blue
          secondary: '#1D4ED8',   // Vistra's darker blue
          cyan: '#06B6D4',        // Vistra's cyan accent
          magenta: '#8B5CF6',     // Vistra's purple accent
          orange: '#F59E0B',      // Vistra's orange accent
        },
        status: {
          success: '#10B981',     // Vistra's success green
          warning: '#F59E0B',     // Vistra's warning amber
          error: '#EF4444',       // Vistra's error red
          info: '#3B82F6',        // Vistra's info blue
        },
      },
      backgroundImage: {
        'vistra-primary': 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
        'vistra-secondary': 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
        'vistra-accent': 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
        'vistra-warm': 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
        'vistra-hero': 'linear-gradient(135deg, #0B1120 0%, #1E293B 50%, #0B1120 100%)',
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
