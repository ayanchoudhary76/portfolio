/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode support via class strategy
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6',
          DEFAULT: '#2563eb',
          dark: '#1d4ed8'
        },
        darkBg: '#0f172a',
        darkCard: 'rgba(30, 41, 59, 0.7)',
        lightBg: '#f8fafc',
        lightCard: 'rgba(255, 255, 255, 0.7)'
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'typing': 'typing 2s steps(20, end)',
        'blink': 'blink 1s step-end infinite'
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' }
        },
        blink: {
          '50%': { borderColor: 'transparent' }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif']
      }
    },
  },
  plugins: [],
}
