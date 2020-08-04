/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      borderRadius: {
        default: '4px',
        large: '16px',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      },
      fontFamily: {
        heading: ['Metropolis', 'sans-serif'],
        subheading: ['Inter', 'sans-serif'],
        description: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xxs: '.65rem',
      },
      colors: {
        primary: '#0064FF',
        blue: {
          ...colors.blue,
          primary: '#0a84ff',
          secondary: '#007aff',
          'primary-hvr': '#409cff',
          'secondary-hvr': '#0040dd',
        },
        green: {
          ...colors.green,
          primary: '#30d158',
          secondary: '#34c759',
          'primary-hvr': '#30db5b',
          'secondary-hvr': '#248a3d',
        },
        blue: {
          ...colors.blue,
          primary: '#5e5ce6',
          secondary: '#5856d6',
          'primary-hvr': '#7d7aff',
          'secondary-hvr': '#3634a3',
        },
        orange: {
          ...colors.orange,
          primary: '#ff9f0a',
          secondary: '#ff9500',
          'primary-hvr': '#ffb340',
          'secondary-hvr': '#c93400',
        },
        pink: {
          ...colors.pink,
          primary: '#ff375f',
          secondary: '#ff2d55',
          'primary-hvr': '#ff6482',
          'secondary-hvr': '#d30f45',
        },
        purple: {
          ...colors.purple,
          primary: '#bf5af2',
          secondary: '#af52de',
          'primary-hvr': '#da8fff',
          'secondary-hvr': '#8944ab',
        },
        red: {
          ...colors.red,
          primary: '#ff453a',
          secondary: '#ff3b30',
          'primary-hvr': '#ff6961',
          'secondary-hvr': '#d70015',
        },
        teal: {
          ...colors.teal,
          primary: '#64d2ff',
          secondary: '#5ac8fa',
          'primary-hvr': '#70d7ff',
          'secondary-hvr': '#0071a4',
        },
        yellow: {
          ...colors.yellow,
          primary: '#ffd60a',
          secondary: '#ffcc00',
          'primary-hvr': '#ffd426',
          'secondary-hvr': '#a05a00',
        },
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
