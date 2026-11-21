/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#060403',
          900: '#0A0806',
          850: '#0E0B08',
          800: '#130F0C',
          750: '#18130F',
          700: '#1E1914',
          600: '#2A231C',
        },
        gold: {
          50: '#FAF6ED',
          100: '#F5EDDC',
          200: '#EBD8B8',
          300: '#DFC293',
          400: '#D4AF6E',
          500: '#C5A059',
          600: '#B08B42',
          700: '#8E6D30',
          800: '#6C5123',
        },
        cream: {
          50: '#FDFBF7',
          100: '#FAF7F2',
          200: '#F2ECE1',
          300: '#E6DCCB',
        },
        sand: {
          100: '#EFE7DA',
          200: '#E3D7C3',
          300: '#D2C1A6',
          400: '#B9A183',
          500: '#9B8164',
          600: '#7E674D',
        },
        earth: {
          700: '#47382A',
          800: '#33271C',
          900: '#211912',
          950: '#0E0B08',
        },
        terracotta: {
          300: '#E49B7A',
          400: '#D47E59',
          500: '#BD6440',
          600: '#A14E2D',
        },
        olive: {
          300: '#A2B194',
          400: '#849675',
          500: '#687B59',
          600: '#4F6042',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      fontSize: {
        'display-huge': ['clamp(3.8rem, 11vw, 9.5rem)', { lineHeight: '0.88', letterSpacing: '-0.04em' }],
        'display-2xl': ['clamp(3.2rem, 9vw, 8rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'display-xl': ['clamp(2.6rem, 6.5vw, 5.5rem)', { lineHeight: '0.96', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.0rem, 4.2vw, 3.8rem)', { lineHeight: '1.04', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.6rem, 3.0vw, 2.5rem)', { lineHeight: '1.12', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        content: '1440px',
      },
      boxShadow: {
        'gold-glow': '0 0 25px -4px rgba(197, 160, 89, 0.25)',
        'gold-border': '0 0 0 1px rgba(197, 160, 89, 0.3)',
        'luxury-dark': '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'luxury-hover': '0 30px 70px -12px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(197, 160, 89, 0.45)',
        floating: '0 20px 45px -10px rgba(0, 0, 0, 0.6), 0 1px 0 0 rgba(255, 255, 255, 0.1) inset, 0 0 0 1px rgba(255, 255, 255, 0.08)',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
