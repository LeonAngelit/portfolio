const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*{html,js,jsx}'],
  theme: {
    colors: {
      ...colors,
      'bg-green': '#91c13e',
      'noir': '#262626',
    },
    extend: {
      fontFamily: {
        edu: ['Edu SA Beginner', "cursive"]
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
