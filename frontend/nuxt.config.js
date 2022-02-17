export default {
  target: 'static',
  ssr: false,

  head: {
    title: 'Penguin Karts',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap',
      },
    ],
  },

  css: ['@/assets/css/tailwind.css', '@/assets/css/style.css'],

  plugins: ['./types/string.ts', './types/bignumber.ts'],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
    '@pinia/nuxt',
  ],

  modules: ['@nuxt/postcss8', 'nuxt-material-design-icons'],

  build: {
    transpile: ['mdi-vue'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
