/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      titleName: ['Black Han Sans'],
      newsCycle: ['News Cycle'],
    },
    colors: {
      'darkGreen': '#022627',
      'darkBrown': '#333333',
      'codingDiv': '#272727',
      'darkRed': '#8B0000',
      'darkBlueGreen': '#044546',
      'salmon': '#E79380',
      'darkSalmon': '#c47564',
      'lemonChiffon': '#FFF4CB',
      'darkOliveGreen': '#4B7233',
      'themeTan': '#D8B390',
      'navyBlue': '#002f6c',
      'white': '#FFFFFF'
    },
    screens: {
      '2xlMax': {'max': '1110px'},
      '2xlMin': {'min': '1110px'}, // do I need mins?
      'xlMax': {'max': '900px'},
      'xlMin': {'min': '900px'}, // do I need mins?
      'lgMax': {'max': '755px'},
      'lgMin': {'min': '755px'},
      'mdMin': {'min': '600px'},
      'mdMax': {'max': '600px'},
      'smMin': {'min': '500px'},
      'smMax': {'max': '500px'},
    },
    extend: {},
  },
  plugins: [],
}

