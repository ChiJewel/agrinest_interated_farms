/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#124734',
          50: '#f0f7f4',
          100: '#dceee6',
          200: '#bcdecfile',
          300: '#91c7b3',
          400: '#4c9679',
          500: '#2c7358',
          600: '#1b5b44',
          700: '#154e3a',
          800: '#124734', // Primary brand color
          900: '#0c3224',
          950: '#051d15',
        },
        leaf: {
          DEFAULT: '#5B8C2A',
          50: '#f4f8ee',
          100: '#e5f0d8',
          200: '#cce2b4',
          300: '#add089',
          400: '#8ebb5e',
          500: '#5B8C2A', // Secondary agriculture highlight
          600: '#497321',
          700: '#395a1c',
          800: '#30491b',
          900: '#2a3e1a',
        },
        gold: {
          DEFAULT: '#F2B632',
          50: '#fefbf3',
          100: '#fdf4e1',
          200: '#fae4b9',
          300: '#f6ce87',
          400: '#F2B632', // Accent Harvest Gold
          500: '#df9c19',
          600: '#c27a12',
          700: '#9b5612',
          800: '#7e4416',
          900: '#693816',
        },
        earth: {
          DEFAULT: '#79502F',
          50: '#f9f6f2',
          100: '#f1eae2',
          200: '#e4d6c6',
          300: '#d0baa3',
          400: '#b8987b',
          500: '#9e7958',
          600: '#79502F', // Earth brown
          700: '#674227',
          800: '#553723',
          900: '#472f20',
        },
        cream: {
          DEFAULT: '#F8F5EA',
          50: '#ffffff',
          100: '#fdfcf9',
          200: '#faf8f2',
          300: '#F8F5EA', // Main warm background
          400: '#eee8d3',
          500: '#dfd4b3',
          600: '#c8b78c',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(18, 71, 52, 0.05)',
        'premium': '0 12px 30px -10px rgba(18, 71, 52, 0.12)',
        'elevated': '0 20px 40px -15px rgba(18, 71, 52, 0.18)',
      }
    },
  },
  plugins: [],
}
