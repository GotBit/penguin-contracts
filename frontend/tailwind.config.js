module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-text': '#7C9AC2',
        dark: '#020931',
      },
    },

    fontFamily: {
      default: ['Josefin Sans'],
    },
  },
}
