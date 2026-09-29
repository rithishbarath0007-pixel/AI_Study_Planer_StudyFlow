/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern Electric Ocean Azure & Cyan Palette (replaces generic purple)
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // Electric Ocean Sky
          600: '#0284c7', // Deep Azure Blue
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.06), 0 8px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 25px -4px rgba(14, 165, 233, 0.45)',
        'glow-sm': '0 0 15px -3px rgba(14, 165, 233, 0.35)',
      }
    },
  },
  plugins: [],
}
