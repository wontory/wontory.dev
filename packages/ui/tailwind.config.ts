import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './src/components/**/*.tsx',
    '../../packages/ui/src/components/**/*.tsx',
  ],
  prefix: 'ui-',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
  },
} satisfies Config

export default config
