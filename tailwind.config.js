/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      keyframes: {
        show: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        disappear: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        rotateCell: {
          '0%': { transform: 'rotateX(180deg)' },
          '100%': { transform: 'rotateX(0deg)' },
        },
      },
      animation: {
        show: 'show 500ms linear 300ms',
        disappear: 'disappear 200ms linear',
        rotate: 'rotateCell 300ms linear 300ms',
      },
      fontFamily: {
        'nyt-franklin': ["'nyt-franklin'", 'sans-serif', 'system-ui'],
        'nyt-karnakcondensed': [
          "'nyt-karnakcondensed'",
          'sans-serif',
          'system-ui',
        ],
      },
    },
  },
  plugins: [],
}
