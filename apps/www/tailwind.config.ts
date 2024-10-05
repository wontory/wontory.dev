import type { Config } from 'tailwindcss'

import base from '@wontory/ui/tailwind-config'

const config = {
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  presets: [base],
  plugins: [require('@tailwindcss/typography')],
} satisfies Config

export default config
