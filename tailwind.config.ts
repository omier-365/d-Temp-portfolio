import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0F',
        foreground: '#F8F8FF',
        card: {
          DEFAULT: '#111118',
          foreground: '#F8F8FF',
        },
        primary: {
          DEFAULT: '#7C3AED',
          foreground: '#F8F8FF',
        },
        muted: {
          DEFAULT: '#1E1E2E',
          foreground: '#A0A0B8',
        },
        accent: {
          DEFAULT: '#A855F7',
          foreground: '#F8F8FF',
        },
        border: '#1E1E2E',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(124, 58, 237, 0.4)',
        'glow-lg': '0 0 40px rgba(124, 58, 237, 0.3)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}

export default config
