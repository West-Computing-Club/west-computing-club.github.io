/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 1s ease-in-out infinite',
        'fade-in': 'fadeIn 2s linear',
        'fade-in-fast': 'fadeIn 0.5s linear',
        'spin-slow': 'spin 3s linear infinite',
        'spin-fast': 'spin 1s linear infinite',
        'slide-right': 'slide_right 1s ease-in-out',
        'slide-left': 'slide_left 1s ease-in-out',
        'breath': 'breath 3s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 
            'background-position': '100% 0'
          },
          '50%': { 
            'background-position': '-100% 0'
           },
           
        },
        fadeIn: {
          '0%': { opacity: 0.2 },
          '100%': { opacity: 1 },
        },
        slide_left: {
          '0%': { transform: 'translateX(-100%)' },
          '80%': { transform: 'translateX(5%)' },
          '100%' : { transform: 'translateX(0%)' },
        },
        slide_right: {
          '0%': { transform: 'translateX(100%)' },
          '80%': { transform: 'translateX(-5%)' },
          '100%' : { transform: 'translateX(0%)' },
        },
        breath :{
          '0%': { opacity: 0.2 },
          '30%': { opacity: 1 },
          '70%': { opacity: 1 },
          '100%': { opacity: 0.2 },
        }
      },
  },
  plugins: [],
  }
}

