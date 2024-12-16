/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 255, 255, 0.5)',
        'glow-lg': '0 0 25px rgba(255, 255, 255, 0.7)',
      },
    },
  },
  plugins: [],
};