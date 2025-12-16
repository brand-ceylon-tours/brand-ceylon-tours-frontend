/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-source-sans)', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f9ff',   // Lightest blue
          100: '#e0f2fe',  // Very light blue
          200: '#bae6fd',  // Light blue
          300: '#7dd3fc',  // Medium light blue
          400: '#38bdf8',  // Medium blue
          500: '#0ea5e9',  // Base blue
          600: '#0284c7',  // Primary blue (main brand color)
          700: '#0369a1',  // Dark blue
          800: '#075985',  // Darker blue
          900: '#0c4a6e',  // Darkest blue
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
    },
  },
  plugins: [],
}

