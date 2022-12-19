const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        "color-lightest": "var(--color-lightest)",
        "color-darkest": "var(--color-darkest)",
        "color-main-accent": "var(--color-main-accent)",
        "color-secondary-accent": "var(--color-secondary-accent)",
        "color-tertiary-accent": "var(--color-tertiary-accent)",
      },
      fontFamily: {
        'montserrat': ['Montserrat', ...defaultTheme.fontFamily.sans],
        'oswald': ['Oswald', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}