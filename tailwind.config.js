/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1C120E', // Espresso Brown
        secondary: '#C9A15D', // Brushed Gold
        accent: '#D9C7B1', // Sand Beige
        background: '#1C120E',
        dark: '#1C120E',
        espresso: {
          DEFAULT: '#1C120E',
          dark: '#140C09',
          medium: '#2E1F1A',
          light: '#3E2B25',
          card: '#2E1F1A',
        },
        cocoa: {
          DEFAULT: '#2E1F1A',
          dark: '#1C120E',
          light: '#3D2A23',
        },
        taupe: {
          DEFAULT: '#8B6E58',
          light: '#A4866E',
          dark: '#6E5441',
        },
        bronze: {
          DEFAULT: '#B38A58',
          light: '#CA9F6A',
          dark: '#926C3B',
        },
        gold: {
          DEFAULT: '#C9A15D',
          light: '#E2C384',
          bright: '#F0D495',
          dark: '#B38A58',
          muted: '#8B6E58',
        },
        sand: {
          DEFAULT: '#D9C7B1',
          light: '#EFE5D8',
          dark: '#BFAF99',
        },
        charcoal: {
          DEFAULT: '#2A2A2A',
          dark: '#1F1F1F',
          light: '#3A3A3A',
        },
        forest: {
          DEFAULT: '#1C120E',
          dark: '#140C09',
          medium: '#2E1F1A',
          light: '#3E2B25',
          card: '#2E1F1A',
        },
        cream: {
          DEFAULT: '#D9C7B1',
          light: '#EFE5D8',
          medium: '#C9B79E',
          dark: '#A9977E',
        },
      },
      fontFamily: {
        sans: ['"Montserrat"', '"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 60px -15px rgba(28, 18, 14, 0.12)',
        gold: '0 10px 40px -10px rgba(201, 161, 93, 0.4)',
        deep: '0 30px 80px -20px rgba(20, 12, 9, 0.6)',
        card: '0 12px 32px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E2C384 0%, #C9A15D 50%, #B38A58 100%)',
        'forest-gradient': 'linear-gradient(180deg, #1C120E 0%, #140C09 100%)',
        'espresso-gradient': 'linear-gradient(180deg, #2E1F1A 0%, #1C120E 100%)',
        'cream-gradient': 'linear-gradient(180deg, #EFE5D8 0%, #D9C7B1 100%)',
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'kenburns': {
          '0%': { transform: 'scale(1) translate(0,0)' },
          '50%': { transform: 'scale(1.12) translate(0.8%, -0.8%)' },
          '100%': { transform: 'scale(1) translate(0,0)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.03)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 16s linear infinite',
        'kenburns': 'kenburns 14s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
