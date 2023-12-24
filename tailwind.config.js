/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'color': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        }
      },
      animation: {
        'color': 'color 7s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
    },
    dropShadow: {
      '4xl' : [
        '0 10px 35px rgba(0, 0, 0, 0.34)',
        '0 4px 30px rgba(0, 0, 0, 0.4)'
      ]
    },
    backgroundSize: {
      '300%': '300% 300%'
    },
  },
  plugins: [],
}
