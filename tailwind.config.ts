import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        px: {
          bg: '#F8FAFC',
          card: '#FFFFFF',
          navy: '#001027',
          dark: '#020B18',
          muted: '#5B6472',
          line: 'rgba(0, 16, 39, 0.08)',
          teal: {
            DEFAULT: '#00B8B3',
            lt: '#E6FAF9',
            dk: '#029090',
          },
          layer: {
            app: '#E11D48',
            client: '#475569',
            ai: '#00B8B3',
            data: '#2563EB',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: '0 4px 20px -2px rgba(0, 16, 39, 0.05)',
        glow: '0 0 25px rgba(0, 184, 179, 0.25)',
        stage: '0 25px 60px -15px rgba(0, 16, 39, 0.5)',
      }
    },
  },
  plugins: [],
}
export default config
