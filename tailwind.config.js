/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f1',
          100: '#dcf1de',
          200: '#bce3c1',
          300: '#92ce9a',
          400: '#64b26f',
          500: '#4a9854',
          600: '#387a42',
          700: '#2d6136',
          800: '#274e2d',
          900: '#224127',
          950: '#0f2413',
        },
        secondary: {
          50: '#f6f7f1',
          100: '#e7eadb',
          200: '#d1d9ba',
          300: '#b5c391',
          400: '#9aac6e',
          500: '#7d8e52',
          600: '#61703f',
          700: '#4c5734',
          800: '#40472f',
          900: '#373d2a',
          950: '#1c2015',
        },
        accent: {
          50: '#fef8ee',
          100: '#fbead4',
          200: '#f6d2a9',
          300: '#f1b373',
          400: '#eb8d3a',
          500: '#e67321',
          600: '#d05a18',
          700: '#ad4217',
          800: '#8c351a',
          900: '#732d19',
          950: '#3e150a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};