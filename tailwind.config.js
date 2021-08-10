const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#80B4FB',
        secondary: '#FEBB2C',
      },
      lineHeight: {
        '14': '3.5rem',
      },
      minWidth:{
        '32': '8rem',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['label-checked'],
      borderWidth: ['first', 'last'],
    }
  },
  plugins: [ 
    plugin(({ addVariant, e }) => {
      addVariant('label-checked', ({ modifySelectors, separator }) => {
        modifySelectors(
            ({ className }) => {
                const eClassName = e(`label-checked${separator}${className}`); // escape class
                const yourSelector = 'input[type="checkbox"]'; // your input selector. Could be any
                return `${yourSelector}:checked ~ .${eClassName}`; // ~ - CSS selector for siblings
            }
        )
      })
    }),
  ],
}
