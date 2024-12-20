/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Ensure Tailwind works with your React files
  ],
  theme: {
    extend: {
      screens: {
        'md': '958px', // md breakpoint at 958px
        'lg': '1075px', // lg breakpoint at 1075px
      },
      animation: {
        'slide-left': 'slideLeft 0.2s ease-out', // Horizontal slide animation
      },
      keyframes: {
        slideLeft: {  // Animation's name
          '0%': {
            transform: 'translateX(-100%)', // Start from left (outside of screen)
          },
          '100%': {
            transform: 'translateX(0)', // End at normal position
          },
        },
          
      },
    },
  },
  plugins: [],
}
