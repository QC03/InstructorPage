import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        sans: ['SUIT', 'Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config