module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './public/**/*.html',
    './public/**/*.js'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'blue-details': '#1e90ff',
      },
      textColor: {
        'blue-details': '#1e90ff',
      },
      borderColor: {
        'blue-details': '#1e90ff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
