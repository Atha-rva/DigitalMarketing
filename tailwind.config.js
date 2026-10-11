/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#08090B',
        paper: '#FFFFFF',
        lime: '#0066FF',
        violet: '#168BFF',
        muted: '#A0A3AA',
        border: 'rgba(0, 102, 255, 0.12)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(3rem, 9vw, 10rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        display: ['clamp(2.5rem, 7vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        section: ['clamp(2rem, 5vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        large: ['clamp(1.5rem, 3vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
