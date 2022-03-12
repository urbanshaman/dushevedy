module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.njk',
    './src/**/*.md'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        'cursive': ['"Bad Script"', 'cursive']
	    }
	  },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
