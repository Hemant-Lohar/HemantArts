module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ['responsive', 'hover','active'],
      borderColor: ['active']
    },
  },
  plugins: [],
}