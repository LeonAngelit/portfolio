const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*{html,js,jsx}'],
  theme: {
    colors: {
      ...colors,
      'bg-green': '#91c13e',
      noir: '#262626',
    },
    extend: {
      fontFamily: {
        edu: ['Edu SA Beginner', 'cursive'],
      },
      keyframes: {
        typing: {
          'from': {
            width: 0,
          },
         
        },
          effect: {
            '50%': 'border-color:transparent',
        },
      },
      animation: {
        'type': 'typing 3s steps(35)',
        'effects': 'effect 5s step-end infinite alternte'
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
