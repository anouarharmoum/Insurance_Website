/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      objectPosition: {
        'center-top': '50% 30%', // Custom object position
      },

      keyframes: {
        moveUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        moveUpDown: 'moveUpDown 3s infinite',
      },
      colors: {
        customBlue:'#03045e',
        customGray: '#6c757d',
        
        customWhite: '#f9f7f3',
        customGray2: '#cad2c5',
        
      },
    },
  },
  variants: {},
  plugins: [
    
  ],
}
