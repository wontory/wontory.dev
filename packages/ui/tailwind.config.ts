import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: ['./src/components/**/*.tsx'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-pretendard)'],
      },
    },
  },
} satisfies Config

export default config
