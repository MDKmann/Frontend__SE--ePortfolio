/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      extend: {
        keyframes: {
            scroll: {
                '0%': { transform: 'translateY(3px)'},
                '100%': { transform: 'translateY(-3px)'}
            }
          },
        animation: {
            scroll: 'scroll 1s infinite alternate-reverse',
          }
      }
    }
  }