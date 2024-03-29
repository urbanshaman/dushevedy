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
        'site': ['Forum', 'site']
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
