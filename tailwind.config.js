/** @type {import('tailwindcss').Config} */

import  plugin  from "tailwindcss/plugin";

module.exports = {
  content: ["./templates/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': 'rgb(31 182 255)',
      'gray': "rgb(133 133 133)",
      'background-gray':'rgb(211 220 230)'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
    },
    extend: {
      typography:{
        'h1': {
          "margin": "0",
          "padding": "0"
        },
        'h2': {
          "margin": "0",
          "padding": "0"
        },
        'h3': {
          "margin": "0",
          "padding": "0"
        },
        'h4': {
          "margin": "0",
          "padding": "0"
        },
        'h5': {
          "margin": "0",
          "padding": "0"
        },
        'h6': {
          "margin": "0",
          "padding": "0"
        },
      },
      colors:{
        "brief-font-color": "rgb(76 73 72)",
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        brief: "0.5rem",
      },
      boxShadow:{
        brief: "0 0.1875rem 0.5rem 0.375rem rgba(7,17,27,0.05)"
      },
    }
  },
  plugins: [ 
    plugin(function({addBase, theme}){
      addBase({
        'h1': {margin: theme('margin.0'),padding: theme('padding.0')},
        'h2': {margin: theme('margin.0'),padding: theme('padding.0')},
        'h3': {margin: theme('margin.0'),padding: theme('padding.0')},
        'h4': {margin: theme('margin.0'),padding: theme('padding.0')},
        'h5': {margin: theme('margin.0'),padding: theme('padding.0')},
        'h6': {margin: theme('margin.0'),padding: theme('padding.0')},
        "p": {margin: theme('margin.0'),padding: theme('padding.0')},
      })
    })
  ],

}

